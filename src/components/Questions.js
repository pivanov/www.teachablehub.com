import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import axios from "axios";
import { useSetState } from '@utils/hooks';
import { Button } from 'reactstrap';
import GoogleTagManager from "@utils/GoogleTagManager";
import { validateEmailFormat, getOffset } from "@utils/helpers";

const buildForm = (state, refEmail, { onChangeHandler, checkboxOnChangeHandler }) => {
  let template = [];

  state.schema.forEach(q => {
    let content;
    let extra;

    if (q.type === "select") {
      if (q.options) {
        const options = q.options.map((item) => {
          return <option key={item.value} value={item.value}>{item.value}</option>
        });

        content = (
          <select
            className="custom-select th-questions-other"
            name={q.id}
            onChange={onChangeHandler}
            data-id={q.id}
            data-question={q.name}
          >
            {[
              <option key="please-select" defaultValue disabled hidden>Please Select</option>,
              ...options
            ]}
          </select>
        );
      }
    }


    if (q.type === "checkbox") {
      if (q.options) {
        const { allowMultiple } = q;
        const current = (state.answeres[`q-${q.id}`] || {}).answer || [];
        content = q.options.map((item) => {
          return (
            <div key={item.value} className="custom-control custom-checkbox custom-control th-questions-other">
              <input
                id={item.value}
                type="checkbox"
                className="custom-control-input"
                value={item.value}
                name={q.id}
                checked={current.includes(item.value)}
                onChange={checkboxOnChangeHandler}
                data-id={q.id}
                data-question={q.name}
                data-multiple={allowMultiple}
              />
              <label htmlFor={item.value} className="custom-control-label">{item.value}</label>
            </div>
          )
        });
      }
    }

    if (
      (
        state.answeres[`q-${q.id}`] &&
        state.answeres[`q-${q.id}`].answer &&
        state.answeres[`q-${q.id}`].answer.includes("Other")
      ) ||
      q.type === "text"
    ) {
      extra = (
        <textarea
          className="form-control"
          name={q.id}
          data-id={q.id}
          data-question={q.name}
          data-subanswer={true}
          onChange={onChangeHandler}
        />
      )
    }

    if (q.type === "email") {
      extra = (
        <input
          ref={refEmail}
          type="email"
          className="form-control"
          name="email"
          onChange={onChangeHandler}
          data-id={q.id}
          data-question={q.name}
        />
      )
    }

    template.push(
      <div key={q.id} className="pb-4">
        <p className="mb-1">{q.required && <span>*</span>}{q.name}</p>
        {content}
        {extra}
      </div>
    );
  });

  return template;
}

const Questions = () => {
  const router = useRouter();

  const refForm = useRef();
  const refEmail = useRef();
  const refSuccess = useRef();

  // const { survey } = router.query;

  const [state, setState] = useSetState({
    btnIsDisabled: true,
    loading: true,
  });

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let schema = [{
      id: 1,
      name: "Your Email",
      type: "email",
      required: true,
    }]

    try {
      const { data } = await axios.get("https://api.teachablehub.com/v1/earlyaccess/survey/schema");
      schema = data.schema;
    } catch (e) {
      //
    }

    setState(state => {
      let answeres = {};
      schema.forEach(({ id, name: question, required, type }) => {
        answeres[`q-${id}`] = {
          question,
          required,
          valid: false,
        }
      });

      state.schema = schema;
      state.answeres = answeres;
      state.loading = false;
    });
  }

  if (state.loading) return null;

  const isFormValid = (s) => {
    let valid = true;

    Object.keys(s.answeres).forEach(item => {
      if (!s.answeres[item].valid) {
        valid = false
      }
    });

    return valid;
  }

  const onChangeHandler = (e) => {
    const { value: answer, dataset } = e.target;
    const { id, question, subanswer } = dataset;

    setState(state => {
      const obj = {
        question,
        valid: false
      };

      const current = ((state.answeres[`q-${id}`] || {}).answer || []);

      if (subanswer) {
        obj.subAnswer = answer;
        obj.answer = [...(current.filter(f => f !== "Other")), "Other"];
        obj.valid = !!(obj.subAnswer && obj.answer.length > 0);
      } else {
        obj.answer = [answer];
        if (answer !== "Other") {
          obj.valid = !!(obj.answer.length > 0);
          if (e.target.type === "email") {
            obj.isEmail = true;
            obj.valid = validateEmailFormat(answer);
          }
        }
      }


      state.answeres[`q-${id}`] = obj;
      state.btnIsDisabled = !(isFormValid(state));
    });
  }

  const checkboxOnChangeHandler = (e) => {
    const { value: answer, checked, dataset } = e.target;
    const { id, question, multiple, subanswer } = dataset;

    setState(state => {
      const obj = {
        ...(state.answeres[`q-${id}`]),
        question,
        subAnswer: null,
        valid: false,
      };

      let current = [];
      if (multiple === "true") {
        current = ((state.answeres[`q-${id}`] || {}).answer || []);
      }

      if (subanswer) {
        obj.subAnswer = answer;
        obj.answer = [...current, "Other"];
        obj.valid = !!(obj.subAnswer && obj.answer.length > 0);
      } else {
        if (checked) {
          obj.answer = [...current, answer];
        } else {
          obj.answer = current.filter(f => f !== answer);
        }

        if (obj.answer.length > 0) {
          obj.valid = !!(obj.answer.length > 0);
        }

      }

      if (obj.answer.includes("Other")) {
        obj.valid = !!(obj.subAnswer && obj.subAnswer.length > 2);
      }

      state.answeres[`q-${id}`] = obj;
      state.btnIsDisabled = !(isFormValid(state));
    });
  }

  const handleSignUp = async () => {
    const { current: elEmail } = refEmail;
    const email = elEmail.value;
    elEmail.value = "";

    const { current: formEl } = refForm;
    const { current: successEl } = refSuccess;

    formEl.style.opacity = 0;
    formEl.style.maxHeight = "100px";

    const offset = getOffset(document.getElementById("early-access"));
    scroll({
      top: offset.top - 40,
      behavior: "smooth"
    });

    setTimeout(() => {
      successEl.classList.add("done");
      setTimeout(() => {
        successEl.classList.remove("done");
        setState(state => {
          state.answeres = defAnsweres();
          state.loading = true;
        }, () => {
          setState(state => {
            state.loading = false;
          }, () => {
            formEl.style.opacity = 1;
            formEl.style.maxHeight = "1000px";
          })
        });
      }, 3000);
    }, 1000);

    setState({
      btnIsDisabled: true,
    });

    try {
      const survey = {};
      Object.keys(state.answeres).forEach((a) => {
        // console.log('@@@', s.answeres[a]);
        const { question, answer, subAnswer: other, isEmail } = state.answeres[a];
        if (!isEmail) {
          survey[a] = {
            question,
            answer,
            ...(other && { other })
          }
        }
      });

      const r = await axios.post("https://api.teachablehub.com/v1/earlyaccess/", {
        email,
        survey,
      });

      GoogleTagManager({
        data: {
          event: 'registered',
          pageCategory: 'sign-up',
        },
      });
    } catch (e) {
      // console.error(e);
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();

    handleSignUp();
  }

  return (
    <div className="formHolder th-questions">
      <div ref={refForm} className="th-form">
        <div className="text-left">
          {buildForm(state, refEmail, { onChangeHandler, checkboxOnChangeHandler })}
        </div>
        <Button
          color="primary"
          className="btn mt-3"
          style={{ width: "100%" }}
          type="button"
          id="newssubscribebtn"
          onClick={handleClick}
          disabled={state.btnIsDisabled}
          children="Sign Up"
        />
        <p className="th-text-small text-muted mt-2 text-left pl-3">We respect your privacy and we’ll never share your details.</p>
      </div>
      <div ref={refSuccess} className="success-animation">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
      </div>
    </div>
  );
}

export default Questions;

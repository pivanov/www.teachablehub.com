import { useRef } from "react";
import axios from "axios";
import { useSetState } from '@utils/hooks';
import { Button } from 'reactstrap';
import GoogleTagManager from "@utils/GoogleTagManager";
import { validateEmailFormat, getOffset } from "@utils/helpers";

const schema = [
  {
    id: 1,
    name: "What is your current job title?",
    type: "select",
    required: true,
    options: [
      {
        value: "Data Scientist",
      },
      {
        value: "Data Analyst",
      },
      {
        value: "Data Architect",
      },
      {
        value: "Data Engineer",
      },
      {
        value: "Machine Learning Engineer",
      },
      {
        value: "Backend developer",
      },
      {
        value: "DevOps",
      },
      {
        value: "MLOps",
      },
      {
        value: "C-level executive",
      },
      {
        value: "Professor/Educator",
      },
      {
        value: "Student",
      },
      {
        value: "Other",
        options: [
          {
            type: "text",
          }
        ]
      },
    ]
  },
  {
    id: 2,
    name: "What best describes what you do?",
    type: "checkbox",
    required: true,
    allowMultiple: true,
    options: [
      {
        value: "Design, create, and manage data architectures",
      },
      {
        value: "Collect and analyze data, research, prototype ML models",
      },
      {
        value: "Monitor and optimize model performance and data accuracy",
      },
      {
        value: "Identify trends in data sets to help solve business problems",
      },
      {
        value: "Build, deploy and maintain ML pipelines in production",
      },
      {
        value: "Build, integrate and set up new development tools and infrastructure",
      },
      {
        value: "Write unit tests and integration tests",
      },
      {
        value: "Manage ML workflows and teams",
      },
      {
        value: "Develop and implement company strategy for using IT and ML rеsources",
      },
      {
        value: "I'm a student learning Computer Science and ML",
      },
      {
        value: "Other",
        options: [
          {
            type: "text"
          }
        ]
      },
    ]
  },
  {
    id: 3,
    name: "What company, school, or lab are you affiliated with?",
    type: "text",
    required: true,
  },
  {
    id: 4,
    name: "Your Email",
    type: "email",
    required: true,
  }
];

const buildForm = (state, refEmail, { onChangeHandler, checkboxOnChangeHandler }) => {
  let template = [];

  // console.log('@@@', state);

  schema.forEach(q => {
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
        const current = (state.answeres[`q-${q.id}`] || {}).answere || [];
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
        state.answeres[`q-${q.id}`].answere &&
        state.answeres[`q-${q.id}`].answere.includes("Other")
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
  const refForm = useRef();
  const refEmail = useRef();
  const refSuccess = useRef();

  const defAnsweres = () => {
    let r = {};

    schema.forEach(({ id, name: question, required, type }) => {
      r[`q-${id}`] = {
        question,
        required,
        valid: false,
      }
    });

    return r;
  }

  const [state, setState] = useSetState({
    answeres: defAnsweres(),
    btnIsDisabled: true,
  });

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
    const { value: answere, dataset } = e.target;
    const { id, question, subanswer } = dataset;

    setState(state => {
      const obj = {
        question,
        valid: false
      };

      const current = ((state.answeres[`q-${id}`] || {}).answere || []);

      if (subanswer) {
        obj.subAnswere = answere;
        obj.answere = [...(current.filter(f => f !== "Other")), "Other"];
        obj.valid = !!(obj.subAnswere && obj.answere.length > 0);
      } else {
        obj.answere = [answere];
        if (answere !== "Other") {
          obj.valid = !!(obj.answere.length > 0);
          if (e.target.type === "email") {
            obj.isEmail = true;
            obj.valid = validateEmailFormat(answere);
          }
        }
      }


      state.answeres[`q-${id}`] = obj;
      state.btnIsDisabled = !(isFormValid(state));
    });
  }

  const checkboxOnChangeHandler = (e) => {
    const { value: answere, checked, dataset } = e.target;
    const { id, question, multiple, subanswer } = dataset;

    setState(state => {
      const obj = {
        ...(state.answeres[`q-${id}`]),
        question,
        subAnswere: null,
        valid: false,
      };

      let current = [];
      if (multiple === "true") {
        current = ((state.answeres[`q-${id}`] || {}).answere || []);
      }

      if (subanswer) {
        obj.subAnswere = answere;
        obj.answere = [...current, "Other"];
        obj.valid = !!(obj.subAnswere && obj.answere.length > 0);
      } else {
        if (checked) {
          obj.answere = [...current, answere];
        } else {
          obj.answere = current.filter(f => f !== answere);
        }

        if (obj.answere.length > 0) {
          obj.valid = !!(obj.answere.length > 0);
        }

      }

      if (obj.answere.includes("Other")) {
        obj.valid = !!(obj.subAnswere && obj.subAnswere.length > 2);
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
        const { question, answere, subAnswere: other, isEmail } = state.answeres[a];
        if (!isEmail) {
          survey[a] = {
            question,
            answere,
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

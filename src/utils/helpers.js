export const getOffset = (el) => {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const clickHandler = (e) => {
  e.preventDefault();
  const { hash } = e.target;
  const href = hash.split("#")[1];
  const el = document.getElementById(href);
  if (el) {
    const offset = getOffset(el);
    scroll({
      top: offset.top - 40,
      behavior: "smooth"
    });

    if (history.pushState) {
      history.pushState(null, null, hash);
    }
    else {
      location.hash = hash;
    }
  }
}

export const ScrollToHash = () => {
  if (process.browser) {
    const links = document.links;

    for (const link of links) {
      const { hash } = link;
      if (hash === "#chat") {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const { message } = link.dataset;
          if (message) {
            $crisp.push(["set", "message:text", [message]])
          }

          $crisp.push(["do", "chat:open"]);
        });
      }

      if (hash.startsWith("#") && hash !== "#chat") {
        link.addEventListener("click", clickHandler);
      }
    }
  }

  return null;
}


export const validateEmailFormat = (email) => {
  // Copied from existing website's newsletter_signup.js
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

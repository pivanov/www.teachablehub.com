const getOffset = (el) => {
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
      if (link.hash.startsWith("#")) {
        link.addEventListener("click", clickHandler);
      }
    }
  }

  return null;
}

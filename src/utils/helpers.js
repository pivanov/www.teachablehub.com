const clickHandler = (e) => {
  e.preventDefault();
  const { hash } = e.target;
  const href = hash.split("#")[1];
  const el = document.getElementById(href);
  if (el) {
    scroll({
      top: el.offsetTop - 40,
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

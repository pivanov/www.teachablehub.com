const Shape = ({ color = "currentColor" }) => {
  return (
    <div className="position-relative">
      <div className="shape overflow-hidden text-light">
        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M720 125L2160 0H2880V250H0V125H720Z" fill={color}></path>
        </svg>
      </div>
    </div >
  );
}

export default Shape;

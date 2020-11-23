import { useRef, useEffect, useState } from "react";

export const useSetState = (initialState = {}) => {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null);

  const setStateCallback = (patch, cb) => {
    cbRef.current = cb;
    setState(prev => Object.assign({}, prev, patch instanceof Function ? patch(prev) : patch));
  };

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, setStateCallback];
}

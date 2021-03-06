import { useEffect, useState } from "react";

const useGoogleOptimize = (experimentID) => {
  const [variant, setVariant] = useState("0");
  const updateVariant = (value) => {
    setVariant(value === undefined || value === null ? "0" : value);
  }

  useEffect(() => {
    const { dataLayer, google_optimize } = window;
    const delayedInitialization = () => {
      const value = google_optimize && google_optimize.get(experimentID);
      if (value) {
        setVariant(value);
      }
    }

    if (dataLayer) {
      const hideEnd = dataLayer && dataLayer.hide && dataLayer.hide.end;

      if (hideEnd) {
        dataLayer.hide.end = () => {
          delayedInitialization();
          hideEnd();
        }
      } else {
        delayedInitialization();
      }

      dataLayer.push("event", "optimize.callback", {
        name: experimentID,
        callback: updateVariant,
      });
    }

    return () => {
      dataLayer.push("event", "optimize.callback", {
        name: experimentID,
        callback: updateVariant,
        remove: true,
      });
    }
  }, [])

  return variant;
}


export default useGoogleOptimize;

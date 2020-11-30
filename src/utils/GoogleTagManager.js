import Cookies from "universal-cookie";
import moment from "moment";

const GoogleTagManager = ({ data }) => {
  if (process.browser && data) {
    if (window.dataLayer) {
      const cookies = new Cookies();
      const currentCookie = cookies.get('TeachableHub');

      if (!currentCookie) {
        const fvd = new Date();
        cookies.set('TeachableHub', { fvd }, { maxAge: 24300000, domain: '.teachablehub.com', path: '/' });
        data.firstVisitDate = fvd;
        data.firstVisitDaysBefore = 0;
      } else {
        data.firstVisitDate = currentCookie.fvd;
        data.firstVisitDaysBefore = moment().diff(moment(currentCookie.fvd), 'days');
      }


      window.dataLayer.push(data);
    }
  }

  return null;
}

export default GoogleTagManager;

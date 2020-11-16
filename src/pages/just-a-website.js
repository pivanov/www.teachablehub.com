import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Client } from "@utils/prismicHelpers";

import AOS from "aos";

const Section = dynamic(() => import("../sections/Section"));
const Teachable = dynamic(() => import("../sections/Teachable"));
const HowItWorks = dynamic(() => import("../sections/HowItWorks"));
// const ForEveryone = dynamic(() => import("../sections/ForEveryone"));
const GetEarlyAccess = dynamic(() => import("../sections/GetEarlyAccess"));
const ChatWithUs = dynamic(() => import("../sections/ChatWithUs"));
const Joke = dynamic(() => import("../sections/Joke"));
const Pricing = dynamic(() => import("../sections/Pricing"));

const HomePage = ({ doc, menu }) => {
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);

    if (process.browser) {
      setTimeout(() => {
        AOS.init();

        const html = document.getElementById("html");
        html.classList.remove("async-hide");

        AOS.refresh();
      }, 1000);

      document.body.classList = "";
      //set AOS atttributes to section title and desc
      // var elementsTitle = document.getElementsByName("sectiontitle");
      // var elementsDesc = document.getElementsByName("sectiondesc");

      // for (var i = 0; i < elementsTitle.length; i++) {
      //   elementsTitle[i].setAttribute("data-aos", "fade-up");
      //   elementsTitle[i].setAttribute("data-aos-duration", "1200");
      //   elementsDesc[i].setAttribute("data-aos", "fade-up");
      //   elementsDesc[i].setAttribute("data-aos-duration", "1000");
      // }

      //set AOS atttributes to slider <Media> tags
      // var elements = document.getElementsByName("clientsreview");
      // for (var j = 0; j < elements.length; j++) {
      //   elements[j].setAttribute("data-aos", "fade-up");
      //   elements[j].setAttribute("data-aos-duration", "1800");
      // }

      //set AOS atttributes to Features
      // var features = document.getElementsByName("featurebox");
      // for (var f = 0; f < features.length; f++) {
      //   features[f].setAttribute("data-aos", "fade-up");
      //   features[f].setAttribute("data-aos-duration", "1800");
      // }

      //set AOS atttributes to partners
      // for (var k = 1; k <= 6; k++) {
      //   document.getElementById("partner" + k).setAttribute("data-aos", "fade-up");
      //   document.getElementById("partner" + k).setAttribute("data-aos-duration", "1800");
      // }

      //set AOS atttributes to pricing
      // var pricing = document.getElementsByName("pricing");
      // for (var a = 0; a < pricing.length; a++) {
      //   pricing[a].setAttribute("data-aos", "fade-up");
      //   pricing[a].setAttribute("data-aos-duration", "1400");
      // }

      //set AOS atttributes to team
      // var team = document.getElementsByName("team");
      // for (var b = 0; b < team.length; b++) {
      //   team[b].setAttribute("data-aos", "fade-up");
      //   team[b].setAttribute("data-aos-duration", "1200");
      // }

      //set AOS atttributes to footer
      // var footer = document.getElementsByName("footercolumn");
      // for (var fcol = 0; fcol < footer.length; fcol++) {
      //   footer[fcol].setAttribute("data-aos", "fade-up");
      //   footer[fcol].setAttribute("data-aos-duration", "1400");
      // }
    }




    return () => window.removeEventListener("scroll", scrollNavigation, true);
  }, [doc, menu]);

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    }
    else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  }

  if (doc && doc.data) {
    return (
      <>
        <Section />

        <section className="section" id="product">
          <Teachable />
        </section>

        <section className="section pt-1 pb-0 bg-light" id="how-it-works">
          <HowItWorks />
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        <section className="section pt-5" id="how-it-works">
          <Joke />
        </section>

        <section className="section pb-5 bg-light" id="pricing">
          <Pricing />
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        {/* <section className="section pt-5" id="for-everyone">
          <ForEveryone />
        </section> */}

        <section className="section pt-1 pb-0 bg-light-custom" id="get-early-access">
          <GetEarlyAccess />
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        <section className="section pt-5 pb-5 mb-5" id="chat-with-us">
          <ChatWithUs />
        </section>
      </>
    )
  }

  return null
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData;

  const client = Client()

  const doc = await client.getSingle("homepage", ref ? { ref } : null) || {}
  const menu = await client.getSingle("menu", ref ? { ref } : null) || {}

  return {
    props: {
      doc,
      menu,
      preview,
    }
  }
}

export default HomePage

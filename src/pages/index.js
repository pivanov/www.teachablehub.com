import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Client } from "@utils/prismicHelpers";
import { NextSeo } from 'next-seo';

const Header = dynamic(() => import("../sections/Header"));
const Teachable = dynamic(() => import("../sections/Teachable"));
const HowItWorks = dynamic(() => import("../sections/HowItWorks"));
const ForEveryone = dynamic(() => import("../sections/ForEveryone"));
const ChatWithUs = dynamic(() => import("../sections/ChatWithUs"));
const Pricing = dynamic(() => import("../sections/Pricing"));

const HomePage = ({ doc, menu }) => {
  useEffect(() => {

    if (process.browser) {
      window.addEventListener("scroll", scrollNavigation, true);
      setTimeout(() => {
        const html = document.getElementById("html");
        html.classList.remove("async-hide");
      }, 400);
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
        <NextSeo
          title="TeachableHub Title"
          description="TeachableHub Desc"
        />

        <Header />

        <section className="section" id="product">
          <Teachable />
        </section>

        <section className="section pt-5 pb-0 bg-light" id="how-it-works">
          <HowItWorks />
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        <section className="section pt-5" id="for-everyone">
          <ForEveryone />
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

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { NextSeo } from 'next-seo';

const Header = dynamic(() => import("../sections/Header"));
const Teachable = dynamic(() => import("../sections/Teachable"));
const HowItWorks = dynamic(() => import("../sections/HowItWorks"));
const ForEveryone = dynamic(() => import("../sections/ForEveryone"));
const ChatWithUs = dynamic(() => import("../sections/ChatWithUs"));
const Pricing2 = dynamic(() => import("../sections/Pricing2"));
const Reviews = dynamic(() => import("../sections/Reviews"));

const HomePage = () => {
  useEffect(() => {
    if (process.browser) {
      window.addEventListener("scroll", scrollNavigation, true);
      setTimeout(() => {
        const html = document.getElementById("html");
        html.classList.remove("async-hide");
      }, 400);
    }

    return () => window.removeEventListener("scroll", scrollNavigation, true);
  }, []);

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

  return (
    <>
      <NextSeo
        title="TeachableHub: Fast-track ML deployment in production"
        description="The fastest way to deploy, serve, and share impactful models as APIs with ZERO MLOps, seamless scalability, and no costly infrastructure. Unlimited public APIs for FREE!"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "tensorflow deploy, tensorflow serve, machine learning deployment, machine learning monitoring, tensorflow serving docker, tensorflow serving, tf serving, tensorflow serving tutorial, deploying machine learning models, tensorflow model server, tensorflow_model_server, tensorflow serving github, flask machine learning, deploy machine learning model flask, machine learning model deployment, tensorflow serving example, docker tensorflow serving, tensorflow serving multiple models, deployment of machine learning models, deploy tensorflow model, tensorflow serving gpu, deploy machine learning models in production as apis, deploy machine learning model django, ml model deployment, deploy machine learning model python, machine learning deployment architecture, deploy machine learning model using flask, deploy ml model using flask, deploy ml model, ml deployment, deploy machine learning model to production python, deploying a machine learning model, pickle flask, model deploy, pytorch deploy, pytorch serve, machine learning model deployment, deploy machine learning models in production as apis, using flask to serve a machine learning model as a restful web service, machine learning api python"
          }
        ]}
        openGraph={{
          type: 'website',
          url: 'https://www.teachablehub.com',
          title: 'TeachableHub: Fast-track ML deployment in production',
          description: 'The fastest way to deploy, serve, and share impactful models as APIs with ZERO MLOps, seamless scalability, and no costly infrastructure. Unlimited public APIs for FREE!',
          images: [
            {
              url: 'https://www.teachablehub.com/facebook.png',
              width: 800,
              height: 480,
              alt: 'TeachableHub: Fast-track ML deployment in production',
            },
          ],
        }}
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

      <Pricing2 />

      <section className="section pt-5 pb-5 mb-5" id="chat-with-us">
        <ChatWithUs />
      </section>
    </>
  );
}

export default HomePage

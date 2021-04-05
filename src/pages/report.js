import { useEffect } from "react";
import dynamic from "next/dynamic";
import { NextSeo } from 'next-seo';

const ChatWithUs = dynamic(() => import("../sections/ChatWithUs"));
const Deck = dynamic(() => import("../sections/Deck"));

const Report = () => {
  useEffect(() => {
    if (process.browser) {
      setTimeout(() => {
        const html = document.getElementById("html");
        html.classList.remove("async-hide");
      }, 400);
    }
  }, []);

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

      <section className="section">
        <Deck />
      </section>
    </>
  );
}

export default Report

import { useEffect } from 'react';
import { Header, HomeBanner } from '@components';

const HomePage = ({ doc, menu }) => {

  useEffect(() => {
    setTimeout(() => {
      const html = document.getElementById("html");
      html.classList.remove("async-hide");
    }, 400);
  }, []);

  return (
    <>hello</>
  );

  // <div className='homepage'>
  //   <Header menu={menu} />
  //   <HomeBanner data={doc.data} />
  // </div>
}

export async function getStaticProps() {
  return {
    props: {
      layout: false
    }
  }
}

export default HomePage;

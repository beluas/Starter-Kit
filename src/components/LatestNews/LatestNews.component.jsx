import React, { useEffect } from "react";
import "./LatestNews.styles.scss";
import News from "../News/News.component.jsx";
import MyBtn from "../UI/MyBtn/MyBtn.ui.component.jsx";
import section1 from "../../assets/images/section1.jpg";
import section2 from "../../assets/images/section2.jpg";
import Aos from "aos";

const LatestNews = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <div className="cockpit">
        <h2
          data-aos-delay="200"
          data-aos="fade-right"
          className="latest-news-title"
        >
          Latest news
        </h2>
        <MyBtn>Altro</MyBtn>
      </div>
      <div className="latest-news">
        <News
          title="Addio al remarketing"
          imgUrl={section2}
          date="12/03/21 - Web Analytics"
          delay={200}
        />
        <News
          title="GDPR - Cosa devi sapere"
          imgUrl={section1}
          date="20/02/21"
          delay={300}
        />
        <News
          date="12/01/15"
          imgUrl={section2}
          title="L'importanza di un'identita' online"
          delay={500}
        />
        <News
          delay={700}
          date="12/02/28"
          imgUrl={section1}
          title="Wordpress vs Custom Website"
        />
      </div>
    </>
  );
};

export default LatestNews;

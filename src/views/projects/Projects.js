import React from "react";
import Project from "./Project";
import { Card, Row, Col } from "reactstrap";
import { useTransition, animated, useSpring } from "react-spring";
import "swiper/css/swiper.css";
import "../../assets/scss/plugins/extensions/swiper.scss";

import Capture1 from "../../assets/img/portfolio/pharmayou_galery/Capture1.PNG";
import Capture2 from "../../assets/img/portfolio/pharmayou_galery/Capture2.PNG";
import Capture3 from "../../assets/img/portfolio/pharmayou_galery/Capture3.PNG";
import Capture4 from "../../assets/img/portfolio/pharmayou_galery/Capture4.PNG";
import Capture6 from "../../assets/img/portfolio/pharmayou_galery/Capture6.PNG";
import Capture7 from "../../assets/img/portfolio/pharmayou_galery/Capture7.PNG";
import Capture8 from "../../assets/img/portfolio/pharmayou_galery/Capture8.PNG";
import Capture9 from "../../assets/img/portfolio/pharmayou_galery/Capture9.PNG";
import Capture10 from "../../assets/img/portfolio/pharmayou_galery/Capture10.PNG";
import Capture11 from "../../assets/img/portfolio/pharmayou_galery/Capture11.PNG";
import Capture12 from "../../assets/img/portfolio/pharmayou_galery/Capture12.PNG";
import Capture13 from "../../assets/img/portfolio/pharmayou_galery/Capture13.PNG";
import Capture14 from "../../assets/img/portfolio/pharmayou_galery/Capture14.PNG";
import img1 from "../../assets/img/portfolio/captureMadina_tic/login.ong.png";
import img2 from "../../assets/img/portfolio/captureMadina_tic/register.png";
import img3 from "../../assets/img/portfolio/captureMadina_tic/Home.png";
import img5 from "../../assets/img/portfolio/captureMadina_tic/actus.png";
import img4 from "../../assets/img/portfolio/captureMadina_tic/ajouter-signalement.png";
import img6 from "../../assets/img/portfolio/captureMadina_tic/maire_home.png";
import img7 from "../../assets/img/portfolio/captureMadina_tic/mes_signalements.png";
import img8 from "../../assets/img/portfolio/captureMadina_tic/profile.png";
import img9 from "../../assets/img/portfolio/captureMadina_tic/service.png";

const Projects = () => {
  const images = [
    Capture1,
    Capture2,
    Capture3,
    Capture4,
    Capture6,
    Capture7,
    Capture8,
    Capture9,
    Capture10,
    Capture11,
    Capture12,
    Capture13,
    Capture14,
  ];
  const imagesMadina = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const animation1 = useSpring({
    from: { opacity: 0, x: -200 },
    to: { opacity: 1, x: 0 },
  });
  const animation2 = useSpring({
    from: { opacity: 0, x: 200 },
    to: { opacity: 1, x: 0 },
  });
  const animation3 = useSpring({
    from: { opacity: 0, x: -200 },
    to: { opacity: 1, x: 0 },
    delay:400
  });
  const animation4 = useSpring({
    from: { opacity: 0, x: 200 },
    to: { opacity: 1, x: 0 },
    delay:400
  });
  return (
    <Row>
      <Col md="6" sm="12" className="mb-2  mt-3">
        <animated.div style={animation1}>
          <Project
            params={{
              effect: "cube",
              grabCursor: true,
              cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            }}
            images={images}
          />
        </animated.div>
      </Col>
      <Col md="6" sm="12" className="mb-2 mt-3">
        <animated.div className="h-100" style={animation2}>
          <Card
            style={{ height: "100%" }}
            className="d-flex justify-content-start p-2"
          >
            <h2
              className="mt-3"
              style={{
                alignSelf: "center",
                fontFamily: "cursive",
                fontSize: "35px",
              }}
            >
              PhamaYou dashboard
            </h2>
            <h4
              className="mt-2"
              style={{
                textAlignLast: "center",
                fontFamily: "cursive",
                opacity: 0.6,
              }}
            >
              This is a dashboard for an online pharmacie ,it was my first
              freelance job on upwork. I was charged to implement the front end
              from a given designe, all the interfaces were made by REACT JS and
              BOOTSTRAP and some other third party packeges,the animations were
              done by REACT Spring, the data were fetched using AXIOS ,the
              notification were pushed via web sockets.
            </h4>
          </Card>
        </animated.div>
      </Col>
      <Col md="6" sm="12" className="mb-3 mt-3">
        <animated.div className="h-100" style={animation3}>
          <Card
            style={{ height: "100%" }}
            className="d-flex justify-content-start p-2"
          >
            <h2
              className="mt-3"
              style={{
                alignSelf: "center",
                fontFamily: "cursive",
                fontSize: "35px",
              }}
            >
              Madina-tic
            </h2>
            <h4
              className="mt-2"
              style={{
                textAlignLast: "center",
                fontFamily: "cursive",
                opacity: 0.6,
              }}
            >
              This is a website for reporting all sort of problemes in the city
              to the authoritys ,it was a studys project. I was involved in the
              developpement of the front end and in the data base creation, all
              the interfaces were made by REACT JS and Html/CSS, the data were
              fetched using AXIOS ,the notification were pushed via web sockets.
            </h4>
          </Card>
        </animated.div>
      </Col>
      <Col md="6" sm="12" className="mb-3 mt-3">
        <animated.div style={animation4}>
          <Project
            params={{
              effect: "coverflow",
              grabCursor: true,
              centeredSlides: true,
              slidesPerView: "auto",
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              },
              pagination: {
                el: ".swiper-pagination",
              },
            }}
            images={imagesMadina}
          />
        </animated.div>
      </Col>
    </Row>
  );
};

export default Projects;
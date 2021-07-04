import React from "react";
import { useTransition, animated, useSpring } from "react-spring";
import { Row, Col, Button } from "reactstrap";
import { Download } from "react-feather";
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard";
import bootstrap from "../../assets/img/portfolio/bootstrap.png";
import django from "../../assets/img/portfolio/django.png";
import python from "../../assets/img/portfolio/python.png";
import reactjs from "../../assets/img/portfolio/react.png";
import monCV from "../../assets/img/portfolio/mon_cv.pdf";

const Skils = () => {
  const [translate, settranslate] = React.useState([]);

  React.useEffect(() => {
    settranslate([
      {
        html: (
          <Row className="d-flex justify-content-center">
            <Col lg="2">
              <StatisticsCard
                hideChart
                iconRight
                iconBg="primary"
                icon={<img src={reactjs} height="50px" width="50px" />}
                stat="REACT JS"
                statTitle="Redux, context API, react spring, hooks"
              />
            </Col>
            <Col lg="2">
              <StatisticsCard
                hideChart
                iconRight
                iconBg="primary"
                icon={<img src={reactjs} height="50px" width="50px" />}
                stat="REACT NATIVE"
                statTitle="React navigation, Animated API, local Storage"
              />
            </Col>
            <Col lg="2">
              <StatisticsCard
                hideChart
                iconRight
                iconBg="primary"
                icon={<img src={bootstrap} height="60px" width="60px" />}
                stat="BOOTSTRAP"
                statTitle="Page structure, Responsive style and better UI"
              />
            </Col>
          </Row>
        ),
        delay: 400,
        x: 100,
      },
      {
        html: (
          <Row className="d-flex justify-content-center">
            <Col lg="2">
              <StatisticsCard
                hideChart
                iconRight
                iconBg="primary"
                icon={<img src={python} height="40px" width="40px" />}
                stat="PYTHON"
                statTitle="Django, TensorFlow, Sklearn, Numpy, Pandas"
              />
            </Col>
            <Col lg="2">
              <StatisticsCard
                hideChart
                iconRight
                iconBg="primary"
                icon={<img src={django} height="50px" width="50px" />}
                stat="DJANGO"
                statTitle="Views, Urls, endpoints, Databases, HTTP requests"
              />
            </Col>
          </Row>
        ),
        delay: 600,
        x: 100,
      },
    ]);
  }, []);

  const transition2 = useTransition(translate, {
    from: { x: -470, y: 300, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: 0, opacity: 1, delay: item.delay });
      await next({ x: 0 });
    },
  });

  const transition1 = useSpring({
    from: { opacity: 0, x: 600, y: 0 },
    to: { opacity: 1, x: 0, y: 0, delay: 1000 },
  });

  return (
    <div>
      <Row className="d-flex justify-content-center" style={{marginTop:"-15px"}}>
        <animated.div style={transition1}>
          <h2
            className="font-bold font-large-2"
            style={{ fontFamily: "cursive" }}
          >
            My skills
          </h2>
        </animated.div>
      </Row>
      <Row className="d-flex justify-content-center">
        <animated.div style={transition1}>
          <div style={{ textAlign: "center" }}>
            <h3
              style={{
                maxWidth: window.innerWidth * 0.4,
                minWidth: "400px",
                fontFamily: "cursive",
                opacity: 0.7,
                textAlignLast: "center",
              }}
            >
              I'm intermediate developer with 2 years experience in front end
              development (react js and react native)
            </h3>
            <p
              style={{
                maxWidth: window.innerWidth * 0.4,
                minWidth: "400px",
                fontFamily: "cursive",
                opacity: 0.5,
                textAlignLast: "center",
              }}
            >
              I speak Arabic,english and french{" "}
            </p>
          </div>
        </animated.div>
      </Row>
      <Row className="d-flex justify-content-center mb-2">
        <div
          style={{
            height: "2px",
            width: window.innerWidth * 0.1,
            minWidth:"140px",
            backgroundColor: "slateblue",
            borderRadius:"2px"
          }}
        />
      </Row>
      {transition2((style, item) =>
        item ? <animated.div style={style}>{item.html}</animated.div> : ""
      )}
      <Row className="d-flex justify-content-center mb-1">
        <a href={monCV} download>
          <animated.div style={transition1}>
            <Button.Ripple className="p-1" color="white" size="lg" outline>
              <Download className="mr-25" /> Download my CV !
            </Button.Ripple>
          </animated.div>
        </a>
      </Row>
    </div>
  );
};
export default Skils;

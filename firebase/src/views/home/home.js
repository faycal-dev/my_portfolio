import React from "react";
import { Col, Row, Button } from "reactstrap";
import { useTransition, animated, useSpring } from "react-spring";
import Typewriter from "typewriter-effect";
import image from "../../assets/img/portfolio/image3.png";
import { history } from "../../history";

const Home = () => {
  const [animate, setAnimate] = React.useState(false);
  const [start, setstart] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setstart(true);
    }, 1000);
  }, []);

  const transition1 = useTransition(animate, {
    from: { x: 300, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1, delay: 900 },
  });
  const transition3 = useSpring({
    from: { opacity: 0.5 },
    to: { opacity: 1 },
    loop: { reverse: true },
  });
  const transition2 = useSpring({
    from: { x: 0, y: -300, opacity: 0 },
    to: { x: 0, y: 0, opacity: 1 },
  });
  const transition4 = useSpring({
    from: { x: -300, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });
  let font = "";
  if (window.innerWidth < 450) {
    font = "font-bold font-large-1 ml-3";
  } else {
    font = "font-bold font-large-3 ml-3 ";
  }
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-end ">
          <div className="text-wrap">
            <animated.div style={transition2}>
              <h4 style={{ opacity: 0.3 }}>{"<head>"}</h4>
              <h1 style={{ fontFamily: "sans-serif" }} className={font}>
                Hi, i'm ELMOGHERBI <br />
                FAYCAL
              </h1>
              <h4 style={{ opacity: 0.3 }}>{"</head>"}</h4>
            </animated.div>
            <animated.div style={transition4}>
              <h4 style={{ opacity: 0.3 }} className="mt-3">
                {"<body>"}
              </h4>
              <h3 style={{ fontFamily: "sans-serif" }} className="ml-3 ">
                <Typewriter
                  options={{
                    autoStart: true,
                    delay: 40,
                    loop: true,
                    strings: [
                      "My first skill is data science and machine learning",
                      "I'm a web developer using REACT JS and DJANGO",
                      "and",
                      "I'm a mobile app developer using REACT NATIVE",
                    ],
                  }}
                />
              </h3>
              <h4 style={{ opacity: 0.3 }}>{"</body>"}</h4>
            </animated.div>
            <div style={{ marginTop: "80px" }} >
              <animated.div style={transition3}>
                {" "}
                <Button.Ripple
                  color="white"
                  size="lg"
                  outline
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact me !
                </Button.Ripple>
              </animated.div>
            </div>
          </div>
        </Col>
        <Col className="d-flex justify-content-center mt-3">
          {transition1((style, item) =>
            item ? (
              <animated.div style={style}>
                {" "}
                <img
                  src={image}
                  alt="img"
                  style={{
                    width: window.innerWidth * 0.3,
                    height: window.innerWidth * 0.3,
                    minWidth: "200px",
                    minHeight: "200px",
                  }}
                />
              </animated.div>
            ) : (
              ""
            )
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Home;

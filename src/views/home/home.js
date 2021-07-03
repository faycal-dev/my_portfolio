import React from "react";
import { ShoppingBag } from "react-feather";
import { Col, Row, Button } from "reactstrap";
import { useTransition, animated, useSpring } from "react-spring";
import Typewriter from "typewriter-effect";
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard";
import image from "../../assets/img/home/image3.png";

const Home = () => {
  const [translate, settranslate] = React.useState([]);
  const [animate, setAnimate] = React.useState(false);
  const [start, setstart] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    settranslate([
      {
        html: (
          <Row className="d-flex justify-content-center">
            <Col lg="2">
              <StatisticsCard
                hideChart
                iconBg="warning"
                icon={<ShoppingBag className="warning" size={22} />}
                stat="978"
                statTitle="Orders"
              />
            </Col>
            <Col lg="2">
              <StatisticsCard
                hideChart
                iconBg="warning"
                icon={<ShoppingBag className="warning" size={22} />}
                stat="978"
                statTitle="Orders"
              />
            </Col>
            <Col lg="2">
              <StatisticsCard
                hideChart
                iconBg="warning"
                icon={<ShoppingBag className="warning" size={22} />}
                stat="978"
                statTitle="Orders"
              />
            </Col>
          </Row>
        ),
        delay: 1000,
        x: 100,
      },
      {
        html: (
          <Row className="d-flex justify-content-center">
            <Col lg="2">
              <StatisticsCard
                hideChart
                iconBg="warning"
                icon={<ShoppingBag className="warning" size={22} />}
                stat="978"
                statTitle="Orders"
              />
            </Col>
            <Col lg="2">
              <StatisticsCard
                hideChart
                iconBg="warning"
                icon={<ShoppingBag className="warning" size={22} />}
                stat="978"
                statTitle="Orders"
              />
            </Col>
            <Col lg="2">
              <StatisticsCard
                hideChart
                iconBg="warning"
                icon={<ShoppingBag className="warning" size={22} />}
                stat="978"
                statTitle="Orders"
              />
            </Col>
          </Row>
        ),
        delay: 1200,
        x: 100,
      },
    ]);
    setTimeout(() => {
      setstart(true);
    }, 1000);
  }, []);

  const transition1 = useTransition(animate, {
    from: { opacity: 0 },
    enter: { opacity: 1, delay: 900 },
  });
  const transition3 = useSpring({
    from: { opacity: .5 },
    to: { opacity: 1, },
    loop:{reverse: true },
   
  });

  // const transition2 = useTransition(translate, {
  //   from: { x: -300, y: 800, opacity: 0 },
  //   enter: (item) => async (next) => {
  //     await next({ y: 0, opacity: 1, delay: item.delay });
  //     await next({ x: 0 });
  //   },
  //   // leave:{}
  // });

  return (
    <div>
      <Row
      // style={{
      //   height: window.innerHeight * 0.7,
      // }}
      >
        <Col className="d-flex justify-content-end ">
          <div style={{ marginTop: "50px", marginLeft: "20px" }}>
            <h4 style={{ opacity: 0.3 }}>{"<head>"}</h4>
            <h1
              style={{ fontFamily: "cursive" }}
              className="font-bold font-large-3 ml-3"
            >
              Hi, i'm ELMOGHERBI <br />
              FAYCAL
            </h1>
            <h4 style={{ opacity: 0.3 }}>{"</head>"}</h4>
            <h4 style={{ opacity: 0.3 }} className="mt-3">
              {"<body>"}
            </h4>
            <h3 style={{ fontFamily: "cursive" }} className="ml-3 ">
              {start && (
                <Typewriter
                  options={{
                    autoStart: true,
                    delay: 40,
                    loop: true,
                    strings: [
                      "I'm a web developer using REACT JS and DJANGO",
                      "and",
                      "I'm a mobile app developer using REACT NATIVE",
                    ],
                  }}
                />
              )}
            </h3>
            <h4 style={{ opacity: 0.3 }}>{"</body>"}</h4>
            <div style={{ marginTop: "80px" }} className=" ml-3 ">
                  <animated.div style={transition3}>
                    {" "}
                    <Button.Ripple color="white" size="lg" outline>
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

      {/* <div
        className="mt-3 pt-3"
        style={{
          height: window.innerHeight * 0.75,
          width:"100%",
        }}
      >
        {transition2((style, item) =>
          item ? <animated.div style={style}>{item.html}</animated.div> : ""
        )}
      </div> */}
    </div>
  );
};

export default Home;

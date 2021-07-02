import React from "react";
import { ShoppingBag } from "react-feather";
import { Col, Row } from "reactstrap";
import { useTransition, animated } from "react-spring";
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard";

const Home = () => {
  const [animate, setAnimate] = React.useState(false);
  const [translate, settranslate] = React.useState([]);
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
  }, []);

  const transition2 = useTransition(translate, {
    from:  { x: -300, y: 800, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: 0, opacity: 1, delay: item.delay });
      await next({ x: 0 });
    },
    // leave:{}
  });

  const transition = useTransition(animate, {
    from: { opacity: 0 },
    enter: { opacity: 1, delay: 1000 },
    // leave: {},
  });

  return (
    <div>
      {/* <Card
        style={{
          minHeight: height * 0.7,
          padding: "20px",
          backgroundColor: "transparent",
        }}
      > */}
      <Row>
        {transition((style, item) =>
          item ? (
            <animated.h3 style={style} className="text-align-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </animated.h3>
          ) : (
            ""
          )
        )}
      </Row>

     <div className="mt-3">
     {transition2((style, item) =>
        item ? <animated.div style={style}>{item.html}</animated.div> : ""
      )}
     </div>
    </div>
  );
};

export default Home;

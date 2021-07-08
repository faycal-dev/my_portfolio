import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import {
  Star,
  MapPin,
  Home,
  Code,
  GitHub,
  Linkedin,
  Mail,
  Award,
  Clock,
  Shield,
  Send,
} from "react-feather";
import Swiper from "react-id-swiper";
import macbook from "../../../../assets/img/portfolio/faycal1.jpg";
import back from "../../../../assets/img/portfolio/back.png";
import front from "../../../../assets/img/portfolio/front.png";
import mobile from "../../../../assets/img/portfolio/mobile.png";
import website from "../../../../assets/img/portfolio/website.png";
import full from "../../../../assets/img/portfolio/web_mobile.png";
import "swiper/css/swiper.css";
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import { history } from "../../../../history";

const swiperParams = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1600: {
      slidesPerView: 5,
      spaceBetween: 55,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 55,
    },
    1260: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 55,
    },
  },
};
class DetailPage extends React.Component {
  state = {
    selectedColor: 1,
  };
  toggleSelectedColor = (color) => this.setState({ selectedColor: color });
  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col
                className="d-flex align-items-center justify-content-center mb-2 mb-md-0"
                sm="12"
                md="5"
              >
                <img
                  src={macbook}
                  alt="my photo"
                  style={{
                    borderRadius: 15,
                    minHeight: "250px",
                    minWidth: "200px",
                  }}
                  height={window.innerWidth * 0.29}
                  width={window.innerWidth * 0.2}
                />
              </Col>
              <Col md="7" sm="12">
                <h3>El-Mogherbi Mohammed Fayçal</h3>
                <p className="text-muted">Student and freelancer</p>
                <div className="d-flex flex-wrap">
                  <h3 className="text-primary">Web and mobile developer</h3>
                  <div className="ratings border-left ml-1 pl-1">
                    <span className="ml-1 font-medium-1 text-dark align-middle">
                      Computer science student
                    </span>
                  </div>
                </div>
                <hr />
                <p>
                  Hi i'm Fayçal and i am a student in the last year of my
                  ingineering degree in computer science, I love coding, solving
                  problemes and learning new technologies. Feel free to take a
                  look at my latest project HOPE YOU LIKE IT.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-50">
                    <Mail size={15} />
                    <span className="align-middle font-weight-bold ml-50">
                      M.elmogherbi@esi-sba.dz
                    </span>
                  </li>
                  <li className="mb-50">
                    <MapPin size={15} />
                    <span className="align-middle font-weight-bold ml-50">
                      Oran Algeria
                    </span>
                  </li>
                  <li>
                    <Home size={15} />
                    <span className="align-middle font-weight-bold ml-50">
                      School : Higher national school of computer science, Sidi
                      Bel Abbes (ESI SBA)
                    </span>
                  </li>
                </ul>
                <hr />
                <h4>Skills</h4>
                <div className="d-flex flex-wrap">
                  <p className="mr-2">Front end development</p>
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#fff" stroke="#b8c2cc" />
                </div>
                <div className="d-flex flex-wrap">
                  <p className="mr-2">Back end development</p>
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#fff" stroke="#b8c2cc" />
                  <Star size={20} fill="#fff" stroke="#b8c2cc" />
                </div>
                <div className="d-flex flex-wrap">
                  <p className="mr-2">Mobile development</p>
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#fff" stroke="#b8c2cc" />
                </div>
                <hr />
                <p className="my-50">
                  <span>Available</span>
                  <span className="mx-50">-</span>
                  <span className="text-success">Ready to work</span>
                </p>
                <div className="action-btns">
                  <Button.Ripple
                    onClick={() => {
                      history.push("/contact");
                    }}
                    className="mr-1 mb-1"
                    color="primary"
                  >
                    <Send size={15} />
                    <span className="align-middle ml-50">Contact me</span>
                  </Button.Ripple>
                  <Button.Ripple
                    onClick={() => {
                      history.push("/projects");
                    }}
                    className="mb-1"
                    color="primary"
                    outline
                  >
                    <Code size={15} />
                    <span className="align-middle ml-50">My projects</span>
                  </Button.Ripple>
                </div>
                <div className="d-flex flex-wrap social-media-btns">
                  <a href="https://github.com/faycal-dev">
                    <Button.Ripple
                      className="mr-1 btn-icon rounded-circle"
                      color="primary"
                      outline
                    >
                      <GitHub size={15} />
                    </Button.Ripple>
                  </a>
                  <a href="https://www.linkedin.com/in/el-mogherbi-mohammed-faycal-7b67971b8/">
                    <Button.Ripple
                      className="mr-1 btn-icon rounded-circle"
                      color="info"
                      outline
                    >
                      <Linkedin size={15} />
                    </Button.Ripple>
                  </a>
                </div>
              </Col>
            </Row>
          </CardBody>
          <Row>
            <Col sm="12">
              <Row className="item-features py-5 mt-5">
                <Col className="text-center" md="4" sm="12">
                  <div className="w-50 mx-auto">
                    <Award className="text-primary mb-1" size={42} />
                    <p className="font-medium-2 text-bold-600 mb-0">
                      100% Original
                    </p>
                    <p>All written code is original and made by me.</p>
                  </div>
                </Col>
                <Col className="text-center" md="4" sm="12">
                  <div className="w-50 mx-auto">
                    <Clock className="text-primary mb-1" size={42} />
                    <p className="font-medium-2 text-bold-600 mb-0">
                      Time limits
                    </p>
                    <p>The time limits must always be respected.</p>
                  </div>
                </Col>
                <Col className="text-center" md="4" sm="12">
                  <div className="w-50 mx-auto">
                    <Shield className="text-primary mb-1" size={42} />
                    <p className="font-medium-2 text-bold-600 mb-0">
                      Confidentiality
                    </p>
                    <p>All sensitive data are kept in secret and encrytpted.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <CardBody>
            <Row>
              <Col className="details-page-swiper text-center mt-5" sm="12">
                <div className="heading-section mb-3">
                  <h2 className="text-uppercase mb-50">my services</h2>
                  <p>The products i can deliver with best quality for you</p>
                </div>
                <Swiper {...swiperParams}>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Front end development of responsive intefaces 
                      </p>
                      <small>React js</small>
                    </div>
                    <div >
                      <img height="150px" width="150px" src={front} alt="front" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Cross platform mobile app
                      </p>
                      <small>React native</small>
                    </div>
                    <div>
                      <img height="150px" width="150px" src={mobile} alt="mobile" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Web site developement
                      </p>
                      <small>React js, Django</small>
                    </div>
                    <div >
                      <img height="150px" width="150px" src={website} alt="web" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        back end development and data base structure
                      </p>
                      <small>Django, mySQL</small>
                    </div>
                    <div >
                      <img src={back} alt="back" height="150px" width="150px" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Full stack app (web and mobile app using the same back end)
                      </p>
                      <small>React js, native ,Django, mySQL</small>
                    </div>
                    <div>
                      <img src={full} alt="full" height="150px" width="150px" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                  </div>
                </Swiper>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default DetailPage;

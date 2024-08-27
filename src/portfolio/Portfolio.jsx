import {
  faArrowUpRightFromSquare,
  faEye,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import tictac from "../assets/e-commerce.jpg";
import marketing from "../assets/online2.jpg";
import weather from "../assets/weather3.jpg";
import "./Portfolio.css";

export default function Portfolio() {
  const [onlineshow, Setonlineshow] = useState(false);
  const [weathershow, Setweathershow] = useState(false);
  const [tictacshow, Settictacshow] = useState(false);

  return (
    <>
      <div>
        <h2 className="ps-3 p-sm-0">MY PORTFOLIO</h2>
        <div className="d-flex ps-3 p-sm-0">
          <div className="round"></div>
          <div className="line mt-1 ms-2"></div>
        </div>
      </div>
      {/* ******Portfolio ******* */}
      {/* first project start */}
      <div data-aos="zoom-in">
        <Card
          className=" cad col-11 col-lg-9 mx-auto p-4 mb-5"
          onClick={() => Setweathershow(!weathershow)}
        >
          <div className="">
            <div className="cardimg">
              <Card.Img variant="top" src={weather} className="image" />
            </div>
            <Card.Body className="p-0 cardbody mt-3">
              <Card.Title className="p-0">
                <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                  WeatherWise - Weather API
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                    className="ms-2 iconright"
                  />
                </p>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>

        <div>
          <Offcanvas
            show={weathershow}
            onHide={() => Setweathershow(!weathershow)}
            backdrop="static"
            placement={"top"}
            className="offcanvas"
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body style={{ padding: " 0 20px " }}>
              <div className="row">
                <div className="col-lg-5 offcanvaImagediv me-4">
                  <img src={weather} className="img-fluid"></img>
                </div>
                <div className="col-lg-6 offcanvaPara">
                  <h2 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                    WeatherWise - Weather API
                  </h2>
                  <div>
                    <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                      Technologies Used:
                    </h5>
                    <h6
                      style={{ color: "white" }}
                      className="fw-bold mt-3 mb-3"
                    >
                      React js,WeatherAPI ,css
                    </h6>
                  </div>
                  <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                    Challenges Overcome:
                  </h5>
                  <p style={{ color: "white" }}>
                    <span
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3"
                    >
                      Async/Await Functions:
                    </span>{" "}
                    Effectively implementing async/await functions to handle
                    asynchronous requests and responses from weather APIs,
                    ensuring smooth data retrieval and display
                  </p>

                  <p style={{ color: "white" }}>
                    <span
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3"
                    >
                      Error Handling:
                    </span>{" "}
                    Implementing error handling mechanisms within async/await
                    functions to gracefully manage API request failures and
                    display informative error messages to users.
                  </p>

                  <div className="d-flex justify-content-center gap-4 projectbtn text-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Preview
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://v2-checkmyweather.netlify.app">
                        <FontAwesomeIcon icon={faEye} size="sm" />
                      </a>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Source Code
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://github.com/Leninbevan/weather-app">
                        <FontAwesomeIcon icon={faLink} size="sm" />
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
      {/* first project end */}

      {/* second project start */}
      <div data-aos="zoom-in">
        <Card
          className=" cad col-11 col-lg-9 mx-auto p-4"
          onClick={() => Setonlineshow(!onlineshow)}
        >
          <div className="">
            <div className="cardimg p-0">
              <Card.Img variant="top" src={marketing} className="image p-0" />
            </div>
            <Card.Body className="p-0 cardbody mt-3">
              <Card.Title className="p-0">
                <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                  Marketing site clone
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                    className="ms-2 iconright"
                  />
                </p>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>

        <div>
          <Offcanvas
            show={onlineshow}
            onHide={() => Setonlineshow(!onlineshow)}
            backdrop="static"
            placement={"top"}
            className="offcanvas"
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body style={{ padding: " 0 20px " }}>
              <div className="row">
                <div className="col-lg-5 offcanvaImagediv me-4">
                  <img src={marketing} className="img-fluid"></img>
                </div>
                <div className="col-lg-6 offcanvaPara">
                  <h2 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                    Marketing site clone{" "}
                  </h2>
                  <div>
                    <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                      Technologies Used:
                    </h5>
                    <h6
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3 mb-3"
                    >
                      HTML, CSS, JavaScript, Bootstrap
                    </h6>
                  </div>
                  <p className="text-white">
                    This dynamic marketing site is built using React.js, designed to provide a seamless and engaging user experience. Leveraging React's component-based architecture, the site ensures high performance, modularity, and easy maintenance. The site features responsive design, optimized load times, and a modern aesthetic that aligns with current marketing trends, making it a powerful tool for showcasing products and services effectively.
                  </p>

                  <div className="d-flex justify-content-center gap-4 projectbtn text-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Preview
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://marketingsamplesite.netlify.app">
                        <FontAwesomeIcon icon={faEye} size="sm" />
                      </a>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Source Code
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://github.com/Leninbevan/Lenin_klentyClone">
                        <FontAwesomeIcon icon={faLink} size="sm" />
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
      {/* second project end */}

      {/* fourth project start */}
      <div data-aos="zoom-in">
        <Card
          className=" cad col-11 col-lg-9 mx-auto p-4 mb-5"
          onClick={() => Settictacshow(!tictacshow)}
        >
          <div className="">
            <div className="cardimg">
              <Card.Img variant="top" src={tictac} className="image" />
            </div>
            <Card.Body className="p-0 cardbody mt-3">
              <Card.Title className="p-0">
                <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                  E-commerce Platform
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                    className="ms-2 iconright"
                  />
                </p>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>

        <div>
          <Offcanvas
            show={tictacshow}
            onHide={() => Settictacshow(!tictacshow)}
            backdrop="static"
            placement={"top"}
            className="offcanvas"
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body style={{ padding: " 0 20px " }}>
              <div className="row">
                <div className="col-lg-5 offcanvaImagediv me-4">
                  <img src={tictac} className="img-fluid"></img>
                </div>
                <div className="col-lg-6 offcanvaPara">
                  <h2 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                  E-commerce Platform
                  </h2>
                  <div>
                    <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                      Technologies Used:
                    </h5>
                    <h6
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3 mb-3"
                    >
                      React js, MUI, SCSS
                    </h6>
                  </div>
                  <p className="text-white">
                  This e-commerce platform, is developed using React.js and MUI for a seamless user experience. The site is styled with SCSS, ensuring a polished and responsive design that adapts to various devices. It offers a modern, intuitive interface that simplifies shopping and enhances user engagement, making it an ideal solution for online retail.
                  </p>

                  <div className="d-flex justify-content-center gap-4 projectbtn text-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Preview
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://ecommerce-lenin-bevan.vercel.app/cart">
                        <FontAwesomeIcon icon={faEye} size="sm" />
                      </a>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Source Code
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://github.com/Leninbevan/Ecommerce">
                        <FontAwesomeIcon icon={faLink} size="sm" />
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
      {/* fourth project end */}
    </>
  );
}

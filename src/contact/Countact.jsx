import emailjs from "@emailjs/browser";
import {
  faEnvelope,
  faPhoneFlip,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BiSolidUpArrow } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import "./Countact.css";

export default function Countact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
    .sendForm("service_z5tztdt", "template_b1vqw1h", form.current, {
      publicKey: "Lfyub-o2MFpQyLNKG",
    })
    .then(
      (result) => {
          alert("Email sent Sucessfully");
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div>
        <h2 className="ps-3 p-sm-0">Contact Us</h2>
        <div className="d-flex ps-3 p-sm-0">
          <div className="round"></div>
          <div className="line mt-1 ms-2"></div>
        </div>
      </div>

      {/* countact start */}
      <div>
        <div className="row">
          <div className="p-sm-4 p-3  col-lg-10 col-xl-8 col-11 mx-auto mt-5 contact">
            <div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                Contact Info
              </h3>
              <ul>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginRight: "8px" }}
                  />
                  Lenin Bevan C
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faTag}
                    style={{ marginRight: "8px" }}
                  />
                  Front End Developer
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "8px" }}
                  />
                  charleslenin431@gmail.com{" "}
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faPhoneFlip}
                    style={{ marginRight: "8px" }}
                  />
                  +91 7695810355
                </li>
              </ul>
              <div className="navfoot d-flex mt-4">
                <div className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/lenin-bevan-c-40a593231/"
                    className="text-white"
                  >
                    <RiLinkedinLine />
                  </a>
                </div>
                <div className="github">
                  <a
                    href="https://github.com/Leninbevan"
                    className="text-white"
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-50 col-11 col-lg-10 col-xl-8 mx-auto bg-light info">
            <BiSolidUpArrow
              style={{ color: "white", fontSize: "30px", marginTop: "-39px" }}
            />
            {/* ******* send email start *********** */}
            <Form className="p-4" onSubmit={sendEmail} ref={form}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="inputt"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="inputt"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="inputt"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  name="message"
                  className="inputt"
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100 p-3 mt-5 border-0 formbtn">
                Send Email
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

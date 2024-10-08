import "./About.css";
import lenin from "../assets/LeninImg.jpg";
export default function About() {
  return (
    <>
      {/* abouut us */}
      <div className="about cd ">
        <h2>ABOUT ME</h2>
        <div className="d-flex ">
          <div className="round"></div>
          <div className="line mt-1 ms-2"></div>
        </div>
        <div>
        {/* image start */}
          <div className="d-flex justify-content-center d-block d-lg-none">
            <div className="imgdiv">
              <img
                src={lenin}
                className="img-fluid"
                style={{ borderRadius: "50%" }}
              ></img>
            </div>
          </div>
          {/* image end */}

          <div>
            <p className="text-white mt-4 summary aboutme">
              Hello! I'm Lenin Bevan C, a passionate front-end developer eager to
              make my mark in the world of web development. With a strong
              foundation in HTML, CSS, and JavaScript, along with familiarity
              with Bootstrap and React, I'm excited to bring my skills to the
              forefront and contribute to innovative projects.
            </p>
          </div>
          <div>
            <div className="d-flex flex-column text-white">
              <p>
                <span>Name :</span>Lenin Bevan C</p>
              <p>
                <span>Degree :</span>B.Tech Information Technology
              </p>
            </div>
            <div className="text-white">
              <p><span>Phone :</span>+91 7695810355</p>
              <p><span>Email :</span>charleslenin431@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

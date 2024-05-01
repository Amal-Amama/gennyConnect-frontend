import React from "react";

const AboutUs = (props: any) => {
  return (
    <div id={props.id} className="aboutUs_container">
      <div className="text_container">
        <h1>GennyConnect</h1>
        <p>
          <span style={{ marginLeft: "0.7rem" }}></span>Our mission is to
          simplify the maintenance of medical devices and improve the quality of
          patient care.
        </p>
        <p>
          <span style={{ marginLeft: "0.7rem" }}></span> Join GenyConnect and
          contribute to improve the quality of patient care!
        </p>
        <div className="buttons_container">
          <button className="start_button">
            Start
            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
              <path
                clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>

          <button className="demo_button">Demo</button>
        </div>
      </div>
      <div className="images_container">
        <img src="/about2.jpeg" alt="medical_tech" className="image_1" />

        <img src="/about1.jpeg" alt="group_medical_tech" className="image_2" />
      </div>
    </div>
  );
};

export default AboutUs;

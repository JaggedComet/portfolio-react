import React from "react";
import UpdatedResume from "./resume.pdf";
import ResumeImg from "./resumeImg.png";
import ResumeImg2 from "./resumeImg2.png";

const styles = {
  img: {
    width: "450px",
    margin: "10px"
  },
};

export default function Resume() {
  return (
    <div className="d-flex justify-content-center">
      <div className="my-3">
        <a href={UpdatedResume} download>
          <img src={ResumeImg} style={styles.img} alt="Resume" />
          <img src={ResumeImg2} style={styles.img} alt="Resume part 2" />
        </a>
      </div>
    </div>
  );
}

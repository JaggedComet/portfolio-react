import React from "react";
import ProfilePic from "./profilePic.jpg";

const styles = {
  photo: {
    width: "auto",
    height: "420px",
    padding: "1px",
    marginRight: "10px",
  },
};

export default function About() {
  return (
    <div className="container-fluid d-flex justify-content-center .ms-1 .me-1 row">
      <img
        src={ProfilePic}
        className=" card border-light mb-3 bg-transparent col-sm-8 mt-2 rounded img-thumbnail shadow mt-2"
        style={styles.photo}
        alt="Profile"
      />

      <div className="card border-light mb-3 bg-transparent col-sm-8 mt-2 rounded bg-transparent">
        <div className="card-header border-light">
          <h3 className="text-center">About Me</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
              My name is Marco Flores and I'm looking for a start in a new career. I've been taking college classes 
              for the last couple of years and decided that I would like to try my hand at coding.
              Initially I was going to join the military in order to get experience in my field before going to the 
              private sector, but I decided to take a coding bootcamp online at UCSD extension that is partnered with Trilogy.
              I hope to be able to get a job in coding after graduation from this course and start my career in programing.
          </p>
          <hr />
          <h2 className="text-center">Technical Skills</h2>
          <p className="card-text text-center"> HTML : CSS : JavaScript : React : NodeJs : Express : Mongoose <br/> Sequelize : 
          MySQL : NoSQL : MongoDB : Insomnia : Apollo Sandbox : Jest</p> 
        </div>
      </div>
    </div>
  );
}

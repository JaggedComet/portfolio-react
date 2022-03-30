/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import jobBoard from "./job-board.jpg";
import covidTest from "./covid-test.jpg";
import textEditor from "./coding.jpeg";
import happyHour from "./happy-hour.jpg";
import bookSearch from "./book-search.jpg";
import { Button } from "react-bootstrap";

const styles = {
  shadow: {
    boxShadow: "0px 0px 30px lightblue",
  },
  width: {
    width: "300px",
  },
};

export default function Portfolio() {
  return (
    <div className="row d-flex justify-content-center mx-0">
      <h2 className="text-center">Portfolio</h2>
      {/* Help for Hire */}
      <div
        style={styles.sizing}
        className="col-sm-3 shadow p-2 mx-1 bg-transparent rounded mt-1"
      >
        <div className="bg-transparent" style={styles.shadow}>
          <a
            href="https://protected-taiga-32909.herokuapp.com/"
            target="_blank"
          >
            <img src={jobBoard} className="card-img-top" alt="Job Board" />
          </a>
          <div className="card-body">
            <p className="card-text">
              Allows users to both search and post jobs. Users need to sign-up
              and logged in for access.
            </p>
            <hr />
            <p className="text-center">
              HandleBars | Sequelize | Express | MySQL | NodeJs
            </p>
            <Button
              variant="outline-primary"
              className="d-block mb-2"
              href="https://protected-taiga-32909.herokuapp.com/"
              target="_blank"
            >
              Help-for-Hire Live Demo
            </Button>
            <Button
              variant="outline-light"
              className="d-block"
              href="https://github.com/MaestroLuu/Help-for-Hire"
              target="_blank"
            >
              Help-for-Hire Github Repo
            </Button>
          </div>
        </div>
      </div>
      {/* Covid Testing */}
      <div
        style={styles.sizing}
        className="col-sm-3 shadow p-2 mx-1 bg-transparent rounded mt-1"
      >
        <div className="bg-transparent" style={styles.shadow}>
          <a
            href="https://maestroluu.github.io/Covid19-Testing-Site-Locator/"
            target={"_blank"}
          >
            <img src={covidTest} className="card-img-top" alt="Covid Test" />
          </a>
          <div className="card-body">
            <p className="card-text">
              Assists users in locating Covid-19 testing facilities in
              California. Requires users to select city for results.
            </p>
            <hr />
            <p className="text-center">
              JavaScript | jQUery | RESTful APIs | W3 CSS 
            </p>
            <Button
              variant="outline-primary"
              className="d-block mb-2"
              href="https://maestroluu.github.io/Covid19-Testing-Site-Locator/"
              target="_blank"
            >
              Covid Testing Live Demo
            </Button>
            <Button
              variant="outline-light"
              className="d-block"
              href="https://github.com/MaestroLuu/Covid19-Testing-Site-Locator"
              target="_blank"
            >
              Covid Testing Github Repo
            </Button>
          </div>
        </div>
      </div>
      {/* On the go COder */}
      <div
        style={styles.sizing}
        className="col-sm-3 shadow p-2 mx-1 bg-transparent rounded mt-1 "
      >
        <div className="bg-transparent" style={styles.shadow}>
          <a href="https://young-gorge-61076.herokuapp.com/">
            <img src={textEditor} className="card-img-top" alt="Text Editor" />
          </a>
          <div className="card-body">
            <p className="card-text">
              Allows clients to code on their browser, save their code, and
              reloaded when they leave the page.
            </p>
            <hr />
            <p className="text-center">
              Webpack | Express | NodeJs | Babel
            </p>
            <Button
              variant="outline-primary"
              className="d-block mb-2"
              href="https://guarded-cove-01704.herokuapp.com/"
              target="_blank"
            >
              Text-Editor Live Demo
            </Button>
            <Button
              variant="outline-light"
              className="d-block"
              href="https://github.com/JaggedComet/Text-Editor"
              target="_blank"
            >
              Text-Editor Github Repo
            </Button>
          </div>
        </div>
      </div>
      {/* Happy Hour */}
      <div
        style={styles.sizing}
        className="col-sm-3 shadow p-2 mx-1 bg-transparent rounded mt-1"
      >
        <div className="bg-transparent" style={styles.shadow}>
          <a href="https://desolate-earth-02940.herokuapp.com/">
            <img src={happyHour} className="card-img-top" alt="Text Editor" />
          </a>
          <div className="card-body">
            <p className="card-text">
              Allows users to search for restaurants that have happy hour
              specials near their zipcode.
            </p>
            <hr />
            <p className="text-center">
              MongoDB | NodeJs | GraphQL | Express | React 
            </p>
            <Button
              variant="outline-primary"
              className="d-block mb-2"
              href="https://desolate-earth-02940.herokuapp.com/"
              target="_blank"
            >
              Happy Hour Live Demo
            </Button>
            <Button
              variant="outline-light"
              className="d-block"
              href="https://github.com/MaestroLuu/Happy-Hour"
              target="_blank"
            >
              Happy Hour Github Repo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

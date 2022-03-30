import React, { useState } from "react";
import NavBar from "./NavBar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume";

const styles = {
  fontColor: {
    color: "#fff",
  },
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  // selects which page to render
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer className="text-center">
        <a style={styles.fontColor} href="mailto: MarcoFlores1029@gmail.com">
          MarcoFlores1029@gmail.com
        </a>{" "}
        |{" "}
        <a style={styles.fontColor} href="tel:858-413-9644">
          858.413.9644
        </a>{" "}
        |{" "}
        <a style={styles.fontColor} href="https://github.com/JaggedComet">
          Github
        </a>{" "}
        |{" "}
        <a
          style={styles.fontColor}
          href="https://www.linkedin.com/in/marco-flores-923602175/"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}

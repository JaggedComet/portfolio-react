import React from 'react';

const styles = {
  h1: {
    fontFamily: 'Oswald, sans-serif',
    fontWeight: 'bold',
    fontSize: '60px',
    textShadow: '0px 0px 20px black'
  },
  fontColor: {
    color: '#fff',
  }
};

function NavBar({ currentPage, handlePageChange }) {
    return (
      <div>
      <h1 className="mb-0 text-center" style={styles.h1}>Marco Flores</h1>
      <ul className="nav nav-pills d-flex justify-content-center ">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}  
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link '}
            style={styles.fontColor}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            style={styles.fontColor}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}  
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            style={styles.fontColor}
          >
            Resume
          </a>
        </li>

      </ul>
      </div>
    );
  }
  
  export default NavBar;
  
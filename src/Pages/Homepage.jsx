
import { FaFacebookF, FaInstagram, FaMailBulk, FaMailchimp, FaYoutube } from 'react-icons/fa';
import { Button } from "@mui/material"; 
import { Fa0, FaLetterboxd, FaMessage, FaSquareLetterboxd } from 'react-icons/fa6';

function HomePage() {
  return (
    <div className="homepage">
      <div className="background" />

      <div className="overlay">
        <nav className="navbar">
          <div className="nav-left">
            <a href="#" className="active">Home</a>
            <a href="#">Music</a>
            <a href="mailto:contact999MB@gmail.com">Email: contact999MB@gmail.com</a>
          </div>
          <div className="nav-right">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </nav>

        <div className="hero">
          <>999MB</>
          <p>Local jazz cover Band in Bend Oregon</p>
        </div>
        <div className="contact-button">
            <a className="contact" href="mailto:contact999mb@gmail.com">{" "}CONTACT US</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

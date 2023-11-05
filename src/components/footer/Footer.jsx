/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import IMGFOOTER from '../../asserts/shlogo.png';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                <img className="footerLogo" src={IMGFOOTER} alt="" />
            </a>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                {/* <li>
          <a href="#services">Services</a>
        </li> */}
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                {/* <li>
          <a href="#testmonials">Testmonials</a>
        </li> */}
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a
                    href="https://www.linkedin.com/in/sazzadhossainapple/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin className="footer-socials-icons" />
                </a>
                <a
                    href="https://github.com/sazzadhossainapple"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Sazzad Hossain. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;

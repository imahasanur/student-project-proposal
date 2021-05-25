import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faFacebook, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div className="p-2 bg-light">
      <div className="row container">
        <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center align-items-center">
          <div className="">
            <ul className="list-unstyled">
            <li>roles</li>
            <li>achievements</li>
            <li>goals</li>
            <li>advices</li>
            <li>reviews</li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-4 d-flex justify-content-center align-items-center">
        <div className="">
          <ul className="list-unstyled">
            <li>help</li>
            <li>contacts</li>
            <li>ideas</li>
            <li>members</li>
            <li>instructors</li>
          </ul>
        </div>
        </div>
        <div className="col-6 col-sm-4 col-md-4 d-flex justify-content-end align-items-center">
        <div className="">
        <h4>Connect with us</h4>
          <ul className="list-unstyled d-flex p-2">
            <li className="p-2"><FontAwesomeIcon icon={faFacebook}/></li>
            <li className="p-2"><FontAwesomeIcon icon={faTwitter}/></li>
            <li className="p-2"><FontAwesomeIcon icon={faEnvelope}/></li>

            <li className="p-2"><FontAwesomeIcon icon={faTelegram}/></li>
          </ul>
        </div>
        </div>
      </div>
      <div className="text-center">
          <p>Copyright Ahasanur Rahman &copy; {new Date().toDateString()}</p>
      </div>

    </div>
  );
};

export default Footer;
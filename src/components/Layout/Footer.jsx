import React from "react";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
  
        <div className="footer text-light p-1 d-flex justify-content-between ">
          <p className=" mt-3 container">
            <Link to="/about"> About</Link>|<Link to="/contact"> Contact</Link>|
            <Link to="/policy"> Privacy Policy</Link>
          </p>
          <span className="pt-2 coperight">All Right Reserved &copy; koushik Nag Shuvo</span>
        </div>
      
    </>
  );
};

export default Footer;

import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
    
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
  
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
        < FaFacebookF className='icon mr-4' />
      
        <FaTwitter className='icon mr-4' />
        <FaInstagram className='icon-instagram mr-4' />
        <FaLinkedinIn className='icon' />
    </div>
   
  </section>
 

  
  <section className="">
    <div className="container text-center text-md-start mt-5">
     
      <div className="row mt-3">

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Voting System
          </h6>
          <p>
          Discover more about our innovative voting system and how it's transforming democracy in Pakistan. Stay updated with the latest news, announcements, and developments.
          </p>
        </div>
       

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Links
          </h6>
          <p>
            <NavLink to={"/"} className="nav-link">Home</NavLink>
          </p>
          <p>
            <NavLink to={"/candidates"} className="nav-link">Candidates</NavLink>
          </p>
          <p>
            <NavLink to={"/castvote"} className="nav-link">Cast Vote</NavLink>
          </p>
          
        </div>
      

       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <NavLink to={"/"}  className="nav-link">Profile</NavLink>
          </p>
          <p>
            <NavLink to={"/"}  className="nav-link">Privacy</NavLink>
          </p>
          <p>
            <NavLink to={"/"}  className="nav-link">Policy</NavLink>
          </p>
          
        </div>
      

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-primary"></i>Talagang, Punjab, Pakistan</p>
          <p>
            <i className="fas fa-envelope me-3 text-primary"></i>iqrashjalil@gmail.com
          </p>
          <p><i className="fas fa-phone me-3 text-primary"></i>0302-8950855</p>
         
        </div>
   
      </div>
  
    </div>
  </section>

  
  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright:
    <a className="text-reset">GOVT Of Pakistan</a>
  </div>
</footer>
    
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth'




export const Navbar = () => {
  const { isLoggedIn} = useAuth();
  const { user} = useAuth();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  return (
    <>
    <nav className={`navbar sticky-top navbar-expand-lg bg-light ${scrolled ? 'shadow' : ''}`}>
  <div className="container-fluid">
    <a className="navbar-brand" >PowerBallot</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {isLoggedIn && user && user.role== "admin" ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={"/admin/home"}>Dashboard</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={"/admin/candidates"}>Candidates</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={"/admin/add_candidate"}>Add Candidates</NavLink>
        </li>

        
        
      </ul> :<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={"/candidates"}>Candidates</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={"/castvote"}>Cast Vote</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={"/result"}>Results</NavLink>
        </li>
        
        
      </ul> }
      {isLoggedIn && user && user.name && <p className='m-0'>{user.name}</p>}

    {isLoggedIn ? <NavLink to={"/logout"} className="btn btn-outline-primary mx-2" >Logout </NavLink> : 
    <>
        <NavLink to={"/login"} className="btn btn-outline-primary mx-2" >Login </NavLink>
        <NavLink to={"/register"} className="btn btn-outline-primary" >Register </NavLink>
    </>
    }

      
    </div>
  </div>
</nav>
    </>
  )
}

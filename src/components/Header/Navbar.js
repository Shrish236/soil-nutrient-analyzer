import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles.css'
import { useAuth } from "../../utils/auth";
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const auth = useAuth();
  const win = window.sessionStorage;
  useEffect(() => {
    if(win.getItem('email')!==null && auth.user === null){
      auth.login(win.getItem('email'))
    }
  }, [])
  return (
    <>
      <nav className="h-10 relative self-center flex flex-wrap items-center justify-between px-4 bg-green-600 w-full">
          <div className="w-full relative float-left flex gap-10 justify-between lg:w-auto lg:static lg:block lg:justify-start self-center justify-self-start">
            <Link 
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
              to="/"
            >
              Home
            </Link>
            <Link 
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
              to="/aboutus"
            >
              About Us
            </Link>
            <Link 
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
              to="/infrastructure"
            >
              Infrastructure
            </Link>
            <Link 
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
              to="/vision-mission"
            >
              Vision & Mission
            </Link>
            <Link 
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
              to="/services"
            >
              Services
            </Link>
            {/* <Link 
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
              to="/soil-testing"
            >
              Soil Testing
            </Link> */}
            {/* <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
              to="/cardform"
            >
              Soil Health Card
            </Link> */}
            {/* <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars">Click</i>
            </button> */}
          </div>
          <div className="w-full flex gap-10 self-center float-right lg:w-auto lg:static lg:block lg:justify-start ">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
              to="/enquiryform"
            >
              Enquiry
            </Link>
            {(()=>{
              if(auth.user===null){
                return (
                  <>
                  <Link
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
                    to="/signup"
                  >
                    Login/Sign Up
                  </Link>
                  <Link
                    className="text-sm font-bold leading-relaxed inline-block py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
                    to="/adminlogin"
                  > Admin
                  </Link>
                  </>
                );
              }
              else if(auth.user && win.getItem('type') === 'user'){
                return(
                <Link
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
                    to="/profile"
                  >
                    Profile
                  </Link>
                );
              }
              else if(auth.user && win.getItem('type') === 'admin'){
                return(
                <Link
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
                    to="/adminprofile"
                  >
                    Profile
                  </Link>
                );
              }
              else if(auth.user && win.getItem('type') === 'farmer'){
                return(
                <Link
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white hover:opacity-75"
                    to="/farmer-profile"
                  >
                    Profile
                  </Link>
                );
              }
            })()}
            
            
            </div>
          {/* <div
            className={
              "lg:flex items-end justify-end self-end justify-items-end justify-self-end" +
              (navbarOpen ? " flex justify-items-end items-end text-right justify-self-end" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-1 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div> */}

      </nav>
    </>
  );
}

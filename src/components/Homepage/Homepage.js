import React from 'react'
import '../styles.css'
import logoURL from '../../assets/TN-logo-2.png'
import image from '../../assets/image1.jpg'
import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import CIoTLogo from '../../assets/WhatsApp Image 2024-02-18 at 2.14.31 PM (1).png'
import { Link } from 'react-router-dom';
function Homepage(props) {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col justify-center w-fill bg-homepagebg bg-no-repeat bg-center">
        {/* <div
          className="bg-cover bg-scroll self-center bg-center h-52 w-48"
          style={{
            backgroundImage: `url(${logoURL})`,
          }}
        > */}
        {/* <img src={logoURL} className="absolute mt-20 z-0 h-52 w-48" alt='logo'/> */}
                
        <div className="block w-fill text-center py-10"> 
            <h1 className='font-bold text-lg'>Welcome to the Soil Testing Research and Development Laboratory</h1>
        </div>
        <div className='flex'>
        <div className="block flex-start w-4/6 text-justify justify-start float-left px-10"> 
            <p><span className='self-left'>&nbsp; In the realm of modern agriculture, soil nutrient analysis stands as 
            a cornerstone process for understanding and optimizing land productivity. At the heart of this method 
            lies a detailed evaluation of soil composition and fertility, facilitated by specialized analyzers or 
            laboratories. <br/><br/> &nbsp; &nbsp; This meticulous process involves the extraction and examination of soil samples to 
            ascertain the presence and quantities of crucial nutrients essential for healthy plant growth. 
            Nitrogen (N), Phosphorus (P), Potassium (K), Sulphur, Zinc, Boron, Iron, Manganese, and Copper 
            levels were meticulously determined during this assessment. Advanced equipment or trained professionals 
            perform these analyses, generating comprehensive reports detailing the nutrient composition.</span></p>
        </div>
        <div className="block w-2/6 text-center justify-center float-right pr-10">
            <div className="block bg-cyan-100 p-2 py-4"> 
                <h1 className='font-medium text-m text-base'>Soil Testing Services</h1>
                <p className='text-m mt-5'>
                    <span>Click here to learn about soil testing in the Soil Testing R&D Laboratory
                    </span>
                </p>
                <Link to="/soil-testing">
                <button className=" overflow-hidden bg-black mt-8 text-white font-semibold text-m text-left rounded-full py-2 px-4 w-2/6">
                    Learn Now 
                    <span className='absolute items-end overflow-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
                    </span>
                </button>
                </Link>
            </div>
        </div>
        </div>
        <div className='block z-1 justify-start h-1/4 w-fit py-5 px-2'>
            <img src={image} className ="overflow-hidden" alt = "TN Resources"></img>
        </div>
        <div className='flex flex-col w-full justify-center align-middle p-5'>
          <Card className='w-5/6 align-middle justify-center self-center text-center bg-orange-100'>
            <CardBody>
              Our Work
            </CardBody>
          </Card>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  )
}

export default Homepage
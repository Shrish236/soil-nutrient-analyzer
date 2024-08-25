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
  Carousel
} from "@material-tailwind/react";
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'
import img6 from '../../assets/img6.jpeg'
import img7 from '../../assets/img7.jpeg'
import img8 from '../../assets/img8.jpeg'
import img9 from '../../assets/img9.jpeg'
import homeimg1 from '../../assets/home-img1.jpeg'
import homeimg2 from '../../assets/home-img2.jpeg'
import homeimg3 from '../../assets/home-img3.jpeg'
import homeimg4 from '../../assets/home-img5.jpeg'
import CIoTLogo from '../../assets/WhatsApp Image 2024-02-18 at 2.14.31 PM (1).png'
import { Link } from 'react-router-dom';
function Homepage(props) {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col justify-center w-fill bg-ciotlogobg bg-no-repeat bg-center">
        {/* <div
          className="bg-cover bg-scroll self-center bg-center h-52 w-48"
          style={{
            backgroundImage: `url(${logoURL})`,
          }}
        > */}
        {/* <img src={logoURL} className="absolute mt-20 z-0 h-52 w-48" alt='logo'/> */}
                
        <div className="block w-fill text-center py-10 px-10"> 
            <h1 className='font-bold text-lg'>Welcome to the Soil Testing Research and Development Laboratory</h1>
        </div>
        <div className='flex justify-between'>
        <div className="block flex-start w-2/3 text-justify justify-start float-left px-10 md:text-lg"> 
            <p><span className='self-left'>&nbsp; In the realm of modern agriculture, soil nutrient analysis stands as 
            a cornerstone process for understanding and optimizing land productivity. At the heart of this method 
            lies a detailed evaluation of soil composition and fertility, facilitated by specialized analyzers or 
            laboratories. <br/><br/> &nbsp; &nbsp; This meticulous process involves the extraction and examination of soil samples to 
            ascertain the presence and quantities of crucial nutrients essential for healthy plant growth. 
            Nitrogen (N), Phosphorus (P), Potassium (K), Sulphur, Zinc, Boron, Iron, Manganese, and Copper 
            levels were meticulously determined during this assessment. Advanced equipment or trained professionals 
            perform these analyses, generating comprehensive reports detailing the nutrient composition.</span></p>
        </div>
        <div className="block w-1/3 text-center justify-center float-right pr-10">
            <div className="block bg-cyan-100 p-2 py-4"> 
                <h1 className='font-medium text-m text-base'>Soil Testing Services</h1>
                <p className='text-m mt-5'>
                    <span>Click here to learn about soil testing in the Soil Testing R&D Laboratory
                    </span>
                </p>
                <Link to="/soil-testing">
                <button className=" overflow-hidden bg-black mt-8 text-white font-semibold text-m text-left rounded-full py-2 px-4 w-2/6 pl-4">
                    Learn Now 
                    <span className='absolute items-end overflow-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
                    </span>
                </button>
                </Link>
            </div>
        </div>
        </div>
        {/* <div className='block z-1 justify-start h-1/4 w-fit py-5 px-2'>
            <img src={image} className ="overflow-hidden" alt = "TN Resources"></img>
        </div> */} 
        <div className='flex justify-center'>
          <div className='w-4/6 p-10 py-10 text-justify'>
            <span className='md:text-lg'>
            &nbsp;&nbsp; Soil Nutrient Analysis Laboratory specializes in employing LIBS (Laser-Induced Breakdown Spectroscopy) 
            spectrometers to conduct precise and efficient analyses of soil samples. Our laboratory is equipped with cutting-edge
             technology to provide accurate measurements of key soil parameters, including pH levels, NPK content,organic matter, 
             and micro-nutrients. Our expert team of analysts ensures the reliability of results, offering valuable insights into 
             soil health for informed agricultural practices. With a commitment to delivering high-quality data, we aim to support farmers, 
             researchers, and land managers in optimizing soil conditions for enhanced crop productivity.
            </span>
            <span className='md:text-lg'>
            Laboratory facilities for Laser-Induced Breakdown Spectroscopy (LIBS) typically include a controlled environment with specialized 
            equipment. Key components comprise a high-energy laser system to induce plasma on the sample surface, a spectrometer for analyzing 
            emitted light, and a detection system for capturing spectral data. Additionally, LIBS laboratories often feature sample preparation 
            areas, calibration standards, and advanced data analysis software. Safety measures, including laser safety protocols and ventilation 
            systems, are integral parts of these facilities to ensure accurate and secure LIBS analysis.
            </span>
          </div>
        <div className='flex flex-col w-2/6 pr-10 justify-center align-middle self-end'>

            <Carousel transition={{ duration: 2 }} className="rounded-xl h-96 self-center my-4">
                <img
                    src={homeimg1}
                    alt="Soil Testing 1"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={homeimg4}
                    alt="Soil Testing 1"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={homeimg2}
                    alt="Soil Testing 2"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={homeimg3}
                    alt="Soil Testing 3"
                    className="w-fill h-96 object-cover"
                />
            </Carousel>

        </div>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  )
}

export default Homepage
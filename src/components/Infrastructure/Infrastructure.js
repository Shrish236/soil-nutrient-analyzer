import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import img1 from '../../assets/infrastructure-ciot-1.png'
import img2 from '../../assets/infrastructure-ciot-q-switched.png'
import img3 from '../../assets/infrastructure-ciot-3-spectrometer.png'
import img4 from '../../assets/infrastructure-ciot-4-delay.png'
import img5 from '../../assets/infrastructure-ciot-5-server.png'
import img6 from '../../assets/infrastructure-ciot-6-pellet.png'
import img7 from '../../assets/infrastructure-ciot-6-oven.jpg'
import pic1 from '../../assets/arduino.JPG'
import pic2 from '../../assets/embedded-boards-1.JPG'
import pic3 from '../../assets/2nd-gen-aurix.JPG'
import pic4 from '../../assets/waveshare.JPG'
import pic5 from '../../assets/rasberry-pi.JPG'
import pic6 from '../../assets/pulsed-laser-system.JPG'
import pic7 from '../../assets/fillers-gratings.JPG'
import pic8 from '../../assets/photo-multiplier-tube.JPG'
import AUImage1 from '../../assets/AnnaUniversity-Front.jpg'
import AUImage2 from '../../assets/01.jpg'
import Ciot1 from '../../assets/Ciot-1.jpeg'
import Ciot2 from '../../assets/CIot-2.jpeg'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
  } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import { useRef } from 'react'
// import SetViewOnClick
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


function Infrastructure() {
    const position = [51.505, -0.09]
    const animateRef = useRef(false)
  return (
    <>
        <Header />
        <Navbar />
        <div className='w-full p-5 flex flex-col gap-5 justify-center  bg-infrastructurebg bg-repeat bg-center'>
        <div className='flex gap-5'>
        <Card className="w-full">
        <CardBody>
        <div className="w-full justify-center justify-items-center content-center text-justify">
        <Typography variant="h5" color="blue-gray" className="text-center">
            Infrastructure at Soil Testing R&D Laboratory
        </Typography>
        <br/>
    <div className='flex flex-row'>
    <div className='w-7/12 mr-5 mt-5'>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The infrastructure at our laboratory is crucial for accurate and efficient soil tests and research. Advanced analytical instruments, 
    such as spectrometers and chromatography equipment, enable precise chemical and nutrient analysis. 
    Controlled environments, including temperature and humidity-regulated rooms, ensure consistent sample conditions. 
    Well-organized sample processing areas and storage facilities prevent contamination and degradation of samples. 
    Additionally, robust data management systems allow for meticulous record-keeping and 
    analysis, which are essential for reliable research outcomes and informing agricultural or environmental decisions.
    Infrastructure in a laboratory is critically important as it underpins the efficiency, safety, and quality of research and experimentation. 
    Proper infrastructure includes essential elements such as state-of-the-art equipment, reliable utilities (electricity, water, gas), appropriate ventilation and waste disposal systems,
     and robust IT networks for data management. It ensures that experiments can be conducted accurately and reproducibly, while minimizing the risk of contamination, errors, and accidents. 
     Furthermore, well-designed laboratory infrastructure supports compliance with regulatory standards and fosters a productive environment for scientists, enabling innovative research and development. 
    In essence, robust infrastructure is foundational to achieving high standards of scientific inquiry and technological advancement.
    Our available equipment ranging from a pulsed laser system to a delay generator is explained in detail below. Do feel free to 
    contact us for further queries regarding the available infrastructure.
    </div>
    <div className='flex w-5/12 justify-center'>
    <Carousel transition={{ duration: 2 }} className="rounded-xl w-100 h-96 self-center overflow-clip">
                <img
                    src={pic1}
                    alt="Soil Testing 1"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={pic2}
                    alt="Soil Testing 2"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={pic3}
                    alt="Soil Testing 3"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={pic4}
                    alt="Soil Testing 4"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={pic5}
                    alt="Soil Testing 5"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={pic6}
                    alt="Soil Testing 6"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={pic7}
                    alt="Soil Testing 7"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={pic8}
                    alt="Soil Testing 8"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={img3}
                    alt="Soil Testing 9"
                    className="w-fill h-96 object-cover"
                />
            </Carousel>
    </div>
    </div> 
        </div>
        </CardBody>  
        </Card>
        </div>
        <div className='flex flex-row gap-5 w-full justify-center'>
          <Card className='w-1/3 bg-amber-200'>
            <CardBody>
              <div className='flex flex-col gap-3'>
                <div>
                  <Typography variant="h5" color="blue-gray" className="font-bold text-center p-1">
                          Pulsed Laser System
                    </Typography>
                <img
                    src={img1}
                    alt="Pulsed Laser System"
                    className="w-fill h-40"
                />
                </div>
                <div>
                  <table className='w-full min-w-max table-auto text-left'>
                    <thead>
                      <tr>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Specifications
                        </Typography>
                      </th>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Features
                        </Typography>
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Company
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        M/s Innolas Laser, Germany 
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Make
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        Spitlight Compact 100
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Active Medium
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        Nd: YAG
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Wavelength
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        1064 nm
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Max Energy
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        100 mJ
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Pulse Width
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        6 ns
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Beam Diameter
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                           5 mm
                        </Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <Card>
                    <CardBody>
                    <Typography variant="large" color="blue-gray" className="font-bold">
                           Applications
                    </Typography>
                    <ul className='list-disc p-2 ml-3'>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          Plasma generation 
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          Biomedical applications 
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Analytical testing instruments 
                        </Typography>
                      </li>
                    </ul>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className='w-1/3 bg-pink-100'>
          <CardBody>
              <div className='flex flex-col gap-3'>
                <div>
                  <Typography variant="h5" color="blue-gray" className="font-bold text-center p-1">
                  Passively q-switched DPSS lasers
                    </Typography>
                <center>
                <img
                    src={img2}
                    alt="Pulsed Laser System"
                    className="w-fill h-40"
                />
                </center>
                </div>
                <div>
                  <table className='w-full min-w-max table-auto text-left'>
                    <thead>
                      <tr>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Specifications
                        </Typography>
                      </th>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Features
                        </Typography>
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Company
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        M/s Optogama, Germany  
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Make
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        Spitlight Compact 100
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Active Medium
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        Nd: YAG
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Wavelength
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        1064 nm
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Max Energy
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        1 mJ
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Pulse Width
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        2 ns
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Beam Diameter
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        3 mm @ 1m
                        </Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <Card>
                    <CardBody>
                    <Typography variant="large" color="blue-gray" className="font-bold">
                           Applications
                    </Typography>
                    <ul className='list-disc p-2 ml-3'>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Material processing & micromatching
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        LIBS, Marking & Biophotonics
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        LIDAR & Laser Ranging
                        </Typography>
                      </li>
                    </ul>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className='w-1/3 bg-teal-200'>
          <CardBody>
              <div className='flex flex-col gap-3'>
                <div>
                  <Typography variant="h5" color="blue-gray" className="font-bold text-center p-1">
                  Spectrometer
                    </Typography>
                <center>
                <img
                    src={img3}
                    alt="Pulsed Laser System"
                    className="w-fill h-40"
                />
                </center>
                </div>
                <div className='text-wrap'>
                  <table className='w-full min-w-max table-auto text-left'>
                    <thead>
                      <tr>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Specifications
                        </Typography>
                      </th>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Features
                        </Typography>
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Company
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        Andor- oxford instruments  
                        </Typography>
                        </td>
                      </tr>
                      <tr className='text-wrap'>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Make
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        Kymera 193i
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Resolution
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        1 nm
                        </Typography>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Grating
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2 ">
                        Interchangeable <br/> (800 G/ mm and 1200 G/mm)
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Focal length
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        193 mm
                        </Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <Card>
                    <CardBody>
                    <Typography variant="large" color="blue-gray" className="font-bold">
                           Applications
                    </Typography>
                    <ul className='list-disc p-2 ml-3'>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Optical spectroscopy
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Nano material growth and characterisation
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Measurement of chemical and molecular composition 
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Analysis of environment contamination 
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Characterisation of optical devices 
                        </Typography>
                      </li>
                    </ul>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='flex flex-row gap-5 w-full justify-center'>
          <Card className='w-1/3 bg-purple-100'>
            <CardBody>
              <div className='flex flex-col gap-3'>
                <div>
                  <Typography variant="h5" color="blue-gray" className="font-bold text-center p-1">
                        Delay Generator
                    </Typography>
                <img
                    src={img4}
                    alt="Pulsed Laser System"
                    className="w-fill h-40"
                />
                </div>
                <div>
                  <table className='w-full min-w-max table-auto text-left'>
                    <thead>
                      <tr>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Specifications
                        </Typography>
                      </th>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Features
                        </Typography>
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                        Delay output channels
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        4 nos
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                        Resolution 
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        5 ps
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                        Max delay
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        2000 s
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                        External trigger
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        Rising edge or falling edge 
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Interface
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        Ethernet, GPIB ad RS 232
                        </Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <Card>
                    <CardBody>
                    <Typography variant="large" color="blue-gray" className="font-bold">
                           Applications
                    </Typography>
                    <ul className='list-disc p-2 ml-3'>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Laser timing control 
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Component testing
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Camera synchronisation 
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Instrument gating  
                        </Typography>
                      </li>
                    </ul>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className='w-1/3 bg-green-100'>
          <CardBody>
              <div className='flex flex-col gap-3'>
                <div>
                  <Typography variant="h5" color="blue-gray" className="font-bold text-center p-1">
                  Server
                    </Typography>
                <center>
                <img
                    src={img5}
                    alt="Pulsed Laser System"
                    className="w-fill h-40"
                />
                </center>
                </div>
                <div>
                  <table className='w-full min-w-max table-auto text-left'>
                    <thead>
                      <tr>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Specifications
                        </Typography>
                      </th>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Features
                        </Typography>
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Make
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        Lenovo
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Model
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        SR650
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Processor
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        16C, 2.1 GHz
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          RAM
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        16 GB HDD RAM (4Nos)
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          HDD
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        1.2 TB (3Nos)
                        </Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <Card>
                    <CardBody>
                    <Typography variant="large" color="blue-gray" className="font-bold">
                           Applications
                    </Typography>
                    <ul className='list-disc p-2 ml-3'>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Web Hosting
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Database Management
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Virtualization and Cloud Computing
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Security & Authentication
                        </Typography>
                      </li>
                    </ul>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className='w-1/3 bg-orange-100'>
          <CardBody>
              <div className='flex flex-col gap-3'>
                <div>
                  <Typography variant="h5" color="blue-gray" className="font-bold text-center p-1">
                  Pellet Making Setup
                    </Typography>
                <center>
                <img
                    src={img6}
                    alt="Pulsed Laser System"
                    className="w-fill h-40"
                />
                </center>
                </div>
                <div className='text-wrap'>
                  <table className='w-full min-w-max table-auto text-left'>
                    <thead>
                      <tr>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Specifications
                        </Typography>
                      </th>
                      <th
                        className="border-b border-gray-800 bg-gray-900 p-4"
                      >
                        <Typography
                          variant="large"
                          color="white"
                          className="font-bold leading-none"
                        >
                          Features
                        </Typography>
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Capacity
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                         5 Ton
                        </Typography>
                        </td>
                      </tr>
                      <tr className='text-wrap'>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Loading Type
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        Hydraulic
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Travel of Ram
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                          15 cm
                        </Typography>
                        </td>
                      </tr>
                      <tr className=''>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Pressure gauge
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2 ">
                        External
                        </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-gray-800 bg-white'>
                        <Typography variant="medium" color="blue-gray" className="font-normal p-2">
                          Cast Iron
                        </Typography>
                        </td>
                        <td className='border border-gray-800 bg-gray-300'>
                        <Typography variant="small" color="blue-gray" className="font-normal p-2">
                        30 mm die set
                        </Typography>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                <div>
                  <Card>
                    <CardBody>
                    <Typography variant="large" color="blue-gray" className="font-bold">
                           Applications
                    </Typography>
                    <ul className='list-disc p-2 ml-3'>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Making Pellet
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Compressing lightweight materials
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Load Testing
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Elemental analysis 
                        </Typography>
                      </li>
                    </ul>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='flex flex-row w-full justify-center'>
        <Card className='w-full bg-red-100'>
          <CardBody>
              <div className='flex gap-3'>
                <div className='w-1/4'>
                  <Typography variant="h5" color="blue-gray" className="font-bold text-center p-1">
                  Hot Air Oven 
                    </Typography>
                <center>
                <img
                    src={img7}
                    alt="Pulsed Laser System"
                    className="w-fill h-40"
                />
                </center>
                </div>
                <div className='w-2/4 text-wrap'>
                <Card className='w-full'>
                    <CardBody>
                    <Typography variant="large" color="blue-gray" className="font-bold">
                      Specifications
                    </Typography>
                    <ul className='list-disc p-2 ml-3'>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Double wall chamber.
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Oven Maximum temperature 210˚C, Continues operation at 200˚C, Accuracy ±1˚C
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Power rating 3.5KWS
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Outer wall made of cold rolled Mild Steel with mirror powder coating 
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Fan for uniform heating & Digital on / off controller
                        </Typography>
                      </li>
                    </ul>
                    </CardBody>
                  </Card>
                </div>
                <div className='w-1/4'>
                  <Card>
                    <CardBody>
                    <Typography variant="large" color="blue-gray" className="font-bold">
                           Applications
                    </Typography>
                    <ul className='list-disc p-2 ml-3'>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Moisture removal 
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Sterilisation
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Temperature stability testing
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Heat treatment and drying 
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                        Research applications 
                        </Typography>
                      </li>
                    </ul>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        </div>
        <Footer />
    </>
    
  )
}

export default Infrastructure
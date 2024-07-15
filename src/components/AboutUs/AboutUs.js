import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import AUImage1 from '../../assets/AnnaUniversity-Front.jpg'
import AUImage2 from '../../assets/01.jpg'
import Ciot1 from '../../assets/Ciot-1.jpeg'
import Ciot2 from '../../assets/CIot-2.jpeg'
import Tanii1 from '../../assets/about-us-tanii.jpeg'
import Tanii2 from '../../assets/about-us-tanii-2.jpeg'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
  } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import { useRef } from 'react'
// import SetViewOnClick
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


function AboutUs() {
    const position = [51.505, -0.09]
    const animateRef = useRef(false)
  return (
    <>
        <Header />
        <Navbar />
        <div className='w-full p-5 py-5 flex flex-col gap-5 justify-center  bg-aboutusbg bg-repeat bg-center'>
        
        <Card className="w-fill">
        <CardBody>
        <div className="w-full">
            <Timeline className='p-2'>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none">
                    <Typography variant="h5" color="blue-gray" className="">
                    About TANII Project
                    </Typography>
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                <div className='flex gap-2 p-5 h-80 mb-4 overflow-hidden'>
                    <div className='w-1/2 h-fit'>
                        <img src={Tanii2} className='h-fill w-fill'/>
                    </div>
                    <div className='w-1/2 h-fit'>
                    <img src={Tanii1} className='h-fill w-fill'/>
                    {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className='h-fill w-fill overflow-hidden'>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        className='h-fill w-fill'
                        />
                        <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </MapContainer> */}
                    </div>
                </div>
                <Typography className='text-justify px-2'>
                {/* The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona. */}
                &nbsp;&nbsp;&nbsp;&nbsp;The Department of Horticulture and Plantation Crops (DoHPC), Government of Tamilnadu has 
                sanctioned a project titled, “Design and Development of Internet of Things (IoT) enabled portable soil nutrient 
                measurement system” at a total cost of Rs. 227.378 lakh for a period of three years (25.02.2021 to 24.02.2024) 
                under Tamilnadu Innovative Initiative (TANII) state innovation fund. Out of which, a sum of Rs. 153.23 lakh 
                has been received, as the first instalment and Rs.38.226 has been received as second installment. The primary
                objective of the TANII Project is to  design and develop a real time, portable soil nutrient measurement system 
                (Macronutrients – N, P, K; Micronutrients – B, S, Ca, Mg, Fe, Cu, Zn, Mn). Other objectives include 
                development of a  web/mobile app to aid the farmer before initiating the cultivation process.</Typography> 
                </TimelineBody>
                </TimelineItem>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none">
                    <Typography variant="h5" color="blue-gray" className="">
                    About Anna University
                    </Typography>
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                <div className='flex gap-2 p-5 h-80 mb-4 overflow-hidden'>
                    <div className='w-1/2 h-fit'>
                        <img src={AUImage1} className='h-fill w-fill'/>
                    </div>
                    <div className='w-1/2 h-fit'>
                        <img src={AUImage2} className='h-fill w-fill'/>
                    </div>
                </div>
                <Typography className='text-justify px-2'>
                {/* The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona. */}
                &nbsp;&nbsp;&nbsp;&nbsp;Anna University, established in 1978 in Chennai, has emerged as a leading educational institution, rooted in a rich history of integration and evolution. Born as a unitary university, it amalgamated four prestigious technical institutions—College of Engineering, Alagappa College of Technology, Madras Institute of Technology, and School of Architecture & Planning. The university's expansive footprint spans multiple campuses, including the main campus, Madras Institute of Technology, and Taramani, collectively serving diverse academic needs. Over the years, Anna University transitioned between unitary and affiliating models, striving for consistent engineering education quality across Tamil Nadu. Its extensive network encompasses 4 University Department Campuses, 13 Constituent Colleges, 3 Regional Campuses, and 593 Affiliated Colleges.

The university's objectives are multifaceted, ranging from elevating engineering education standards and fostering ethical practices to contributing significantly to technological advancements and societal development. With a global vision, Anna University aspires to be a beacon of excellence, producing professionals with technical expertise, ethical values, and leadership qualities. The mission extends beyond academics, aiming to equip students with intellectual depth, introduce high-quality academic and research programs, and forge global partnerships. Academic offerings are robust, including 29 UG and 90 PG programs, catering to a substantial student population and boasting over 14,000 Ph.D. scholars.

Anna University's accolades are impressive, recognized as a "University with Potential for Excellence" by UGC, securing notable positions in QS and NIRF rankings, and obtaining NAAC accreditation. The university's commitment to research is evident through groundbreaking initiatives, such as the development of ANUSAT—the first satellite designed, developed, and operated by an Indian university. Collaborations with foreign universities and industries, along with significant achievements in patents and publications, further underscore Anna University's position as a hub of academic and research prominence.
               
                </Typography>
                </TimelineBody>
                </TimelineItem>

                <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none">
                    <Typography variant="h5" color="blue-gray" className="">
                    About Centre for Internet of Things (CIot)
                    </Typography>
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                <div className='flex gap-2 p-5 h-80 mb-4 overflow-hidden'>
                    <div className='w-1/2 h-fit'>
                        <img src={Ciot1} className='h-fill w-fill'/>
                    </div>
                    <div className='w-1/2 h-fit'>
                    <img src={Ciot2} className='h-fill w-fill'/>
                    {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className='h-fill w-fill overflow-hidden'>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        className='h-fill w-fill'
                        />
                        <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </MapContainer> */}
                    </div>
                </div>
                <Typography className='text-justify px-2'>
                {/* The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona. */}
                &nbsp;&nbsp;&nbsp;&nbsp;The Centre for Internet of Things (CIoT) aims to promote the Internet of Things (IoT) based ecosystem that can open up numerous avenues in terms of knowledge enhancement, employability, entrepreneurship, institute-industry collaboration, indigenous product development and global recognition. The centre has been officially approved by the syndicate of Anna University with full fledged autonomous status on 28th February 2022. 
                The centre has commenced its functioning from 27th of April 2022. The major thrust areas include agriculture, smart cities, smart campus, healthcare, animal husbandry, fisheries, electric vehicles, industrial IoT, E-learning etc. The Centre for Internet of Things (CIoT) is located at Madras Institute of Technology Campus, Chrompet, Chennai - 600044.</Typography>
                </TimelineBody>
                </TimelineItem>
                
                
            </Timeline>
            </div>  
            </CardBody>  
        </Card>
        </div>
        <Footer />
    </>
    
  )
}

export default AboutUs
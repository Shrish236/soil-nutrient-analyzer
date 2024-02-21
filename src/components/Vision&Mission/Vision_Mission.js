import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import AUImage1 from '../../assets/AnnaUniversity-Front.jpg'
import AUImage2 from '../../assets/01.jpg'
import CIotlogo from '../../assets/WhatsApp Image 2024-02-18 at 2.14.31 PM (1).png'
import aulogoURL from '../../assets/au-logo.png'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom'
function Vision_Mission() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='w-full h-full p-5 py-5 flex gap-5 justify-center  bg-mvbg bg-repeat bg-center'>
        <div className='bg-logo bg-no-repeat bg-center w-1/2'>
        <Card className="">
            {/* <CardHeader color="blue-gray" className="relative h-fill w-fill">
                <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                />
            </CardHeader> */}
            
            <CardBody>
            <div className='flex justify-between self-center align-middle p-2 mb-2'>
                <div>
                    <img src={aulogoURL} alt='logo' className='h-8 w-8'/>
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2 self-center">
                Our Vision
                </Typography>
                <div>
                    <img src={CIotlogo} alt='logo' className='h-8 w-8'/>
                </div>
                </div>
                <Typography className='text-justify px-4 p-2'>
                {/* The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona. */}
                <ul className='list-disc'>
                  <li>
                    <span>
                    The vision of Anna University is to be a world class institution by producing
                    professionals with high technical knowledge, professional skills and ethical values,
                    and remain as a preferred partner to the industry and community for their economic
                    and social development through excellence in teaching, research and consultancy.
                    Anna University shall be recognized as a point of reference, a catalyst, a facilitator, a
                    trend setter and a leader in technical education.
                    </span>
                  </li>
                  <li>
                  <span>The CloT perseveres in becoming a Centre of Excellence in IoT for carrying out cutting edge interdisciplinary research in lot across all disciplines, offering consultancy and imparting high quality training with international reputation to the students, researchers, faculties and industrial professionals.</span>
                  </li>
                  <li>
                  <span>It strives to become a preferred partner by the industry and community. for providing engineering solutions in the area of loT.</span>
                  </li>
                </ul>
                </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
                <Link to="https://www.annauniv.edu/">
                <Button>Read More</Button>
                </Link>
            </CardFooter> */}
            </Card>
            </div>
            <div className='bg-logo bg-no-repeat bg-center w-1/2'>
            <Card className="">
            {/* <CardHeader color="blue-gray" className="relative h-fill w-fill">
                <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                />
            </CardHeader> */}
            <CardBody>
                <div className='flex justify-between self-center align-middle p-2 mb-2'>
                <div>
                    <img src={aulogoURL} alt='logo' className='h-8 w-8'/>
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2 self-center">
                Our Mission
                </Typography>
                <div>
                    <img src={CIotlogo} alt='logo' className='h-8 w-8'/>
                </div>
                </div>
                <Typography className='text-justify p-2 px-4'>
                {/* The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona. */}
                <ul className='list-disc'>
                  <li>
                    <span>
                    Anna University's mission is multifaceted, aiming to contribute to educational, economic, and social development. 
                    </span>
                  </li>
                  {/* <li>
                    <span>
                    This includes nurturing intellectually and technically equipped students with defined knowledge, skills, and ethics, fostering creativity, inspiration, and citizenship. 
                    </span>
                  </li> */}
                  <li>
                    <span>
                    The university is dedicated to introducing high-quality academic and research programs, extending into cutting-edge technologies and ensuring a supportive campus climate with dynamic leadership. 
                    </span>
                  </li>
                  <li>
                    <span>
                    The CloT shall contribute to the educational, economic and social development by carrying out R & D Projects in the cutting-edge area of IoT and come up with reputed publications and patentable ideas.
                    </span>
                  </li>
                  <li>
                    <span>
                    Engage in consultancy work in the area of IoT to cater to the needs of industries
                    </span>
                  </li>
                  <li>
                    <span>
                      Provide a strong foundation in IoT through training programs offered to the students, researchers, faculties and industrial professionals.
                    </span>
                  </li>
                  <li>
                    <span>
                    Transfer IoT technology and its applications to government departments and various users through pilot projects/operational projects
                    </span>
                  </li>
                </ul>
               </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
                <Link to="https://www.annauniv.edu/">
                <Button>Read More</Button>
                </Link>
            </CardFooter> */}
            </Card>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Vision_Mission
import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Header/Navbar'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";
import Footer from '../Footer/Footer';
import { Carousel } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import st1 from '../../assets/IMG_2991.JPG'
import st2 from '../../assets/services-soil-testing-2.jpeg'
import sd1 from '../../assets/services-soil-database-1.png'
import sd2 from '../../assets/services-soil-database-2.png'
import ft1 from '../../assets/services-farmer-1.jpeg'
import ft2 from '../../assets/services-farmer-2.JPG'
import img7 from '../../assets/img7.jpeg'
import img8 from '../../assets/img8.jpeg'
import img9 from '../../assets/img9.jpeg'
import { tooltip } from 'leaflet';

const chartConfig = {
    type: "pie",
    width: 280,
    height: 280,
    series: [100, 100, 100],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        values:{
            show: false
        }
      },
      title: {
        show: "Our services",
      },
      labels:["Soil Database", "Farmer Soil Testing", "Soil Testing at Laboratory"],
      dataLabels: {
        enabled: false,
      },
      colors: ["#25BF31", "#ff8f00", "#1B79E3"],
      legend: {
        show: false,
      },
    },
  };
   
function Services() {
    const [activeStep, setActiveStep] = React.useState(2);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
   
    // const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    // const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <>
        <Header />
        <Navbar />
        <div className='flex flex-col  bg-soiltestingbg bg-repeat bg-center items-center justify-center'>
           
           <div className='w-full p-5 px-24'> 
            <Card className=''><CardBody className='flex flex-col bg-purple-50 rounded-xl'>
            <Typography variant="h4" color="black" className="mb-4 self-center text-center">
                            Our Services
                        </Typography>
            <div className='w-full flex flex-row justify-around'>
                <Card className=' bg-blue-300 content-center justify-center items-center'>
                    <CardBody>
                        <Typography variant="h6" color="black" className="mb-2 self-center text-center">
                            Soil Testing at Laboratory
                        </Typography>
                        <Typography className='font-normal text-gray-900'>
                            Test your soil to learn about soil health and nutrient information
                        </Typography>
                        <div className='p-2 mt-2'>
                            <center>
                        <Link to="/soil-testing">
                        <Button className=''>Soil Testing</Button>
                        </Link>
                        </center>
                        </div>
                    </CardBody> 
                    </Card>
                    <Card className='bg-green-300 content-center justify-center items-center'>
                    <CardBody>
                        <Typography variant="h6" color="black" className="mb-2 self-center text-center">
                            System Soil Database
                        </Typography>
                        <Typography className='font-normal text-center text-gray-900'>
                            Access our soil database for research and educational purposes
                        </Typography>
                        <div className='p-2 mt-2'>
                            <center>
                        <Link to="/signup">
                        <Button className=''>Enquiry</Button>
                        </Link>
                        </center>
                        </div>
                    </CardBody> 
                    </Card>
                </div>
                <div className='flex justify-center'>
                <Chart {...chartConfig} />
                </div>
            <div className='flex pt-3 justify-center'>
                <Card className='w-fill text-center bg-orange-300'>
                <CardBody>
                    <Typography variant="h6" color="black" className="mb-2 self-center text-center">
                        Farmer Soil Testing
                    </Typography>
                    <Typography className='font-normal text-center text-gray-900'>
                        On-spot soil testing for farmers and soil nutrient analysis in-person
                    </Typography>
                    <div className='p-2 mt-2'>
                        <center>
                    <Link to="/farmer-registration">
                    <Button className=''>Farmer Signup</Button>
                    </Link>
                    </center>
                    </div>
                </CardBody>
                </Card>
            </div>
            </CardBody></Card>
        </div>

        <div className='w-full  py-2 px-5'>
            <center>
                {/* <Card className='w-3/12 my-2 '>
                    <CardBody>
                        <Typography variant="h6" color="blue-gray" className="mb-2 self-center text-center">
                            Soil Testing Gallery
                        </Typography>
                    </CardBody>
                </Card> */}
            <Card className='w-full bg-blue-200'>
            <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2 ml-5 self-center text-left">
                Soil Testing at Laboratory
            </Typography>
            <Typography className='font-normal text-justify py-5 text-black'>
            &nbsp; &nbsp; &nbsp; Soil Tests are provided to consumers who want to know their soil nutrition and other information like soil pH, moisture etc.
            The tests are conducted at the Soil Testing R&D Laboratory at CIoT, MIT. Consumers first need to submit an enquiry in the website or mobile app upon which
            the laboratory allocates a time slot for soil sample submission. Once test results are ready, the consumers are prompted to collect their results at the 
            laboratory. Further the results can also be viewed through the website and mobile application.
            </Typography>
            <div className='flex w-full gap-10'>
            <div className=' w-1/2 h-96 overflow-clip'>
                    <img src={st2} className=''/>
                    </div>
                    <div className='w-1/2 h-96 overflow-clip'>
                    <img src={st1} className=''/>
                    </div>
            </div>
            </CardBody>
            </Card>
            </center>
            </div>
            <div className='w-full  py-2 px-5'>
            <center>
                {/* <Card className='w-3/12 my-2 '>
                    <CardBody>
                        <Typography variant="h6" color="blue-gray" className="mb-2 self-center text-center">
                            Soil Testing Gallery
                        </Typography>
                    </CardBody>
                </Card> */}
            <Card className='w-full bg-green-200'>
            <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2 ml-5 self-center text-left">
                System Soil Database
            </Typography>
            <Typography className='font-normal text-justify py-5 text-black'>
            &nbsp; &nbsp; &nbsp; An intensive and accurate testing on soil samples has helped us to collect a detailed database 
            of soil which can be used for various research and educational purposes. Soil samples received from all over Tamil Nadu were
            used to construct this System Soil Database.  In the soil testing lab, the LIBS based analysis were carried out. 
            Results in soil data based with following parameters are shown in the table below. For further information, contact us or make an enquiry in the
            website or mobile application.
            </Typography>
            <div className='flex w-full gap-10'>
            <div className='w-1/2 h-96 overflow-clip'>
                    <img src={sd1} className=''/>
                    </div>
                    <div className='w-1/2 h-96 overflow-clip'>
                    <img src={sd2} className=''/>
                    </div>
            </div>
            </CardBody>
            </Card>
            </center>
            </div>
            <div className='w-full  py-2 px-5'>
            <center>
                {/* <Card className='w-3/12 my-2 '>
                    <CardBody>
                        <Typography variant="h6" color="blue-gray" className="mb-2 self-center text-center">
                            Soil Testing Gallery
                        </Typography>
                    </CardBody>
                </Card> */}
            <Card className='w-full bg-orange-200'>
            <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2 ml-5 self-center text-left">
                Farmer Soil Testing
            </Typography>
            <Typography className='font-normal text-justify py-5 text-black'>
            &nbsp; &nbsp; &nbsp; The Soil Testing Research & Development Team frequently visits farms and tests soil in person 
            providing soil heath information to farmers, and adding data to the system soil database as well. The tests are conducted at the site itself
            and tests results are generated immediately. The Farmer Soil Testing service benefits multiple farmers who are unable to visit the laboratory to test 
            their soil and obtain nutrient information.
            </Typography>
            <div className='flex w-full gap-10'>
            <div className='w-1/2 h-96 overflow-clip'>
                    <img src={ft1} className=''/>
                    </div>
                    <div className='w-1/2 h-96 overflow-clip'>
                    <img src={ft2} className=''/>
                    </div>
            </div>
            </CardBody>
            </Card>
            </center>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Services
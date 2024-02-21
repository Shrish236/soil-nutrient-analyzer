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
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'
import img6 from '../../assets/img6.jpeg'
import img7 from '../../assets/img7.jpeg'
import img8 from '../../assets/img8.jpeg'
import img9 from '../../assets/img9.jpeg'
function SoilTesting() {
    const [activeStep, setActiveStep] = React.useState(2);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
   
    // const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    // const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <>
        <Header />
        <Navbar />
        <div className='w-full h-full p-5 py-5 flex flex-wrap gap-5  bg-soiltestingbg bg-repeat bg-center items-center justify-center'>
            <div className='w-3/12 h-2/3'>
                <Card className='w-full h-full bg-lime-300 flex flex-col content-center justify-center items-center'>
                <CardBody>
                    <Typography variant="h6" color="blue-gray" className="mb-2 self-center text-center">
                        Want to discuss your soil health?
                    </Typography>
                    <Typography className='font-normal text-center'>
                        Consult us to get feedback on your soil health and more!
                    </Typography>
                    <div className='p-2 mt-2'>
                        <center>
                    <Link to="/contact-us">
                    <Button className=''>Contact us</Button>
                    </Link>
                    </center>
                    </div>
                </CardBody> 
                </Card>
            </div>
            <div className='flex w-5/12 h-full content-center'>
                <Card className="w-full text-center items-center ">
                    
                    <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 self-center">
                        Get your soil tested in just 3 steps!
                    </Typography>
                    <div className='w-full py-6 justify-items-center self-center justify-self-center items-center'>
                        <Stepper
                            activeStep={activeStep}
                            isLastStep={(value) => setIsLastStep(value)}
                            isFirstStep={(value) => setIsFirstStep(value)}
                        >
                            <Step onClick={() => setActiveStep(0)}>
                            <UserIcon className="h-5 w-5" />
                            <div className="absolute -bottom-[4.5rem] w-max text-center overflow-clip">
                                <Typography
                                variant="h6"
                                color={activeStep === 0 ? "blue-gray" : "gray"}
                                >
                                Step 1
                                </Typography>
                                <Typography
                                color={activeStep === 0 ? "blue-gray" : "gray"}
                                className="font-normal text-center"
                                >
                                Create account
                                </Typography>
                            </div>
                            </Step>
                            <Step onClick={() => setActiveStep(1)}>
                            <CogIcon className="h-5 w-5" />
                            <div className="absolute -bottom-[4.5rem] w-max text-center">
                                <Typography
                                variant="h6"
                                color={activeStep === 1 ? "blue-gray" : "gray"}
                                >
                                Step 2
                                </Typography>
                                <Typography
                                color={activeStep === 1 ? "blue-gray" : "gray"}
                                className="font-normal"
                                >
                                Make an enquiry
                                </Typography>
                            </div>
                            </Step>
                            <Step onClick={() => setActiveStep(2)}>
                            <BuildingLibraryIcon className="h-5 w-5" />
                            <div className="absolute -bottom-[4.5rem] w-max text-center">
                                <Typography
                                variant="h6"
                                color={activeStep === 2 ? "blue-gray" : "gray"}
                                >
                                Step 3
                                </Typography>
                                <Typography
                                color={activeStep === 2 ? "blue-gray" : "gray"}
                                className="font-normal"
                                >
                                View soil card!
                                </Typography>
                            </div>
                            </Step>
                        </Stepper>
                        <div className="mt-12 flex justify-between">
                            {/* <Button onClick={handlePrev} disabled={isFirstStep}>
                            Prev
                            </Button>
                            <Button onClick={handleNext} disabled={isLastStep}>
                            Next
                            </Button> */}
                        </div>
                    </div>
                    </CardBody>
                </Card>
            </div>
            <div className='w-3/12 h-2/3'>
                <Card className='w-full text-center bg-teal-200'>
                <CardBody>
                    <Typography variant="h6" color="blue-gray" className="mb-2 self-center text-center">
                        Make an enquiry today!
                    </Typography>
                    <Typography className='font-normal text-center text-gray-900'>
                        Submit an enquiry to get your soil tested and obtain soil health card!
                    </Typography>
                    <div className='p-2 mt-2'>
                        <center>
                    <Link to="/enquiryform">
                    <Button className=''>Enquiry</Button>
                    </Link>
                    </center>
                    </div>
                </CardBody>
                </Card>
            </div>
            <div className='w-fit max-h-192 content'>

            <center>
                {/* <Card className='w-3/12 my-2 '>
                    <CardBody>
                        <Typography variant="h6" color="blue-gray" className="mb-2 self-center text-center">
                            Soil Testing Gallery
                        </Typography>
                    </CardBody>
                </Card> */}
            <Card className='w-5/6 p-5 bg-orange-100'>
            <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2 self-center text-center">
                Soil Testing Practices
            </Typography>
            <Typography className='font-normal text-justify py-5'>
            &nbsp; &nbsp; &nbsp; The evolution of soil testing methods over the past 120 years reflects the continuous effort to enhance 
            efficiency and precision in agriculture. Elemental analysis, a key component of soil testing, 
            has undergone a transformation with the advent of compact portable spectroscopy instruments, 
            notably x-ray fluorescence (XRF) and laser-induced breakdown spectroscopy (LIBS).
            </Typography>
            <Typography className='font-normal text-justify p-3'>
                <ul className='list-disc'>
                    <li>
                        <span>
                            <span className='font-bold'>Historical Perspective:</span> Soil testing for elemental analysis has been a standard 
                            practice in agriculture for over a century. Traditional methods involved collecting random 
                            soil samples from representative areas and sending them to laboratories for analysis, 
                            utilizing techniques such as chromatography, mass spectrometry, and wet chemistry.
                        </span>
                    </li>
                    <li>
                        <span>
                            <span className='font-bold'>Challenges of Traditional Approaches:</span> While effective, the conventional approach was 
                            time-consuming and costly. It often led to delays in obtaining results, hampering timely 
                            decision-making for farmers and agronomists.

                        </span>
                    </li>
                    <li>
                        <span>
                            <span className='font-bold'>Advancements in Portable Spectroscopy:</span>  The development of compact portable spectroscopy 
                            instruments, specifically XRF and LIBS, has revolutionized soil testing. These technologies enable on-site elemental analysis, 
                            reducing the time and cost associated with laboratory testing.
                        </span>
                    </li>
                    <li>
                        <span>
                            <span className='font-bold'>Time and Cost Efficiency:</span> Portable spectroscopy allows for real-time analysis in the field, 
                            eliminating the need for sample transportation and laboratory processing delays. This not only accelerates decision-making 
                            but also cuts down on overall testing costs.
                        </span>
                    </li>
                    
                </ul>
            </Typography>
            <Carousel transition={{ duration: 2 }} className="rounded-xl w-2/3 h-96 self-center my-4">
                <img
                    src={img7}
                    alt="Soil Testing 1"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={img8}
                    alt="Soil Testing 2"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={img9}
                    alt="Soil Testing 3"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={img4}
                    alt="Soil Testing 4"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={img5}
                    alt="Soil Testing 5"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={img6}
                    alt="Soil Testing 6"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={img1}
                    alt="Soil Testing 7"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={img2}
                    alt="Soil Testing 8"
                    className="w-fill h-96 object-cover"
                />
                <img
                    src={img3}
                    alt="Soil Testing 9"
                    className="w-fill h-96 object-cover"
                />
            </Carousel>
            <Typography className='font-normal italic text-sm'>
                Soil Testing at the laboratory
            </Typography>
            <Typography className='font-normal text-justify p-3 pt-5'>
                <ul className='list-disc'>
                    <li>
                        <span>
                            <span className='font-bold'>Precision Agriculture Benefits:</span> Portable spectroscopy facilitates smaller-scale 
                            localized surveys, supporting the principles of precision agriculture. Farmers can analyze specific areas of their fields, 
                            enabling targeted interventions such as precise fertilizer application and irrigation management.
                        </span>
                    </li>
                    <li>
                        <span>
                            <span className='font-bold'>Portable LIBS Superiority:</span> Among the portable spectroscopy methods, LIBS is often considered superior for soil analysis. 
                            Unlike XRF, LIBS can measure lighter elements (C, N, Na, Mg, Si, P, and K), which are crucial for assessing soil health and viability.
                        </span>
                    </li>
                    <li>
                        <span>
                            <span className='font-bold'>Importance of Lighter Elements:</span>  Elements like nitrogen (N), phosphorus (P), and potassium (K) are essential nutrients for plant growth.
                             Accurate measurement of these elements, often referred to as NPK testing, is vital for understanding soil fertility and formulating appropriate fertilizer strategies.
                        </span>
                    </li>
                    <li>
                        <span>
                            <span className='font-bold'>Enhanced Decision-Making:</span> Real-time, on-site elemental analysis empowers farmers to make informed decisions promptly. 
                            This is particularly important for adjusting nutrient levels, optimizing crop management practices, and ensuring overall soil health
                        </span>
                    </li>
                    
                </ul>
            </Typography>
            <Typography className='font-normal text-justify py-5'>
            &nbsp;&nbsp;&nbsp;&nbsp;In conclusion, the integration of compact portable spectroscopy, especially LIBS, into soil testing practices marks a significant advancement in agriculture. 
            The shift from traditional laboratory-based methods to on-site analysis not only saves time and costs but also aligns with the principles of precision agriculture, 
            contributing to improved crop yield and sustainable farming practices.
            </Typography>
            </CardBody>
            </Card>
            </center>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default SoilTesting
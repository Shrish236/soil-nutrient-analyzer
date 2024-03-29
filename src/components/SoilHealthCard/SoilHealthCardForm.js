import React from 'react'
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function SoilHealthCardForm() {
    const [sampleNumber, setSampleNumber] = useState('')
    
    const handleChange = (data) => {
        setSampleNumber(data.target.value)
        // console.log(sampleNumber)
    }
  return (
    <>
        <Header />
        <Navbar />
        <center>
            <div className='w-fill h-fill py-10 bg-soilformbg bg-no-repeat bg-center'>
            <div className='container items-center bg-cyan-100 w-5/12 mt-5 p-10 rounded-2xl bg-logo bg-no-repeat bg-center mb-10'>
            <Typography variant="h3" color="blue-gray" className='text-2xl self-center my-5'>
                        Soil Health Card
            </Typography>
                <Card color="transparent" shadow={false} className=''>
                    <Typography color="gray" className="mt-1 font-normal text-md self-center">
                        Generate soil health card by entering your soil sample number
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-200 min-w-80 self-center">
                        <div className="mb-1 flex flex-col gap-4">
                        <Typography variant="h7" color="blue-gray" className="-mb-3 font-semibold self-center">
                            Enter soil sample number
                        </Typography>
                        <Input
                            size="lg"
                            maxLength={20}
                            placeholder="00000000000000"
                            className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[50px] w-fill h-fill"
                            value={sampleNumber}
                            onChange={handleChange}
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        </div>
                        <Link to={`/soilcard/${sampleNumber}`}>
                            <Button className="mt-6 w-2/6 bg-green-800" fullWidth>
                                Submit
                            </Button>
                        </Link>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            No soil health card number? Click here to make an enquiry {"->"}{" "}
                            <Link to="/enquiryform" className="font-medium text-gray-900 underline">
                                Enquiry
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>
            </div>
        </center>
        <Footer />
    </>
  )
}

export default SoilHealthCardForm
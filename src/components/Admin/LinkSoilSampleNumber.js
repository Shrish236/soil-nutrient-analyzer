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
import axios from 'axios';
import { useState } from 'react';

function LinkSoilSampleNumber() {
    const [sampleNumber, setSampleNumber] = useState('')
    const [enquiryNumber, setEnquiryNumber] = useState('')
    const handleChange1 = (data) => {
        setSampleNumber(data.target.value)
        // console.log(sampleNumber)
    }
    const handleChange2 = (data) => {
        setEnquiryNumber(data.target.value)
        // console.log(sampleNumber)
    }
    const [verified, setVerified] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')
    function linkNumber(){
        axios.post('http://localhost:8000/api/enquiries/update/', { 
            enquiry_no : enquiryNumber,
            soil_sample_no : sampleNumber
        })
        .then(response => {
          const responseData = response.data;
          if(responseData['Success']!=null){
            setVerified(1)
            alert('Soil sample number has been linked with enquiry number!')
            setSampleNumber('')
            setEnquiryNumber('')
          }
        })
        .catch(error => {
          console.log(error)
          setVerified(0)
          setErrorMessage(error.response.data['error'])
        })
    }
  return (
    <>
        <Header />
        <Navbar />
        <center>
        <div className='w-fill h-fill py-10 bg-soilnolinkformbg bg-no-repeat bg-center'>
            <div className='container items-center bg-cyan-100 w-5/12 mt-5 p-10 rounded-2xl bg-logo bg-no-repeat bg-center mb-10'>
            
                <Card color="transparent" shadow={false} className=''>
                    <Typography color="gray" className="mt-1 font-normal text-md self-center">
                        Link Enquiry Number with the Soil Sample Number here
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-200 min-w-80 self-center">
                    {(() => {
                            if(verified === 0){
                                return (
                                    <div className='text-end font-semibold text-sm text-red-700'>
                                        *{errorMessage}
                                    </div>
                                )
                            }
                        })()}
                        <div className="mb-1 flex flex-col gap-4">
                        <Typography variant="h7" color="blue-gray" className="-mb-3 font-semibold self-center">
                            Enter enquiry number
                        </Typography>
                        <Input
                            size="lg"
                            maxLength={20}
                            placeholder="00000000000000"
                            className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[50px] w-fill h-fill"
                            value={enquiryNumber}
                            onChange={handleChange2}
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h7" color="blue-gray" className="-mb-3 font-semibold self-center">
                            Enter soil sample number
                        </Typography>
                        <Input
                            size="lg"
                            maxLength={20}
                            placeholder="00000000000000"
                            className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[50px] w-fill h-fill"
                            value={sampleNumber}
                            onChange={handleChange1}
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        </div>

                            <Button className="mt-6 w-2/6 bg-green-800" fullWidth
                            onClick={linkNumber}>
                                Submit
                            </Button>

                    </form>
                </Card>
            </div>
        </div>
        </center>
        <Footer />
    </>
  )
}

export default LinkSoilSampleNumber
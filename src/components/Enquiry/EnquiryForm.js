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
  import { Link, useNavigate } from 'react-router-dom';
  import { useState } from 'react';
  import axios from 'axios';
function EnquiryForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [district, setDistrict] = useState('')
    const [taluk, setTaluk] = useState('')
    const [mobile, setMobile] = useState('')
    const [village, setVillage] = useState('')
    const [surveyNo, setSurveyNo] = useState('')
    const [isValid, setIsValid] = useState(false)
    function handleSubmit(){
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[0-9]{10}$/;
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

        // Mobile validation
        if (!mobileRegex.test(mobile)) {
            alert('Enter correct Mobile Number')
            setIsValid(false)
        }
        else{
            setIsValid(true)
        }

        if(isValid){
            axios.post('http://localhost:8000/api/enquiries/', { 
                name: name,
                mobile: mobile,
                district: district,
                taluk: taluk,
                village: village,
                survey_no: surveyNo
            })
            .then(response => {
            const responseData = response.data;
            if(responseData['name']!=null){
                alert('Enquiry submitted!')
                navigate('/profile')
                return true
            }
            })
            .catch(error => {
                console.log(error)
            })
            return true
        }
        return false
    }
  return (
    <>
    <Header />
    <Navbar />
    {/* <img src={logoURL} className="absolute justify-center mt-20 h-52 w-48" alt='logo'/> */}
    <center>
    <div className='w-fill h-fill py-10 bg-enquiryformbg bg-no-repeat bg-center'>
    <div className='container items-center bg-cyan-100 w-4/12 mt-10 p-10 rounded-2xl bg-logo bg-no-repeat bg-center mb-10'>

        <Card color="transparent" shadow={false} className=''>
            <Typography variant="h3" color="blue-gray" className='text-2xl self-center'>
                Enquiry Form
            </Typography>
            <Typography color="gray" className="mt-1 font-normal self-center">
                Make an enquiry to get your soil tested and obtain soil health card!
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-200 min-w-80 self-center">
                <div className="mb-1 flex flex-col gap-4">
                <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                    Name:
                </Typography>
                <Input
                    size="lg"
                    maxLength={50}
                    placeholder="Ashok Kumar"
                    className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                    value={name}
                    onChange={(data) => {setName(data.target.value)}}
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                    Mobile:
                </Typography>
                <Input
                    size="lg"
                    maxLength={10}
                    placeholder="9999999999"
                    className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                    value={mobile}
                    onChange={(data) => {setMobile(data.target.value)}}
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
                <Typography color="red" className="mt-1 font-normal">
                    *Refer Patta document of the land to enter the following details
                </Typography>
                <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                    District:
                </Typography>
                <Input
                    size="lg"
                    maxLength={50}
                    placeholder="Eg: Chennai"
                    className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[50px] w-fill h-fill"
                    value={district}
                    onChange={(data) => {setDistrict(data.target.value)}}
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                    Taluk:
                </Typography>
                <Input
                    maxLength={50}
                    size="lg"
                    placeholder="Eg: Maduravoyal"
                    className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                    value={taluk}
                    onChange={(data) => {setTaluk(data.target.value)}}
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                    Village/Town:
                </Typography>
                <Input
                    maxLength={50}
                    size="lg"
                    placeholder="Eg: Porur"
                    className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                    value={village}
                    onChange={(data) => {setVillage(data.target.value)}}
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                    Survey No:
                </Typography>
                <Input
                    maxLength={50}
                    size="lg"
                    placeholder="Eg: 224/2A (Survey field/ Sub division)"
                    className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                    value={surveyNo}
                    onChange={(data) => {setSurveyNo(data.target.value)}}
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
                </div>
                <Button className="mt-6" fullWidth onClick={handleSubmit}>
                Submit
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                Already made an enquiry?{" "}
                <Link to="/profile" className="font-medium text-gray-900 underline">
                    Check status
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

export default EnquiryForm
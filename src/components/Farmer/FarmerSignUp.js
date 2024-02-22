import React, { useState } from 'react'
import {
    Card,
    Input,
    Button,
    Typography,
    Select, Option,
  } from "@material-tailwind/react";
import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function FarmerSignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [soilType, setSoilType] = useState('')
    const [district, setDistrict] = useState('')
    const [taluk, setTaluk] = useState('')
    const [village, setVillage] = useState('')
    const [surveyNo, setSurveyNo] = useState('')
    const [isValid, setIsValid] = useState(false)
    function handleSubmit(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[0-9]{10}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

        // Email validation
        if (!emailRegex.test(email)) {
            alert('Enter correct email address')
            setIsValid(false)
        }
        // Mobile validation
        else if (!mobileRegex.test(mobile)) {
            alert('Enter correct Mobile Number')
            setIsValid(false)
        }

        // Password validation
        else if (!passwordRegex.test(password)) {
            alert('Please enter one uppercase letter, one lowercase letter, include a special character and make sure the password is atleast 8 characters long!')
            setIsValid(false)
        }
        else{
            setIsValid(true)
        }

        if(isValid){
            axios.post('http://localhost:8000/api/users/new/', { 
                email : email,
                name: name,
                mobile: mobile,
                address: address,
                password : password
            })
            .then(response => {
            const responseData = response.data;
            if(responseData['name']!=null){
                alert('Account created successfully! Login now ->')
                navigate('/login')
            }
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
   return (
    <>
        <Header />
        <Navbar />
        {/* <img src={logoURL} className="absolute justify-center mt-20 h-52 w-48" alt='logo'/> */}
        <center>
        <div className='w-fill h-fill py-10 bg-farmerregbg bg-no-repeat bg-center'>
        <div className='container items-center bg-cyan-100 w-6/12 mt-10 py-10 rounded-2xl bg-logo bg-no-repeat bg-center mb-10'>

            <Card color="transparent" shadow={false} className=''>
                <Typography variant="h3" color="blue-gray" className='text-2xl self-center'>
                    Farmer Registration
                </Typography>
                <Typography color="gray" className="mt-1 font-normal self-center">
                    Nice to meet you! Enter your details to register.
                </Typography>
                
                    
                <form className="mt-8 mb-2 w-5/6 self-center">
                <div className='flex flex-wrap justify-center gap-20'>
                    <div className='w-auto'>
                    <div className="mb-1 flex flex-col gap-4">
                    <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                        Your Name
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
                        Your Address
                    </Typography>
                    <Input
                        size="lg"
                        maxLength={100}
                        placeholder="House No, Street, Locality, District, Pincode"
                        className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                        value={address}
                        onChange={(data) => {setAddress(data.target.value)}}
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                        Your Aadhar
                    </Typography>
                    <Input
                        size="lg"
                        maxLength={50}
                        placeholder="name@mail.com"
                        className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[50px] w-fill h-fill"
                        value={email}
                        onChange={(data) => {setEmail(data.target.value)}}
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                        Your Mobile
                    </Typography>
                    <Input
                        size="lg"
                        maxLength={10}
                        placeholder="1234567891"
                        className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[50px] w-fill h-fill"
                        value={mobile}
                        onChange={(data) => {setMobile(data.target.value)}}
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                        Password
                    </Typography>
                    <Input
                        type="password"
                        maxLength={50}
                        size="lg"
                        placeholder="********"
                        className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                        value={password}
                        onChange={(data) => {setPassword(data.target.value)}}
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                    </div>
                    </div>
                    <div className='w-auto'>
                    <div className="mb-1 flex flex-col gap-4">
                    <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                        Type of Soil
                    </Typography>
                    <Select variant="outlined" className="bg-gray-100" label="Soil Type" size="md" color='black' onChange={(val) => {
                        setSoilType(val)
                    }} value={soilType}>
                        <Option>Sandy - Loamy</Option>
                        <Option>Red Soil</Option>
                    </Select>
                    <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                        Previous Crop
                    </Typography>
                    <Input
                        size="lg"
                        maxLength={100}
                        placeholder="House No, Street, Locality, District, Pincode"
                        className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                        value={address}
                        onChange={(data) => {setAddress(data.target.value)}}
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                        Planned Crop
                    </Typography>
                    <Input
                        size="lg"
                        maxLength={50}
                        placeholder="name@mail.com"
                        className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[50px] w-fill h-fill"
                        value={email}
                        onChange={(data) => {setEmail(data.target.value)}}
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                        Land Area (Hectares)
                    </Typography>
                    <Input
                        size="lg"
                        maxLength={10}
                        placeholder="1234567891"
                        className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[50px] w-fill h-fill"
                        value={mobile}
                        onChange={(data) => {setMobile(data.target.value)}}
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                        Water Body Used
                    </Typography>
                    <Input
                        type="password"
                        maxLength={50}
                        size="lg"
                        placeholder="********"
                        className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                        value={password}
                        onChange={(data) => {setPassword(data.target.value)}}
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />

                    </div>
                    </div>
                    </div>
                    <div className='w-auto'>
                        <div className="mb-1 mt-1 flex flex-col gap-4 w-11/12">
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
                    </div>
                    <Button className="mt-6" fullWidth onClick={()=>{
                        alert("Farmer account created successfully!")
                    }}>
                    Sign up
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                    Already completed farmer registration?{" "}
                    <Link to="/farmer-login" className="font-medium text-gray-900 underline">
                        Log In
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

export default FarmerSignUp
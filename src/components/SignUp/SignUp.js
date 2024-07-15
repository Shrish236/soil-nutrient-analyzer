import React, { useState } from 'react'
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
import axios from 'axios';
function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
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
                alert(error.response.data['email'])
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
        <div className='w-fill h-fill py-10 bg-signupformbg bg-no-repeat bg-center'>
        <div className='container items-center bg-cyan-100 w-4/12 mt-10 p-10 rounded-2xl bg-logo bg-no-repeat bg-center mb-10'>

            <Card color="transparent" shadow={false} className=''>
                <Typography variant="h3" color="blue-gray" className='text-2xl self-center'>
                Enquiry Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal self-center">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-200 min-w-80 self-center">
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
                        Your Email
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
                    <Button className="mt-6" fullWidth onClick={handleSubmit}>
                    Sign up
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <Link to="/login" className="font-medium text-gray-900 underline">
                        Log In
                    </Link>
                    </Typography>
                    <Typography color="gray" className="mt-2 text-center font-normal">
                    Looking for farmer registration?{" "}
                    <Link to="/farmer-registration" className="font-medium text-gray-900 underline">
                        Click Here
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

export default SignUp
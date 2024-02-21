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
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../utils/auth';

function LogIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verified, setVerified] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')
    const win = window.sessionStorage;
    const auth = useAuth();
    function checkUser(){
        axios.post('http://localhost:8000/api/users/', { 
            email : email,
            password : password
        })
        .then(response => {
          const responseData = response.data;
          if(responseData['Success']!=null){
            win.setItem('email', email)
            win.setItem('type', 'user')
            auth.login(email)
            navigate('/profile')
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
        <div className='w-fill h-fill py-10 bg-loginformbg bg-no-repeat bg-center'>
            <div className='container items-center bg-cyan-100 w-4/12 mt-10 p-10 rounded-2xl bg-logo bg-no-repeat bg-center mb-10'>

                <Card color="transparent" shadow={false} className=''>
                    <Typography variant="h3" color="blue-gray" className='text-2xl self-center'>
                        Enquiry Log In
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal text-md self-center">
                        Log in to view your soil heath card!
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-200 min-w-80 self-center">
                        {(() => {
                            if(verified === 0){
                                return (
                                    <div className='text-end font-semibold text-sm text-red-700'>
                                        {errorMessage}
                                    </div>
                                )
                            }
                        })()}
                        <div className="mb-1 flex flex-col gap-4">
                        <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            maxLength={50}
                            placeholder="name@mail.com"
                            className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[50px] w-fill h-fill"
                            value={email}
                            onChange={data => setEmail(data.target.value)}
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
                            onChange={data => setPassword(data.target.value)}
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        </div>

                            <Button className="mt-6" fullWidth onClick={checkUser}>
                                Submit
                            </Button>

                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Click here for farmer login {"->"}{" "}
                            <Link to="/farmer-login" className='underline font-semibold'>Login</Link>   
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

export default LogIn
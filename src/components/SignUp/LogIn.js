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
function LogIn() {
  return (
    <>
        <Header />
        <Navbar />
        <center>
            <div className='container items-center bg-cyan-100 w-4/12 mt-10 p-10 rounded-2xl bg-logo bg-no-repeat bg-center mb-10'>

                <Card color="transparent" shadow={false} className=''>
                    <Typography variant="h3" color="blue-gray" className='text-2xl self-center'>
                        Log In
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal text-md self-center">
                        Log in to view your soil heath card!
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-200 min-w-80 self-center">
                        <div className="mb-1 flex flex-col gap-4">
                        <Typography variant="h6" color="blue-gray" className="-mb-3 self-start">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            maxLength={50}
                            placeholder="name@mail.com"
                            className="bg-white !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[50px] w-fill h-fill"
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
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        </div>
                        <Link to="/profile">
                            <Button className="mt-6" fullWidth>
                                Submit
                            </Button>
                        </Link>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Click here for admin login {"->"}{" "}
                            <a href="#" className="font-medium text-gray-900 underline">
                                Admin
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>
        </center>
        <Footer />
    </>
  )
}

export default LogIn
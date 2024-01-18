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

function EnquiryForm() {
  return (
    <>
    <Header />
    <Navbar />
    {/* <img src={logoURL} className="absolute justify-center mt-20 h-52 w-48" alt='logo'/> */}
    <center>
    <div className='container items-center bg-cyan-100 w-4/12 mt-10 p-10 rounded-2xl bg-logo bg-no-repeat bg-center'>

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
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
                </div>
                <Button className="mt-6" fullWidth>
                Submit
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                Already made an enquiry?{" "}
                <a href="#" className="font-medium text-gray-900 underline">
                    Check status
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

export default EnquiryForm
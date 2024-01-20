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
function SoilHealthCardForm() {
  return (
    <>
        <Header />
        <Navbar />
        <center>
        <Typography variant="h3" color="blue-gray" className='text-2xl self-center mt-10'>
                        Soil Health Card
        </Typography>
            <div className='container items-center bg-cyan-100 w-5/12 mt-5 p-10 rounded-2xl bg-logo bg-no-repeat bg-center mb-10'>
            
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
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        </div>
                        <Button className="mt-6 w-2/6 bg-green-800" fullWidth>
                            Submit
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            No soil health card number? Click here to make an enquiry {"->"}{" "}
                            <a href="#" className="font-medium text-gray-900 underline">
                                Enquiry
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

export default SoilHealthCardForm
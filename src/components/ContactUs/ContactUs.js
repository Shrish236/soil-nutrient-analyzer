import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import CIotlogo from '../../assets/WhatsApp Image 2024-02-18 at 2.14.31 PM (1).png'
import aulogoURL from '../../assets/au-logo.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
function ContactUs() {
    const location = [12.948747, 80.140158];
  return (
    <>
        <Header />
        <Navbar />
        <div className='w-full h-full p-5 py-5 flex flex-wrap gap-5 justify-center  bg-contactusbg bg-repeat bg-center'>
        <div className='bg-logo bg-no-repeat bg-center w-5/12'>
        <Card className="bg-gray-400">
            {/* <CardHeader color="blue-gray" className="relative h-fill w-fill">
                <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                />
            </CardHeader> */}
            
            <CardBody>
                <div classname="flex flex-col justify-center">
                    <Typography variant="h5" color="black" className="mb-2 self-center text-center">
                    Contact Us
                    </Typography>
                    <div className='flex justify-between gap-1'>
                    <div className="my-2 p-2 w-1/2 text-center" style={{
                        border: "1px dashed",
                        borderRadius: 5, 
                        backgroundColor: '#EFCB53',
                        boxShadow: 20
                    }}>
                       <Typography color="blue-gray" className="mb-2 font-bold self-center text-center">
                        Dr. P.T.V.Bhuvaneshwari
                        </Typography>
                        <Typography color="blue-gray" className="mx-2 self-center text-center">
                        Director, CIoT.
                        </Typography>
                        <Typography color="blue-gray" className="mx-2 self-center text-center">
                        9884697694
                        </Typography>
                        <Typography color="blue-gray" className="mx-2 self-center text-center">
                        dir.ciot.au.gmail.com
                        </Typography>  
                    </div>
                    <div className="my-2 p-2 w-1/2" style={{
                        border: "1px dashed",
                        borderRadius: 5, 
                        backgroundColor: '#EFCB53',
                    }}>
                       <Typography color="blue-gray" className="mb-2 font-bold self-center text-center">
                        Dr. S.Meyyappan
                        </Typography>
                        <Typography color="blue-gray" className="mx-2 self-center text-center">
                        Deputy Director, CIoT.
                        </Typography>
                        <Typography color="blue-gray" className="mx-2 self-center text-center">
                        9865682065
                        </Typography>
                        <Typography color="blue-gray" className="mx-2 self-center text-center">
                        ddir.ciot.au.gmail.com
                        </Typography>  
                    </div>
                    </div>
                    <div className="my-2 mb-3 p-3" style={{
                        border: "1px dashed",
                        borderRadius: 5, 
                        backgroundColor: '#EFCB53',
                    }}>
                       <Typography color="blue-gray" className="mb-2 font-bold self-center text-center">
                        Address
                        </Typography>
                        <Typography color="blue-gray" className="mx-2 self-center text-center">
                        Centre for Internet of Things (CIoT), Madras Institute of Technology Campus, Anna University, Chennai, 600044.
                        </Typography>  
                    </div>
                    <div className="my-2 p-3" style={{
                        border: "1px dashed",
                        borderRadius: 5,
                        backgroundColor: '#EFCB53', 
                    }}>
                       <Typography color="blue-gray" className="mb-2 font-bold self-center text-center">
                        Geo Location
                        </Typography>
                        <Typography color="blue-gray" className="mx-2 self-center text-center">
                        Latitude: 12.948747N, Longitude: 80.140158E
                        </Typography>  
                    </div>

                </div>
            </CardBody>
            </Card>
            </div>
            <div className='bg-logo bg-no-repeat bg-center w-6/12'>
            <Card className="">
            {/* <CardHeader color="blue-gray" className="relative h-fill w-fill">
                <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                />
            </CardHeader> */}
            <CardBody>
            <MapContainer center={location} zoom={14} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}>
                <Popup>Center for Internet of Things (CIoT)</Popup>
            </Marker>
            </MapContainer>
            </CardBody>
            {/* <CardFooter className="pt-0">
                <Link to="https://www.annauniv.edu/">
                <Button>Read More</Button>
                </Link>
            </CardFooter> */}
            </Card>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ContactUs
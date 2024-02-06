import React from 'react'
import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import EditIcon from '@mui/icons-material/Edit';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../Loading/LoadingScreen';
function ProfilePage() {
    
    const [userDetails, setUserDetails] = useState({})
    const [isLoading, setIsLoading] = useState(0)
    const [enquiry, setEnquiry] = useState([])
    const [enquiryLoading, setEnquiryLoading] = useState(0)

    const TABLE_HEAD = ["Enquiry No", "Name", "District", "Taluk", "Village", "Survey No", "Status"];
    
    const TABLE_HEAD2 = ["Enquiry No", "District", "Taluk", "Village", "Survey No", "Soil Sample No"];
    
    // const TABLE_ROWS = [
    // {
    //     name: "John Michael",
    //     district: "Chennai",
    //     taluk: "Maduravoyal",
    //     village: "Virugambakkam",
    //     surveyNo: "224/2A",
    //     date: "24/12/2023",
    //     status: "In progress",
    //     eNumber: "123456789"
    // },
    // {
    //     name: "John Micheal",
    //     district: "Chennai",
    //     taluk: "Maduravoyal",
    //     village: "Virugambakkam",
    //     surveyNo: "224/2A",
    //     date: "24/12/2023",
    //     status: "In progress",
    //     eNumber: "123456789"
    // },
    // {
    //     name: "John Michael",
    //     district: "Chennai",
    //     taluk: "Maduravoyal",
    //     village: "Virugambakkam",
    //     surveyNo: "224/2A",
    //     date: "24/12/2023",
    //     status: "Completed",
    //     eNumber: "123456789"
    // },
    // {
    //     name: "John Michael",
    //     district: "Chennai",
    //     taluk: "Maduravoyal",
    //     village: "Virugambakkam",
    //     surveyNo: "224/2A",
    //     date: "24/12/2023",
    //     status: "In progress",
    //     eNumber: "123456789"
    // },
    // {
    //   name: "John Michael",
    //   district: "Chennai",
    //   taluk: "Maduravoyal",
    //   village: "Virugambakkam",
    //   surveyNo: "224/2A",
    //   date: "24/12/2023",
    //   status: "In progress",
    //   eNumber: "123456789"   
    // },
    // ];

    // const TABLE_ROWS2 = [
    //   {
    //     eNumber: "1234567891",
    //     sampleDate: "30/12/23",
    //     district: "Chennai",
    //     taluk: "Maduravoyal",
    //     village: "Virugambakkam",
    //     surveyNo: "224/2A",
    //     soilNumber:"1234567891"
    //   },
    //   {
    //     eNumber: "12345678910",
    //     sampleDate: "30/12/23",
    //     district: "Chennai",
    //     taluk: "Maduravoyal",
    //     village: "Virugambakkam",
    //     surveyNo: "224/2A",
    //     soilNumber:"12345678910"
    //   },
    // ];
    const [selectedOption, setSelectedOption] = useState(0)
    useEffect(() => {
      const email = "admin123@gmail.com"
      const mobile = "1234567891"
      
      function getUserDetails(){
        const params = {
          email : email
        }
        axios.get('http://localhost:8000/api/admins/', { params })
        .then(response => {
          const responseData = response.data;
          console.log(responseData)
          setUserDetails(responseData)
          setIsLoading(2)
          }
        )
        .catch(error => {
          console.log(error)
          setIsLoading(1)
        })
      }
      
      function getEnquiryDetails(){
        axios.get('http://localhost:8000/api/enquiries/')
        .then(response => {
          const responseData = response.data;
          console.log(responseData)
          setEnquiry(responseData)
          if(responseData.length !== 0){
            setEnquiryLoading(1)
          }
          else{
            setEnquiryLoading(0)
          }
          }
        )
        .catch(error => {
          console.log(error)
          // setEnquiryLoading(1)
        })
      }

      getUserDetails()
      getEnquiryDetails()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if(isLoading === 0){
      return(
        <>
          <LoadingScreen />
        </>
      )
    }
    else if(isLoading === 1){
      return(
        <>
          <Header />
          <Navbar />
          <div className='py-10 self-center text-center'>
          <Typography color="black" variant="h4" className="my-2 font-semibold self-center">
            Server error please try again later!
          </Typography>
          </div>
        </>
      )
    }
    else if(isLoading === 2){
  return (
    <>
    <Header />
    <Navbar />
    <div className='flex flex-col w-full py-10 bg-proflogo bg-repeat bg-auto'>
    <div className='block justify-center w-8/12 self-center'>
    <div className='flex gap-10 justify-self-center items-center bg-cyan-100 p-10 rounded-2xl bg-logo bg-no-repeat bg-center mb-10'>
    <Card className="w-1/2 p-0">
      <CardBody>
              <Button size="sm" className="flex items-center justify-self-start gap-2">
                Edit
                <EditIcon sx={{fontSize: 15}}/>
              </Button>

        
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center mt-2">
          Welcome Admin!
        </Typography>
        <Typography variant="h6" className='mt-6 mb-6 underline text-start'>
          Your details: 
        </Typography>
        <div className='flex gap-5'>
          <Typography className='font-bold' color='black'>
            Name:
          </Typography>
          <Typography>
            {userDetails['name']}
          </Typography>
        </div>
        <div className='flex gap-5'>
          <Typography className='font-bold' color='black'>
            Email:
          </Typography>
          <Typography>
            {userDetails['email']}
          </Typography>
        </div>
        <div className='flex gap-5'>
          <Typography className='font-bold' color='black'>
            Mobile:
          </Typography>
          <Typography>
            {userDetails['mobile']}
          </Typography>
        </div>
      </CardBody>
      
    </Card>
    <div className='flex flex-col gap-2 w-1/2'>
      <Card className="w-full p-0">
        <CardBody>
                {/* <Button size="sm" className="flex items-center justify-self-start gap-2">
                  Edit
                  <EditIcon sx={{fontSize: 15}}/>
                </Button> */}

          
          {/* <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
            Welcome Ramesh!
          </Typography> */}
          <div className='flex gap-5'>
            <Typography className='font-bold text-center' color='black basis-3/4'>
              Link enquiry number and soil sample number by clicking here -{">"}
            </Typography>
            <Link to="/linksoilnumber">
            <Button size="sm" color='green' className="flex mt-5 items-center justify-center self-center gap-2 text-xs">
                  Link
                  <ArrowOutwardIcon sx={{fontSize: 15}}/>
            </Button>
            </Link>
            
          </div>
        </CardBody>
        
      </Card>
      <Card className="w-full p-0 text-center">
        <CardBody>
        <Typography className='font-semibold'>
          Check the status of all user enquiries and soil sample numbers below!
        </Typography>
        </CardBody>
        
      </Card>
    </div>
    </div>
    <div>   
    </div>
    </div>
    <div className='flex flex-col gap-10 self-center items-center w-10/12 bg-cyan-100 p-10 rounded-2xl bg-logo bg-no-repeat bg-center'>
    <div className='flex gap-10 self-center'>
    <Button
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        color='green'
        type="button"
        onClick={()=>{
            setSelectedOption(1)
        }}
    >
        Enquiries In Progress
    </Button>
    <Button
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        color='orange'
        className='focus:ring-1'
        type="button"
        onClick={()=>{
            setSelectedOption(2)
        }}
    >
        Completed Enquiries
    </Button>
    </div>
    {(() =>{
        if(selectedOption === 0){
            return(
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center mt-2">
          Select an option to view user data
        </Typography>
            )
        }
        else if(selectedOption === 1){
            return(
                <>
                <div className='block px-5'>
    
    <Typography color="black" className="my-2 font-semibold self-center">
        The list of enquiries in the database will appear here!
    </Typography>
    <Card className="max-h-80 w-fill overflow-scroll overflow-x-auto rounded-sm text-sm">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-gray-800 p-4">
                <Typography
                  variant="small"
                  color="white"
                  className="font-semibold leading-none opacity-none w-max-30"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {enquiry.map(({ district, enquiry_no, mobile, name, soil_sample_no, survey_no, taluk, village }, index) => {
            const isLast = index === enquiry.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            const statusColor = soil_sample_no === null ? 'bg-red-100' : 'bg-green-100' 
            return (
              <tr key={name} className={statusColor}>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className=" max-w-20 font-normal">
                    {enquiry_no}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className=" max-w-20 font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {district}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {taluk}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {village}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {survey_no}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                  {(() => {
                      if(soil_sample_no!==null){
                        return(
                          <span className='text-green-600'>Completed</span>
                        )
                      }
                      else{
                        return(
                          <span className='text-red-600'>In Progress</span>
                        )
                      }
                    })()}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    </div>
    
                </>
            )
        }
        else{
            return(
            <div className='block px-5'>
    <Typography color="black" className="my-2 font-semibold self-center">
        The soil sample number for each completed enquiry can be found below!
    </Typography>
    <Card className="max-h-80 w-fill overflow-scroll overflow-x-auto rounded-sm text-sm">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD2.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-gray-800 p-4">
                <Typography
                  variant="small"
                  color="white"
                  className="font-semibold leading-none opacity-none w-max-30"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {enquiry.map(({ district, enquiry_no, mobile, name, soil_sample_no, survey_no, taluk, village}, index) => {
            const isLast = index === enquiry.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            if(soil_sample_no !== null){
            return (
              <tr key={enquiry_no}>
                <td className={`${classes}`}>
                  <Typography variant="small" color="blue-gray" className=" max-w-20 font-normal">
                    {enquiry_no}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {district}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {taluk}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {village}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {survey_no}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                <Link to={`/soilcard/${soil_sample_no}`} className='underline'>
                  <Typography variant="small" color="blue-gray" className="font-semibold">
                    {soil_sample_no}
                  </Typography>
                  </Link>
                </td>
              </tr>
            );
            }
          })}
        </tbody>
      </table>
    </Card>
    </div>
    )}
    })()}
    
    </div>
    </div>
    <Footer />
    </>
  )
  }
}

export default ProfilePage
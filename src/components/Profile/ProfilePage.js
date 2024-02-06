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
    
    const TABLE_ROWS = [
    {
        name: "John Michael",
        district: "Chennai",
        taluk: "Maduravoyal",
        village: "Virugambakkam",
        surveyNo: "224/2A",
        date: "24/12/2023",
        status: "In progress",
        eNumber: "123456789"
    },
    {
        name: "John Micheal",
        district: "Chennai",
        taluk: "Maduravoyal",
        village: "Virugambakkam",
        surveyNo: "224/2A",
        date: "24/12/2023",
        status: "In progress",
        eNumber: "123456789"
    },
    {
        name: "John Michael",
        district: "Chennai",
        taluk: "Maduravoyal",
        village: "Virugambakkam",
        surveyNo: "224/2A",
        date: "24/12/2023",
        status: "Completed",
        eNumber: "123456789"
    },
    {
        name: "John Michael",
        district: "Chennai",
        taluk: "Maduravoyal",
        village: "Virugambakkam",
        surveyNo: "224/2A",
        date: "24/12/2023",
        status: "In progress",
        eNumber: "123456789"
    },
    {
      name: "John Michael",
      district: "Chennai",
      taluk: "Maduravoyal",
      village: "Virugambakkam",
      surveyNo: "224/2A",
      date: "24/12/2023",
      status: "In progress",
      eNumber: "123456789"   
    },
    ];

    // const TABLE_ROWS2 = [
    //   {
    //     eNumber: "123456789",
    //     sampleDate: "30/12/23",
    //     district: "Chennai",
    //     taluk: "Maduravoyal",
    //     village: "Virugambakkam",
    //     surveyNo: "224/2A",
    //     soilNumber:"987654321"
    //   },
    //   {
    //     eNumber: "123456789",
    //     sampleDate: "30/12/23",
    //     district: "Chennai",
    //     taluk: "Maduravoyal",
    //     village: "Virugambakkam",
    //     surveyNo: "224/2A",
    //     soilNumber:"987654321"
    //   },
    // ];

    useEffect(() => {
      const email = "ramesh123@gmail.com"
      const mobile = "1234567891"
      
      function getUserDetails(){
        const params = {
          email : email
        }
        axios.get('http://localhost:8000/api/users/', { params })
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
        const params = {
          mobile : mobile
        }
        axios.get('http://localhost:8000/api/enquiries/', { params })
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

        
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
          Welcome {userDetails['name']}
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
            Address:
          </Typography>
          <Typography className='w-full text-start'>
          {userDetails['address']}
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
            <Typography className='font-bold text-start' color='black basis-3/4'>
              Test your soil nutrients by making an enquiry -{">"}
            </Typography>
            <Link to="/enquiryform" className='self-center'>
            <Button size="sm" color='orange' className="flex text-xs justify-self-start items-center gap-2 ">
                  Enquiry
                  <ArrowOutwardIcon sx={{ fontSize: 15}}/>
            </Button>
            </Link>
          </div>
        </CardBody>
        
      </Card>
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
            <Typography className='font-bold text-start' color='black basis-3/4'>
              View Soil Health Card by clicking here -{">"}
            </Typography>
            <Link to="/cardform">
            <Button size="sm" color='green' className="flex items-center gap-2 text-xs">
                  Soil Card
                  <ArrowOutwardIcon sx={{fontSize: 15}}/>
            </Button>
            </Link>
            
          </div>
        </CardBody>
        
      </Card>
      <Card className="w-full p-0">
        <CardBody>
        <Typography className='font-semibold'>
          Check the status of your enquiries and soil sample numbers below!
        </Typography>
        </CardBody>
        
      </Card>
    </div>
    </div>
    <div>   
    </div>
    </div>
    <div className='flex flex-col gap-10 self-center items-center w-8/12 bg-cyan-100 p-10 rounded-2xl bg-logo bg-no-repeat bg-center'>
    <div className='block px-5'>
    <Typography color="black" className="my-2 font-semibold self-center text-center">
        The list of enquiries made by you will appear here!
    </Typography>
    <Card className="max-h-64 w-fill overflow-scroll overflow-x-auto rounded-sm text-sm">
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
        {(() => {
          if(enquiryLoading === 0){
            return(
              <tbody>
                <Typography className='text-center font-semibold self-center'>
                  You have not made any enquiries yet!
                </Typography>
              </tbody>
            )
          }
          else{
            return(
              <tbody>
          {enquiry.map(({ district, enquiry_no, mobile, name, soil_sample_no, survey_no, taluk, village}, index) => {
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
                  <Typography variant="small" color="blue-gray" className="text-red-600 font-normal">
                    {(() => {
                      if(soil_sample_no!==null){
                        return(
                          <span>Completed</span>
                        )
                      }
                      else{
                        return(
                          <span>In Progress</span>
                        )
                      }
                    })()}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
            )
          }
        })()}
        
      </table>
    </Card>
    </div>
    <div className='block px-5'>
    <Typography color="black" className="my-2 font-semibold self-center text-center">
        The soil sample number for each completed enquiry can be found below!
    </Typography>
    <Card className="max-h-64 w-fill overflow-scroll overflow-x-auto rounded-sm text-sm">
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
                  <td className={`${classes} bg-blue-gray-50/50`}>
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
                    <Typography variant="small" color="blue-gray" className="font-semibold">
                      {soil_sample_no}
                    </Typography>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </Card>
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}
}

export default ProfilePage
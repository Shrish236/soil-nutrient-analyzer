import React from 'react'
import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import {
  Card,
  Typography,
} from "@material-tailwind/react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingScreen from '../Loading/LoadingScreen';
import { Link } from 'react-router-dom';
import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function CardPage() {
  const { sampleNumber } = useParams()
  const [responseData, setResponseData] = useState({});
  const [isLoaded, setIsLoaded] = useState(0)
  const [request, setRequest] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    function getDetails(){
      const params = {
        soil_sample_no : sampleNumber,
      }
      if(request === 0) {
        axios.get('http://localhost:8000/api/soilcard', { params:params, responseType: 'blob' })
      .then(response => {
        // const responseData = response.data;
        // console.log(responseData)
        // if(responseData.length===0){
        //   setIsLoaded(2)
        // }
        // else{
        //   let tempDictionary = {};

        //   responseData.forEach(item => {
            
        //     const field = item['_field'];
        //     tempDictionary[field] = item;
        //     // console.log(tempDictionary['Boron']['_field'])
        //   });
        //   // console.log(tempDictionary)
        //   setResponseData(tempDictionary);
        //   setIsLoaded(3)
        //   // console.log(responseData['Boron'])
      // }
              console.log(response.data)
              const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
              // Create a temporary URL for the Blob
              const url = window.URL.createObjectURL(pdfBlob);
              // Create a link element
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'results.pdf');
              // Append the link to the body
              document.body.appendChild(link);
              // Trigger the download
              link.click();
              // Clean up
              document.body.removeChild(link);
              setRequest(1)
              alert("View the downloads folder to see the results document!")
              navigate("/cardform")
        
      })
      .catch(error => {
        setIsLoaded(1)
        console.log(error)
      })
      }
    }
    if(isLoaded === 0){
      if(request === 0){
        setRequest(1)
        getDetails()
      }
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    const TABLE_HEAD1 = ["S.No", "Nutrient", "Units", "Tested Value", "Threshold Value", "Rating"];

    const TABLE_ROWS = [
    {
        nutrient:"Nitrogen (N)",
        units: "kg/Ha",
        // testValue: "57",
        thresholdValue: "280-560",
        key: 'Nitrogen',
        thresholdLow: 280,
        thresholdHigh: 560
    },
    {
        nutrient:"Phosphorus (P)",
        units: "kg/Ha",
        // testValue: "15.34",
        thresholdValue: "10-25",
        key: 'Phosporous',
        thresholdLow: 10,
        thresholdHigh: 25
    },
    {
        nutrient:"Potassium (K)",
        units: "kg/Ha",
        // testValue: "243",
        thresholdValue: "108-280",
        key: 'Potassium',
        thresholdLow: 108,
        thresholdHigh: 280
    },
    {
        nutrient:"Calcium (Ca)",
        units: "mg/kg",
        // testValue: "243",
        thresholdValue: "1000-2000",
        key: 'Calcium',
        thresholdLow: 1000,
        thresholdHigh: 2000
    },
    {
        nutrient:"Magnesium (Mg)",
        units: "mg/kg",
        // testValue: "243",
        thresholdValue: "51-150",
        key: 'Magnesium',
        thresholdLow: 51,
        thresholdHigh: 150
    },
    {
        nutrient:"Sulfur (S)",
        units: "mg/kg",
        // testValue: "243",
        thresholdValue: "10-20",
        key: 'Sulphur',
        thresholdLow: 10,
        thresholdHigh: 20
    },
    {
      nutrient:"Zinc (Zn)",
      units: "mg/kg",
      // testValue: "243",
      thresholdValue: "0.6-1.2",
      key: 'Zinc',
      thresholdLow: 0.6,
      thresholdHigh: 1.2
    },
    {
      nutrient:"Manganese (Mn)",
      units: "mg/kg",
      // testValue: "243",
      thresholdValue: "2-4",
      key: 'Manganese',
      thresholdLow: 2,
      thresholdHigh: 4
    },
    {
      nutrient:"Iron (Fe)",
      units: "mg/kg",
      // testValue: "243",
      thresholdValue: "4.8-8.0",
      key: 'Iron',
      thresholdLow: 4.8,
      thresholdHigh: 8
    },
    {
      nutrient:"Copper (Cu)",
      units: "mg/kg",
      // testValue: "243",
      thresholdValue: "0.2-0.4",
      key: 'Copper',
      thresholdLow: 0.2,
      thresholdHigh: 0.4
    },
    {
      nutrient:"Boron (B)",
      units: "mg/kg",
      // testValue: "243",
      thresholdValue: "0.5-1",
      key: 'Boron',
      thresholdLow: 0.5,
      thresholdHigh: 1
    }
    ];

    const TABLE_ROWS2 = [
      {
        eNumber: "dummy",
        name: "dummy",
        sampleDate: "dummy",
        district: "dummy",
        taluk: "dummy",
        village: "dummy",
        surveyNo: "dummy",
        soilNumber:"dummy",
        geoPositionN: "dummy",
        geoPositionE: "dummy",
      },
    ];

    if(isLoaded === 0){
      return(
        <>
          <LoadingScreen />
        </>
      )
    }
    else if(isLoaded === 1){
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
    else if(isLoaded === 2){
      return(
        <>
          <Header />
          <Navbar />
          <div className='py-10 self-center text-center'>
          <Typography color="black" variant="h4" className="my-2 font-semibold self-center">
            Please enter correct soil sample number and try again!
          </Typography>
          </div>
        </>
      )
    }
    return (
    <>
        <Header />
        <Navbar />
        <div className='flex justify-center py-10 w-full bg-wheatbg bg-no-repeat bg-center'>
        <div className='flex flex-col gap-10  w-7/12 bg-cyan-100 p-5 rounded-2xl bg-logo bg-no-repeat bg-center'>
        {console.log(responseData)}
        <Typography color="black" variant="h4" className="my-2 font-semibold self-center">
        Soil Health Card
        </Typography>
        
        <div className='flex flex-col justify-center'>
          <div className='flex w-fill justify-center gap-20'> 
          <Typography color="black" className="my-2 font-semibold underline">
              Soil Sample Details:
          </Typography>
          <Typography className="my-2 font-semibold underline text-orange-700">
          <Link to={`https://www.google.com/maps?q=${responseData['Latitude']['_value']},${responseData['Longitude']['_value']}`} target="_blank" rel="noopener noreferrer">
                View Sample Location
            </Link>
          </Typography>
          </div>
          <Card className=" w-7/12 overflow-none overflow-x-auto self-center rounded-sm text-sm ">
          <table className="w-full min-w-max table-auto overflow-none text-left">
            {/* <thead>
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
            </thead> */}
            <tbody>
              {TABLE_ROWS2.map(({ eNumber, name, sampleDate, district, taluk, village, surveyNo, soilNumber, geoPositionN, geoPositionE}, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                return (
                    <>
                  <tr key={index}>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography variant="small" color="blue-gray" className="font-semibold">
                        Sample Collection Number
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {sampleNumber}
                      </Typography>
                    </td>
                  </tr>
                  <tr key={index}>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography variant="small" color="blue-gray" className="font-semibold">
                      Date of sample Collection
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {responseData['Date_of_Sample_Collection']['_value']}
                    </Typography>
                  </td>
                </tr>
                <tr key={index}>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography variant="small" color="blue-gray" className="font-semibold">
                      Name
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {responseData['Name']['_value']}
                    </Typography>
                  </td>
                </tr>
                <tr key={index}>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography variant="small" color="blue-gray" className="font-semibold">
                      District
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {responseData['District']['_value']}
                    </Typography>
                  </td>
                </tr>
                <tr key={index}>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography variant="small" color="blue-gray" className="font-semibold">
                      Taluk
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {responseData['Taluk']['_value']}
                    </Typography>
                  </td>
                </tr>
                <tr key={index}>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography variant="small" color="blue-gray" className="font-semibold">
                      Village
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {responseData['Village']['_value']}
                    </Typography>
                  </td>
                </tr>
                <tr key={index}>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography variant="small" color="blue-gray" className="font-semibold">
                      Survey Number
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {responseData['Survey_No']['_value']}
                    </Typography>
                  </td>
                </tr>
                <tr key={index}>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography variant="small" color="blue-gray" className="font-semibold">
                      Geo Position
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      Latitude: {responseData['Latitude']['_value']}  <br/>
                      Longitude: {responseData['Longitude']['_value']} 
                    </Typography>
                  </td>
                </tr>
                </>
                );
              })}
            </tbody>
          </table>
          </Card>
        <Typography color="black" className="mt-5 font-semibold underline self-center">
            Soil Test Results:
        </Typography>
        </div>
        <Card className="w-full mx-10 overflow-visible justify-center items-center self-center overflow-x-auto rounded-sm text-sm">
          <table className="w-full min-w-max self-center table-auto no-scroll text-left">
            <thead>
              <tr>
                {TABLE_HEAD1.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-orange-300 p-4">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-semibold leading-none opacity-none w-max-30"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ nutrient, units, thresholdValue, key, thresholdLow, thresholdHigh}, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={index}>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {index+1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {nutrient}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {units}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {responseData[key]['_value']}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {thresholdValue}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {(() => {
                          if(key === 'Nitrogen' || key === 'Potassium' || key === 'Phosporous'){
                            if(responseData[key]['_value'] < thresholdLow){
                              return(
                                "Low"
                              )
                            }
                            else if(responseData[key]['_value'] > thresholdHigh){
                              return(
                                "High"
                              )
                            }
                            else{
                              return(
                                "Medium"
                              )
                            }
                          }
                          else{
                            if(responseData[key]['_value'] < thresholdLow){
                              return(
                                "Insufficient"
                              )
                            }
                            else if(responseData[key]['_value'] > thresholdHigh){
                              return(
                                "Excessive"
                              )
                            }
                            else{
                              return(
                                "Sufficient"
                              )
                            }
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
    </div>
        <Footer />
    </>
  )
}

export default CardPage
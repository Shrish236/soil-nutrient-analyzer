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
function CardPage() {
    const TABLE_HEAD = ["S.No", "Nutrient", "Units", "Tested Value", "Threshold Value", "Rating"];
  
    const TABLE_ROWS = [
    {
        nutrient:"Nitrogen (N)",
        units: "kg/Ha",
        testValue: "57",
        thresholdValue: "280-560",
        rating: "Low" 
    },
    {
        nutrient:"Phosphorus (P)",
        units: "kg/Ha",
        testValue: "15.34",
        thresholdValue: "10-25",
        rating: "Medium" 
    },
    {
        nutrient:"Potassium (K)",
        units: "kg/Ha",
        testValue: "243",
        thresholdValue: "108-280",
        rating: "Medium" 
    },
    ];

    const TABLE_ROWS2 = [
      {
        eNumber: "123456789",
        name: "Ramesh Kumar",
        sampleDate: "30/12/23",
        district: "Chennai",
        taluk: "Maduravoyal",
        village: "Virugambakkam",
        surveyNo: "224/2A",
        soilNumber:"987654321",
        geoPositionN: "9.0148",
        geoPositionE: "77.2517",
      },
    ];
  return (
    <>
        <Header />
        <Navbar />
        <div className='flex justify-center py-10 w-full bg-wheatbg bg-no-repeat bg-center'>
        <div className='flex flex-col gap-10  w-7/12 bg-cyan-100 p-5 rounded-2xl bg-logo bg-no-repeat bg-center'>
        <Typography color="black" variant="h4" className="my-2 font-semibold self-center">
        Soil Health Card
    </Typography>
    
    <div className='flex flex-col justify-center'>
    <div className='flex w-fill justify-center gap-20'> 
    <Typography color="black" className="my-2 font-semibold underline">
        Soil Sample Details:
    </Typography>
    <Typography className="my-2 font-semibold underline text-orange-700">
        View Sample Location:
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
                    {soilNumber}
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
                  {sampleDate}
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
                  {name}
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
                  {district}
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
                  {taluk}
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
                  {village}
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
                  {surveyNo}
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
                  Latitude: {geoPositionN} N <br/>
                  Longitude: {geoPositionE} E
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
            {TABLE_HEAD.map((head) => (
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
          {TABLE_ROWS.map(({ nutrient, units, testValue, thresholdValue, rating}, index) => {
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
                    {testValue}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {thresholdValue}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {rating}
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
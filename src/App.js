import './App.css';
import Homepage from './components/Homepage/Homepage';
import SignUp from './components/SignUp/SignUp';
import SoilHealthCardForm from './components/SoilHealthCard/SoilHealthCardForm';
import LogIn from './components/SignUp/LogIn';
import AdminLogin from './components/SignUp/AdminLogin';
import ProfilePage from './components/Profile/ProfilePage';
import EnquiryForm from './components/Enquiry/EnquiryForm';
import CardPage from './components/SoilHealthCard/CardPage';
import AdminProfilePage from './components/Admin/AdminProfilePage';
import LinkSoilSampleNumber from './components/Admin/LinkSoilSampleNumber';
import AboutUs from './components/AboutUs/AboutUs';
import Vision_Mission from './components/Vision&Mission/Vision_Mission';
import SoilTesting from './components/SoilTesting/SoilTesting';
import FarmerLogin from './components/Farmer/FarmerLogin';
import FarmerSignUp from './components/Farmer/FarmerSignUp';
import ContactUs from './components/ContactUs/ContactUs';
import FarmerProfile from './components/Farmer/FarmerProfile';
import { RequireAuth } from './utils/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/auth';
function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path='/' element={<Homepage footerMargin="true"/>} />
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<LogIn />} />
      <Route path='adminlogin' element={<AdminLogin />} />
      <Route path='enquiryform' element={<RequireAuth><EnquiryForm /></RequireAuth>} />
      <Route path='profile' element={<RequireAuth><ProfilePage /></RequireAuth>} />
      <Route path='adminprofile' element={<RequireAuth><AdminProfilePage /></RequireAuth>} />
      <Route path='linksoilnumber' element = {<RequireAuth><LinkSoilSampleNumber /></RequireAuth>} />
      <Route path='cardform' element={<SoilHealthCardForm />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='vision-mission' element={<Vision_Mission />} />
      <Route path='soil-testing' element={<SoilTesting />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='farmer-login' element={<FarmerLogin />} />
      <Route path='farmer-registration' element={<FarmerSignUp />} />
      <Route path='farmer-profile' element={<FarmerProfile />} />
      <Route path='/soilcard/:sampleNumber' element={<CardPage />} />
    </Routes>
    </AuthProvider>
  );
}

export default App;

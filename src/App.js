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
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage footerMargin="true"/>} />
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<LogIn />} />
      <Route path='adminlogin' element={<AdminLogin />} />
      <Route path='enquiryform' element={<EnquiryForm />} />
      <Route path='profile' element={<ProfilePage />} />
      <Route path='adminprofile' element={<AdminProfilePage />} />
      <Route path='linksoilnumber' element = {<LinkSoilSampleNumber />} />
      <Route path='cardform' element={<SoilHealthCardForm />} />
      <Route path='/soilcard/:sampleNumber' element={<CardPage />} />
    </Routes>
    // <EnquiryForm />
  );
}

export default App;

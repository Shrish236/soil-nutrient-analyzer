import React, { Component } from 'react'
import logoURL from '../../assets/TN-logo.png'
import aulogoURL from '../../assets/au-logo.png'
import CIoTLogo from '../../assets/WhatsApp Image 2024-02-18 at 2.14.31 PM (1).png'
import '../styles.css'
class Header extends Component {
  
  render() {
    return <div className="flex flex-wrap items-center bg-gray-100 p-2 justify-center sm:justify-between">
    <img src={CIoTLogo} className="h-16 mb-2 sm:mb-0 mr-4" alt='logo'/> {/* Added margin right for separation on small screens */}
    <div className="flex flex-col text-center ">
        <span className="text-lg font-medium block sm:inline">Soil Testing Research and Development Laboratory</span>
        <span className="text-gray-500 text-base font-medium block sm:inline">Government of Tamil Nadu</span>
    </div>
    <img src={aulogoURL} className="h-16" alt='logo'/>
</div>
    // return <div className="flex h-20 bg-gray-100 p-2 justify-between w-fill">
    //     <img src = {CIoTLogo} className="h-16" alt='logo'/>
    //     <span className='flex flex-col p-2 text-center self-center'>
    //       <span className="text-lg font-medium">Soil Testing Research and Development Laboratory</span>
          
    //       <span className=" text-gray-500 text-base font-medium">Government of Tamil Nadu</span>
    //     </span>
    //     <img src = {aulogoURL} className="h-16" alt='logo'/>
    //     {/* <p className={'header-text'}>Department of Horticulture and Plantation Crops</p> */}
    //     {/* <h1 class="text-3xl font-bold underline text-red-300"> */}
    //     {/* Hello world! */}
    // {/* </h1> */}
    //     </div>
    

  }
}

export default Header
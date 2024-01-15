import React, { Component } from 'react'
import logoURL from '../../assets/TN-logo.png'
import '../styles.css'
class Header extends Component {
  
  render() {
    return <div className="flex h-20 bg-gray-100 p-1">
        <img src = {logoURL} className="m-2 h-16 self-center float-left" alt='logo'/>
        <span className=''>
          <span className="absolute ml-2 mt-3 w-35 float-left text-left text-lg font-medium">Department of Horticulture and Plantation Crops</span>
          
          <span className="absolute ml-2 mt-9 w-35 float-left text-left text-gray-500 text-base font-medium">Government of Tamil Nadu</span>
        </span>
        {/* <p className={'header-text'}>Department of Horticulture and Plantation Crops</p> */}
        {/* <h1 class="text-3xl font-bold underline text-red-300"> */}
        {/* Hello world! */}
    {/* </h1> */}
        </div>
  }
}

export default Header
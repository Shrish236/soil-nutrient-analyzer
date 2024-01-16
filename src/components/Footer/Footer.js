import React, { Component } from 'react'
import logoURL from '../../assets/au-logo.png'
import '../styles.css'
class Footer extends Component {
  
  render() {
    return(
    <div className='relative mt-36 w-fill h-60px'>
        <div className='relative h-5/6'>
            <hr className="h-px bg-gray-500 "/>
            <img src={logoURL} alt='AU Logo' className='w-12 h-12 ml-[454px] my-4'/>
            <div className='absolute justify-center text-center ml-[514px] -mt-20'>
                <span className="[font-family:'Martel_Sans-Regular',Helvetica] font-normal text-[#6a6a6a] text-sm tracking-[0] leading-[normal] underline">Designed and developed by:</span>
            </div>
            <div className='absolute justify-center text-center ml-[526px] -mt-14'>
                <span className=" [font-family:'Martel_Sans-Regular',Helvetica] font-normal text-[#000000e6] text-sm tracking-[0] leading-[normal]">Department of Electronics Engineering</span>
            </div>
            <div className='absolute justify-center text-center ml-[526px] -mt-9'>
                <span className=" [font-family:'Martel_Sans-Regular',Helvetica] font-normal text-[#000000e6] text-sm tracking-[0] leading-[normal]">MIT Campus, Anna University, Chennai-44.</span>
            </div>
        </div>
        <div className='block mt-5 h-1/6 bg-black self-end'>
            <span className='h-fill w-fill'><br/></span>
        </div>
    </div>
    )
  }
}

export default Footer
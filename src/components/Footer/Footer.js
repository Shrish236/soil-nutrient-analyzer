import React, { Component } from 'react'
import logoURL from '../../assets/au-logo.png'
import '../styles.css'
class Footer extends Component {
  render() {
    const mainClass = "flex w-fill bg-green-200"
    const spacing = "pt-36"
    const combinedClasses = this.props.footerMargin ? `${mainClass} ${spacing}` :  mainClass;
    return(
    <div className={combinedClasses}>
        <div className='block self-center align-items-center w-5/12 px-6'>
            <img src={logoURL} alt='AU Logo' className='w-14 h-fill float-right'/>
        </div>
        <div className='flex flex-col h-fill text-start gap-2 pb-4 w-7/12 px-6'>
            <hr className="h-2 bg-black-500 "/>
            <div className='flex w-fill justify-start text-start'>
                <p className="[font-family:'Martel_Sans-Regular',Helvetica] font-normal text-[#6a6a6a] text-sm tracking-[0] leading-[normal] underline">Designed and developed by:</p>
            </div>
            <div className='flex w-fill justify-start text-start'>
                <span className=" [font-family:'Martel_Sans-Regular',Helvetica] font-normal text-[#000000e6] text-sm tracking-[0] leading-[normal]"> Department of Electronics Engineering</span>
            </div>
            <div className='flex w-fill justify-start text-start'>
                <span className=" [font-family:'Martel_Sans-Regular',Helvetica] font-normal text-[#000000e6] text-sm tracking-[0] leading-[normal]">MIT Campus, Anna University, Chennai-44.</span>
            </div>
        </div>
        
    </div>
    )
  }
}

export default Footer
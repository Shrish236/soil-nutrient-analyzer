import React from 'react'
import '../styles.css'
import logoURL from '../../assets/TN-logo-2.png'
import image from '../../assets/image1.jpg'
function Homepage() {
  return (

      <div className="flex justify-center w-fill">
        {/* <div
          className="bg-cover bg-scroll self-center bg-center h-52 w-48"
          style={{
            backgroundImage: `url(${logoURL})`,
          }}
        > */}
        <img src={logoURL} className="absolute mt-20 z-0 h-52 w-48" alt='logo'/>
                
        <div className="absolute self-start w-fill text-center pt-5"> 
            <h1 className='font-bold text-lg'>Soil Nutrient Analyzer</h1>
        </div>
        <div className='block'>
        <div className="block flex-start w-4/6 mt-10 text-justify justify-start float-left px-10 pt-10"> 
            <p><span className='self-left'>&nbsp; In the realm of modern agriculture, soil nutrient analysis stands as 
            a cornerstone process for understanding and optimizing land productivity. At the heart of this method 
            lies a detailed evaluation of soil composition and fertility, facilitated by specialized analyzers or 
            laboratories. <br/><br/> &nbsp; &nbsp; This meticulous process involves the extraction and examination of soil samples to 
            ascertain the presence and quantities of crucial nutrients essential for healthy plant growth. 
            Nitrogen (N), Phosphorus (P), Potassium (K), Sulphur, Zinc, Boron, Iron, Manganese, and Copper 
            levels were meticulously determined during this assessment. Advanced equipment or trained professionals 
            perform these analyses, generating comprehensive reports detailing the nutrient composition.</span></p>
        </div>
        <div className="block w-2/6 mt-20 text-center justify-center float-right pr-10">
            <div className="block bg-cyan-100 p-2 py-4"> 
                <h1 className='font-medium text-m text-base'>Soil Health Card</h1>
                <p className='text-m mt-5'>
                    <span>Click here to view your soil nutrient
                        details  <br/> through your soil sample number
                    </span>
                </p>
                <button className=" overflow-hidden bg-black mt-8 text-white font-semibold text-m text-left rounded-full py-2 px-4 w-2/6">
                    View Card 
                    <span className='absolute items-end overflow-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
                    </span>
                </button>
            </div>
        </div>
        </div>
        <div className='absolute mt-80 z-1 justify-start h-1/4 w-fit py-5 px-2'>
            <img src={image} className ="overflow-hidden" alt = "TN Resources"></img>
        </div>
        {/* </div> */}
      </div>
  )
}

export default Homepage
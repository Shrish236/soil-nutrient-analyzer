import React, { Component } from 'react'
import logoURL from '../../assets/au-logo.png'
import '../styles.css'
import { Typography } from "@material-tailwind/react";
class Footer extends Component {
  render() {
    const mainClass = "flex w-fill bg-green-200"
    const spacing = "pt-36"
    const combinedClasses = this.props.footerMargin ? `${mainClass} ${spacing}` :  mainClass;
    return(
        <footer className="w-full bg-black p-2">
        {/* <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-bg-gray-900 text-center md:justify-between">
          <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div> */}
        {/* <hr className="my-2 border-white" /> */}
        <Typography color="white" className="text-center font-normal">
          &copy; 2024 Center for Internet of Things
        </Typography>
      </footer>
    )
  }
}

export default Footer
import React from "react"
import Image from "next/image"
import BannerImage from "../assets/geekyants-logo.svg"
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const Home = () => {

  return (

    <div className="home-banner-container">
    <div className="home-text-section">
          <h1 className="primary-heading">
          QA Services - Software Testing
          </h1>
          <p className="primary-text">
          Professional software testing services for quality assurance.
          </p>
          <Link href="/login" className="secondary-button">
            Get started<FiArrowRight/>
  </Link>
          
        </div>
        <div className="home-image-section">
          <Image src={BannerImage} alt={"GeekyAnts Logo"}/>
        </div>



      </div>

     


);
};
 
export default Home;


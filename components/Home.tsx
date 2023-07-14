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
            Learn with the Geeks QA
          </h1>
          <p className="primary-text">
            Start Learning with us, dive into the world of testing.
          </p>
          <Link href="/login" className="secondary-button">
            Join Now<FiArrowRight/>
  </Link>
          
        </div>
        <div className="home-image-section">
          {/* <Image src={"../assets/home-banner-image.png"} alt="banner-image" /> */}
          <Image src={BannerImage} alt={"GeekyAnts Logo"}/>
        </div>



      </div>

     


);
};
 
export default Home;


    

// import { useState, ChangeEvent, FormEvent } from 'react';

// export default function Home() {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');

//   const handleSubmit = (event: FormEvent) => {
//     console.log('Form was submitted!');
//   };

//   const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

//   return (
//     <div className="Home">
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Enter email address" onChange={handleEmailChange} value={email} />
//         <input type="password" placeholder="Enter password" onChange={handlePasswordChange} value={password} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
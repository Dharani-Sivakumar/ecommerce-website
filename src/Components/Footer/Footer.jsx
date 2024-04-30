import React from 'react'
import '../Footer/footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { TfiTumblrAlt } from "react-icons/tfi";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcDinersClub } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";



const Footer = () => {
  return (
    <>
   <div className="wholefooter">
   <div className="insta">
        <div className='insta1'>
            <h2>Instagram</h2>
            <p>let's have a look what is behind the scenes</p>
        </div>
    </div>
    <div className="footer">
        <div className="footer1">
            <div className='cont'>
            <h3>MORE INFO</h3>
            </div>
            <div className='cont1'>
                <p>About Us</p>
                <p>Search</p>
                <p>Terms & Conditions</p>
                <p>Return Policy</p>
            </div>
        </div>
        <div className="footer1">
        <div className="footer1">
            <div className='cont'>
            <h3>FOODLY FAMILY</h3>
            </div>
            <div className='cont1'>
                <p>Food Markets</p>
                <p>Eco-activity</p>
                <p>Awards</p>
                <p>Recipes</p>
            </div>
        </div>
        </div>
        <div className="footer1">
        <div className='cont'>
            <h3>FOLLOW US</h3>
            </div>
            <div className='icons'>
            <div className='icon1'><FaFacebookF  /></div>
            <div className="icon1"><FaTwitter /></div>
            <div className="icon1"><FaPinterest /></div>
            <div className="icon1"><TiSocialInstagram /></div>
            <div className="icon1"><TfiYoutube /></div>
            <div className="icon1"><TfiTumblrAlt /></div>
         
            </div>
        </div>
        <div className="footer1">
        <div className='cont'>
            <h3>PAYMENT METHODS</h3>
            </div>
            <div className='icons1'>
            <FaCcVisa />
            <FaCcMastercard />
            <SiAmericanexpress />
            <FaCcPaypal />
            <FaCcDinersClub />
            <FaCcDiscover />
            </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default Footer
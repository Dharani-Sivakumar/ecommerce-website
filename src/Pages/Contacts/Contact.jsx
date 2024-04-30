import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import '../Contacts/contact.css'

const Contact = () => {
  return (
    <div className='body'>
        <Navbar/>
        <div className="bg-img">
            <div className="op"><p></p></div>
           <div className="backg">
           <div className="bg-cont">
             <h2><i>OUR</i></h2>
            <div className="bg-cont1">
            <h3>doors are always open
          </h3>
        </div>
            </div>
           </div>
        </div>

        <div className='cont-detail'>
        <div className="contact">
            <div className="contact-detail">
                <h6>HOURS</h6>
                <h5>09.00-17.00 (PST) MON - FRI</h5>
            </div>
            <div className="contact-detail">
                <h6>EMAIL</h6>
                <h5>contact@foodly.com</h5>
            </div>
            <div className="contact-detail">
                <h6>PHONE</h6>
                <h5>912-823-5448</h5>
            </div>
        </div>
        </div>

        <div className="cont-add">
            <div className="address">
                <div className="contact-address">
                    <h3>FARM FACILITIES</h3>
                    <p>Foodly Inc <br/>
                    10 Brandt Street <br/>
                    Steinbach <br/>
                    Manitoba, R5G 1Y2 <br/>
                    Canada</p>
                    <h2>Check on map</h2>

                </div>
                <div className="contact-address">
                    <h3>GROCERY STORE</h3>
                    <p>Foodly Inc <br/>
                    Suite 109 <br/>
                    273 - 3000 High Way <br/>
                    Whistler, BC, V0N 2B5 <br/>
                    Canada
                    </p>
                    <h2>Check on map</h2>
                </div>
            </div>
            <div className='underline'>
                <p></p>
            </div>
        </div>

        <div className="cont-message">
            <div className="mes-head">
                <h3>LET'S HAVE A CHAT</h3>
            </div>
            <div className="mes-details">
                <div className="message1">
                    <input type="text" name="" id="" placeholder='My Message is...' />
                </div>
                <div className="message2">
                    <div className="mes-name">
                        <input type="text" name="" id="" placeholder='My name is...'/>
                    </div>
                    <div className="mes-email">
                        <input type="text" name="" id="" placeholder='Reply me to email...'/>
                    </div>
                </div>
                <div className="mes-send">
                    <button>SEND MY MESSAGE</button>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Contact
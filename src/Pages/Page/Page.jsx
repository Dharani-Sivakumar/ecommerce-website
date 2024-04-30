import React from 'react'
import '../Page/page.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react';

const Page = () => {
    const [showWholeContent, setshowWholeContent] = useState(true);
    const [showWholeContent1, setshowWholeContent1] = useState(false);
    const [showWholeContent2, setshowWholeContent2] = useState(false);

    const handleClick1 = () => {
        setshowWholeContent(true);
        setshowWholeContent1(false);
        setshowWholeContent2(false);
    };
    
    const handleClick2 = () => {
        setshowWholeContent(false);
        setshowWholeContent1(true);
        setshowWholeContent2(false);
    };
    
    const handleClick3 = () => {
    setshowWholeContent(false);
    setshowWholeContent1(false);
    setshowWholeContent2(true);
};
  return (
    <div className='body'>
        <Navbar/>
        
        <div className='page-title'>
            <h1>OUR STORY</h1>
            <p>with love from the bottom of Foodly heart</p>
        </div> 
        <div className="page-para">
            <p>At Foodly, we believe that all people should have access to fresh, healthy, and affordable food. 
                For us going organic is not a fancy trend that many of gigantic producers see in healthy nutrition, 
                it's about passion, love, and respect to nature and people around. 
                This passion is what drives our family to grow different cultivars of fruits and vegetables for several generations so far.</p>
       <p>Our family is mainly focused on:</p>
       <ul>
        <li>seeds selection according to taste and nutrition values</li>
        <li>growing fruits and vegetables on own fields and orchards</li>
        <li>harmless reservation of products (as frozen, dried and liquid)</li>
        <li>cooking homemade jams, marmalades and seasonings</li>
        <li>exploring new recipes for our products</li>
       </ul>
       <p>
       All this can't be done without a sincere devotion of each member of our family. William and Stacey Whyte are the ones who are at the roots of every new growth season rigorously watching and controlling every stage of how our products is growing. Marie and Tatya are always there to help with caring the plants from seeds to ripe fruits. Marshall, Sonia, and Ellie are specially founded with experiments on the Whyte's kitchen making new spice mixes and sauces. If we are not sharing the same blood, but perceive ourselves as a family by beliefs and values. 
       </p>
        </div>

        <div className='totalcontainer'>
 {showWholeContent && (
        <div className='wholecontent'>
            <div className="title">
            <h2><i>The</i></h2>
            <div className="title1">
            <h3>DISCOVER & ORIGIN</h3>
        </div>
        </div>
    <div className="gridcont">
        <div className='temp1'><p>01</p></div>
        <div className='temp2'>
            <h3>Hand-picked seeds</h3>
            <p>"Every type of seeds is sorted carefully via our proven method to choose the best one with exeptional quality index to be strong and enduring."</p>
        </div>
        <div className='temp3'>
            
          <div className="tempimg">
          <img src="https://foodly-store.myshopify.com/cdn/shop/articles/blog_about_us_01_seeds_large.png?v=1456213793" alt="" />
          <div className='temp'>
            <p>SEEDS</p>
            </div>
          </div>
          
        </div>
        </div>    
            <div className='contfoot'>
            <div className="slide-button">
            <button onClick={handleClick2}>next</button>
            </div>
            <p></p>
            </div>
        </div>
    )}
 
   {showWholeContent1 && (
        <div className='wholecontent1'>
        <div className="title">
                  <h2><i>The</i></h2>
                  <div className="title1">
                  <h3>DISCOVER & ORIGIN</h3>
              </div>
              </div>
          <div className="gridcont">
              <div className='temp1'><p>02</p></div>
              <div className='temp2'>
                  <h3>Planting & growth with love</h3>
                  <p>Every member of our family is dedicated to particular type of plants and everyone is pationated about its growth period taking care during it to get the best possible harvest.</p>
              </div>
              <div className='temp3'>
                 
                <div className="tempimg">
                <img src="https://foodly-store.myshopify.com/cdn/shop/articles/blog_about_us_02_plants_large.png?v=1456213773" alt="" />
                <div className="temp">
                <p>PLANTS</p>
                </div>
                </div>
              </div>
              </div>    
              <div className="contfoot1">
              <div className='slide-button'>
                <button onClick={handleClick1}>back</button>
                <button onClick={handleClick3}>next</button>
            </div>
                  <p></p>
              </div>
        </div>
    )}
   {showWholeContent2 && (
         <div className='wholecontent2'>
         <div className="title">
                   <h2><i>The</i></h2>
                   <div className="title1">
                   <h3>DISCOVER & ORIGIN</h3>
               </div>
               </div>
           <div className="gridcont">
               <div className='temp1'><p>03</p></div>
               <div className='temp2'>
                   <h3>Meticilous harvest process</h3>
                  <p>A lot of efforts is put into last pre-harvest and harvest seasons to gather as much products as possible elliminating any demange to the final product.</p>
               </div>
               <div className='temp3'>
                   
                 <div className="tempimg1">
                 <img src="https://foodly-store.myshopify.com/cdn/shop/articles/blog_about_us_03_harvest_large.png?v=1456213735" alt="" />
                 <div className="temp-1">
                 <p>HARVEST</p>
                 </div>
                 </div>
               </div>
               </div>    
               <div className="contfoot2">
               <div className="slide-button">
               <button onClick={handleClick1}>back</button>
               </div>
                   <p></p>
               </div>
         </div>
    )}
 
 </div>

 <div className="page-para2">
    <p>
    All of Foodly fruits, vegetables, and herbs are grown using sustainable growing methods. This is our one of the main tenants within the crew. Sustainable agriculture is the practice of growing food in a way that preserves and enhances the environment, provides economic opportunity and good health for individuals and communities, and connects people to the land around them. We do not use chemical fertilizers or pesticides and distribute our food only to local communities nearby so Foodly products stay fresh and healthy.
    </p>
    <div className="page-img">
        <img src="https://cdn.shopify.com/s/files/1/1082/5190/files/about_us_01_large.jpg?6524654464581009306" alt="" />
        <img src="https://cdn.shopify.com/s/files/1/1082/5190/files/about_us_02_large.jpg?2629191645331028151" alt="" />
        <img src="https://cdn.shopify.com/s/files/1/1082/5190/files/about_us_03_large.jpg?17259979312139727492" alt="" />
        </div>
        <p>Instead, we use biological control methods to be sure of our products safety.
In order to control pests, beneficial bugs are introduced into the crop. This is a natural alternative to using harmful chemicals. Using biological control methods leaves a smaller impact to the environment and allowing us be a progressive organic farm. Relying on the traditions, we have built a sustainable production of products with high nutrition value and safety for you health combining the principles of our ancestors and innovative approaches of the young generation.
</p>
<p>
We are proud of our roots, but are always looking to grow like our dear plants ;)
</p>
<p>If you have any question you may <span className='page-link'>drop us a line.</span></p>
 </div>
        <Footer/>
    </div>
  )
}

export default Page
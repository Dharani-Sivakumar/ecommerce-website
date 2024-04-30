import React from 'react'
import '../Home/home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Home = () => {

    const [showParent1, setShowParent1] = useState(true);
    const [showParent2, setShowParent2] = useState(false);
    const [showParent3, setShowParent3] = useState(false);

    const handleSlide1Click = () => {
        setShowParent1(true);
        setShowParent2(false);
        setShowParent3(false);
        // console.log("hi");
    };

    const handleSlide2Click = () => {
        setShowParent1(false);
        setShowParent2(true);
        setShowParent3(false);
    };

    const handleSlide3Click = () => {
        setShowParent1(false);
        setShowParent2(false);
        setShowParent3(true);
    };

    const [quantity, setQuantity] = useState(1);
    const price = 4.25;

    const handleChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity >= 0 ? newQuantity : 0);
    };

    const getTotal = () => {
        return (price * quantity).toFixed(2);
    };
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
    <div className='wholeparent'>
    
    <div className={`parent1 ${showParent1 ? 'show' : ''}`}>
            <div className="child1">
                <h3>TOMATO SEASON</h3>
                <p>nutritious delicious</p>
            </div>
            <div className='child2'>
                <h3>$3.05</h3>
                <p>start point</p>
            </div>
        </div>
        <div className={`parent2 ${showParent2 ? 'show' : ''}`}>
            <div className="child3">
                <h3>PAELLA OR PASTA?</h3>
                <p>you'll need this sweet pepper for both</p>
            </div>
            <div className="child4">
                <h3>$6.95</h3>
                <p>start point</p>
            </div>
        </div>
        <div className={`parent3 ${showParent3 ? 'show' : ''}`}>
            <div className="child5">
                <h3>APPLE PIE?</h3>
                <p>of Gala Cultivar</p>
            </div>
            <div className="child6">
                <h3>$3.55</h3>
                <p>start point</p>
            </div>
            <div className="child7">
                <h3>YES, <b>PLEASE!</b></h3>
                <p>Mmmm....</p>
            </div>
        </div>
    
        <div className='slider'>
        <div className="slide1" onClick={handleSlide1Click}>
                <img src="https://foodly-store.myshopify.com/cdn/shop/files/img_thumb_homepage_slide_1_3646b5c7-695e-4d0f-9e50-3c90ef410fbf_150x.jpg?v=1613153202" alt="" />
            </div>
            <div className="slide2" onClick={handleSlide2Click}>
                <img src="https://foodly-store.myshopify.com/cdn/shop/files/img_thumb_homepage_slide_2_0e49cdfc-a372-4dd9-a54a-1ac37bcd648a_150x.jpg?v=1613153202" alt=""/>
            </div>
            <div className="slide3" onClick={handleSlide3Click}>
                <img src="https://foodly-store.myshopify.com/cdn/shop/files/img_thumb_homepage_slide_3_7d484d7e-7ff3-4e10-b498-a27b89910779_150x.jpg?v=1613153202" alt="" />
            </div>
        </div>
        </div>
    <div className="wholeparent2">
           
           <div className="grid1-1">
                
                <div className='start1'>
                    <h3>START YOUR DAY</h3>
                    <p>with vit-plate</p>
                </div>
                <div className='start2'>
                    <h3>special pack</h3>
                </div>
                <div className='start3'></div>
                <div className='start4'>
                    <p>Healthy deal</p>
                </div>
                <div className='bg'></div>
            </div>
            <div className="grid2">
            <div className='start5'>
                    <h3>C-OVERLOAD</h3>                        
                </div>
                <div className='start6'>
                    <h3>20% discount</h3>
                </div>
                <div className='start7'></div>
                <div className='start8'>
                    <p>September deal</p>
                </div>
                <div className='bg'></div>
            </div>
           
        </div>
        <div className="totalgrid-container">
<div className="totalgrid">
    
   
<Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='set1'>
        <div className='line1'>
           <div className='backg1'>
                <div className='circle1'>
                    <p>$2.29</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Basil</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | Bunch</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg2'>
                <div className='circle1'>
                    <p>$8.05</p>
                </div>
                <div className="circle2">
                    <p>sale</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Brandywine Tomatoes</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg3'>
            <div className="index"><p></p></div>
            <div className='circle1'>
                    <p>$12.00</p>
                </div>
                <div className="circle3">
                    <p>sold out</p>
                </div> 
            </div>
            
            <div className='border'>
                <h3>C - OVERLOAD</h3>
                <p><span className='black'>Harvest 2015</span> | Out of stock</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg4'>
                <div className='circle1'>
                    <p>$11.00</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Campari Tomatoes</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="set2">
            <div className='line1'>
           <div className='backg5'>
                <div className='circle1'>
                    <p>$6.95</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Capia Pepper</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg6'>
                <div className='circle1'>
                    <p>$3.74</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Cherry Tomatoes</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | red</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg7'>
                <div className='circle1'>
                    <p>$6.90</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Cherry Tomatoes 2016</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg8'>
                <div className='circle1'>
                    <p>$16.80</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Cucumber</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>
                </div>
                </SwiperSlide>
        <SwiperSlide>
        <div className="set3">
        <div className='line1'>
           <div className='backg9'>
                <div className='circle1'>
                    <p>$1.99</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Damson Plums</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg10'>
                <div className='circle1'>
                    <p>$2.89</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Empire Apples</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg11'>
                <div className='circle1'>
                    <p>$9.39</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Fuji Apples</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg12'>
                <div className='circle1'>
                    <p>$4.39</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Gala Apples</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>
            </div>
        </SwiperSlide>
        <SwiperSlide><div className="set4">
        <div className='line1'>
           <div className='backg13'>
                <div className='circle1'>
                    <p>$2.30</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Golden Delicious Apples</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg14'>
                <div className='circle1'>
                    <p>$2.99</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Green Beans</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg15'>
                <div className='circle1'>
                    <p>$13.00</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Leek</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg16'>
                <div className='circle1'>
                    <p>$2.11</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Maynard Plums</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
        <div className="set5">
        <div className='line1'>
           <div className='backg17'>
           <div className="index"><p></p></div>
            <div className='circle1'>
                    <p>$1.75</p>
                </div>
                <div className="circle3">
                    <p>sold out</p>
                </div> 
            </div>
            
            <div className='border'>
                <h3>Parsley</h3>
                <p><span className='black'>Harvest 2015</span> | Out of stock</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg18'>
           <div className="index"><p></p></div>
            <div className='circle1'>
                    <p>$2.49</p>
                </div>
                <div className="circle3">
                    <p>sold out</p>
                </div> 
            </div>
            
            <div className='border'>
                <h3>Radishes</h3>
                <p><span className='black'>Harvest 2015</span> | Out of stock</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg19'>
                <div className='circle1'>
                    <p>$5.04</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Red Bell Pepper</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg20'>
                <div className='circle1'>
                    <p>$4.25</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Stanley Plums</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="set6">
        <div className='line1'>
           <div className='backg21'>
                <div className='circle1'>
                    <p>$2.85</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Strawberries</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | lb</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg22'>
                <div className='circle1'>
                    <p>$15.00</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Sweet Grapes</h3>
                <p> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg23'>
                <div className='circle1'>
                    <p>$6.05</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Thompson Seedless Grapes</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>

           <div className='line1'>
           <div className='backg24'>
                <div className='circle1'>
                    <p>$24.89</p>
                </div>
                <div className="hover1"></div>
            </div>
            <div className='border'>
                <h3>Vit-plate</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
           </div>
            </div>
        </SwiperSlide>
      </Swiper>
    
</div>
</div>
  
  <div className="wholeparent-container">
  <div className='wholeparent3'>
    <div className='section1'>
        <div className="section-heading">
            <h2><i>Fall</i></h2>
            <div className="section-heading1">
            <h3>SPECIAL OFFER</h3>
        </div>
        </div>
        <div className='product-title'>
                <h3>Stanley Plums</h3>
                <p><span className='black'>Harvest 2015</span> | In stock | kg</p>
            </div>
        <div className="product-price">
            <h2>$4.25</h2>
            <p>per kilogram</p>
            </div>  
            <div className="product-count">
            <input type="number" value={quantity} id="quantity" onChange={handleChange} />
            <p>X ${price.toFixed(2)}</p>
            <p>=</p>
            <p className='total-price'>${quantity > 0 ? getTotal() : '0.00'}</p>
        </div> 
            <div className="bag-button">
                <button>ADD TO BAG</button>
                </div>   
    </div>
    <div className='section2'>
        <img src="https://foodly-store.myshopify.com/cdn/shop/files/img_homepage_special_product_600x.png?v=1613151516" alt="" />
    </div>
  </div>
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

 <div className="yellowbox">
    <div className="yellow1">
        <div className="yellowgrid1">
        <div className="fam">
            <h2><i>Family</i></h2>
            <div className="fam1">
            <h3>BUSINESS <br />
            VALUES <br />
            ATTITUDE
            </h3>
        </div>
        </div>
        </div>
        <div className="yellowgrid2">
            <div className="fam3">
                <p>Join folks at Foodly family to get the latest news and the best offers</p>
            </div>
            <div className="fam4">
                <input type="text" placeholder='Your e-mail'/>
                <button><b>Subscribe</b></button>
            </div>
        </div>
    </div>
 </div>

<div className="feedback">
    <div className="fead-head">
    <div className="feed-title">
            <h2><i>Happy</i></h2>
            <div className="feed-title1">
            <h3>CUSTOMER FEEDBACK</h3>
        </div>
        </div>
    </div>
    <div className="feedback-grid">
    <div className="feed-grid">
    <div className="feed">
    
        <img src="https://foodly-store.myshopify.com/cdn/shop/articles/feedback_01_grande.jpg?v=1473936155" alt="" />
    </div>
    </div>
    <div className="feed-grid1">
       <div className="feed1">
       <h2><b>
Ruth Henderson</b></h2>
<h4>Vegetarian enthusiast</h4>
<p>I'm ordering the pack of fresh veggs every week. Placing order on Sunday/Monday I get all the goodies on Tuesday right to my home. It’s so amazing to have everything fresh and knowing who have been responsible for the food you eat. Love you guys! Looking forward for more yummmy stuff from you :D</p>
<h4>Ask anything about her experience on Twitter</h4>
<h5>@RuthHS</h5>
       </div>

    </div>
    </div>
</div>

 <Footer/>
    </div>
  )
}

export default Home
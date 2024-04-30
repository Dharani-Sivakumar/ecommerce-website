import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { BsCaretDown } from "react-icons/bs";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import '../Recipes/recipes.css'
import Footer from '../../Components/Footer/Footer'

const Recipes = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
  return (
    <div>
        <Navbar/>
        <div className='recipe-title'>
            <h1>RECIPES</h1>
            <p>with love from the bottom of Foodly heart</p>
        </div>
        <div className="recipe-cont">
        <div className="recipe-sort">
                    <button onClick={toggleDropdown} className="dropbtn1">
                        Sort By <span className='down1'><BsCaretDown />

</span>
                    </button>
                    {isOpen && (
                        <div className="dropdown-content1">
                            <button>Sort by</button>
                            <button>None</button>
                            <button>by title: A-Z</button>
                            <button>by title: Z-A</button>
                            <button>by date: new to old</button>
                            <button>by date: old to new</button>
                        </div>
                    )}
                </div>
                </div>
                <div className='recipe-alpha'>
                    
                       <div className="alphabets">
                        <div className='a-b'>
                            <h2>A</h2>
                            <p>almonds</p>
                            <p>apple</p>
                            <p>apples</p>
                            <h2>B</h2>
                            <p>baked</p>
                            <p>bakery</p>
                            <p>baking</p>
                            <p>balsamic</p>
                            <p>balsamic vinegar</p>
                            <p>basil</p>
                        </div>
                        <div className="b-c">
                            <p>berries</p>
                            <p>berries desert</p>
                            <p>brocollini</p>
                            <h2>C</h2>
                            <p>campari</p>
                            <p>campari tomatoes</p>
                            <p>capia pepper</p>
                            <p>cherry tomatoes</p>
                            <p>chili</p>
                        </div>
                        <div className="c-f">
                            <p>corn oil</p>
                            <h2>D</h2>
                            <p>eggs</p>
                            <p>empire apples</p>
                            <h2>F</h2>
                            <p>fall</p>
                            <p>fresh</p>
                            <p>froxen</p>
                            <p>frozen</p>
                        </div>
                        <div className={`f-g ${showMore ? '' : 'hide'}`}>
                            <p>fruit</p>
                            <p>fruits</p>
                            <p>fuji apples</p>
                            <h2>G</h2>
                            <p>gala apples</p>
                            <p>galette</p>
                            <p>garlic</p>
                            <p>ginger</p>
                            <p>goldendelicious apples</p>
                            <p>grapes</p>
                        </div>
                        <div className={`g-k ${showMore ? '' : 'hide'}`}>
                            <p>green</p>
                            <p>green mixed spice</p>
                            <p>greens</p>
                            <p>grill</p>
                            <h2>H</h2>
                            <p>herbal</p>
                            <p>herbs</p>
                            <p>hot</p>
                            <h2>J</h2>
                            <p>jam</p>
                            <h2>K</h2>
                        </div>
                        <div className={`k-o ${showMore ? '' : 'hide'}`}>
                            <p>kabocha squash</p>  
                            <h2>L</h2>
                            <p>lemon</p>
                            <p>liquid</p>
                            <h2>M</h2>
                            <p>maynard plums</p>
                            <p>mustard</p>
                            <h2>O</h2>
                            <p>oregano</p>
                            <p>organic corn oil</p>
                        </div>
                        <div className={`p-p ${showMore ? '' : 'hide'}`}>
                            <h2>P</h2>
                            <p>paella</p>
                            <p>paprika</p>
                            <p>paprika &  pepper</p>
                            <p>parslay</p>
                            <p>parsley</p>
                            <p>pasta</p>
                            <p>pastry</p>
                            <p>peaches</p>
                        </div>
                        <div className={`p-r ${showMore ? '' : 'hide'}`}>
                            <p>pepper</p>
                            <p>pesto</p>
                            <p>pie</p>
                            <p>pizza</p>
                            <p>plums</p>
                            <p>pumpkin</p>
                            <h2>R</h2>
                            <p>radishes</p>
                            <p>raspberries</p>
                            <p>raspberry</p>
                        </div>
                        <div className={`r-r ${showMore ? '' : 'hide'}`}>
                            <p>red bell pepper</p>
                            <p>red european pluns</p>
                            <p>red mixed spice</p>
                            <p>red onions</p>
                            <p>redkabocha squash</p>
                            <p>rice</p>
                            <p>risotto</p>
                            <p>roast</p>
                        </div>
                        <div className={`r-s ${showMore ? '' : 'hide'}`}>
                            <p>rosemary</p>
                            <h2>S</h2>
                            <p>salsa</p>
                            <p>sauce</p>
                            <p>sause</p>
                            <p>shrimps</p>
                            <p>soup</p>
                            <p>spinach</p>
                            <p>spring</p>
                            <p>squash</p>
                            <p>stanley plums</p>
                        </div>
                        <div className={`t-w ${showMore ? '' : 'hide'}`}>
                            <h2>T</h2>
                            <p>thompson seedless grapes</p>
                            <p>tomatoes</p>
                            <h2>V</h2>
                            <p>veg mixed spice</p>
                            <p>vegetables</p>
                            <h2>W</h2>
                            <p>winter</p>
                            <p>winter pumpkin</p>
                        </div>
                        <button onClick={toggleShowMore}>
                        <FaPlus className='plus'/>
                {showMore ? 'Show Less' : 'Show More'}
            </button>
                       </div>
                        
                </div>
        <div className="recipe-fullcont">
            <div className="recp1">
            <img src="https://foodly-store.myshopify.com/cdn/shop/articles/Plum_Freezer_Jam_with_Cardamon_and_Ginger_large.png?v=1462438245" alt="" />
            <h2>Plum Freezer Jam with Cardamon and Ginger</h2>
            <p>February 23, 2016</p>
            <h4>Neither long simmering nor heat-canned, this vibrant, lightly spiced jam couldn't be simpler to prepare. Red-fleshed plums lend a gorgeous garnet color, but any variety works well. </h4>
            <p>by Ann Reed</p>
            <p className='recp-line'></p>
            </div>
            <div className="recp1">
                <img src="https://foodly-store.myshopify.com/cdn/shop/articles/Risotto_with_Kale_Pesto_large.png?v=1462438343" alt="" />
            <h2>Oven Risotto with Kale Pesto</h2>
            <p>February 23, 2016</p>
            <h4>If you have a ton of kale at home, this is a great use for it. This combination of rice and kale make them perfect candidates for a gorgeous veggie dinner.</h4>
            <p>by Ann Reed</p>
            <p className='recp-line'></p>
            </div>
            <div className="recp1">
                <img src="https://foodly-store.myshopify.com/cdn/shop/articles/pasta-pomodoro-with-shrimp-horiz-a-800_grande_99f8f7fb-8733-41b3-82db-3e2641572e56_large.jpg?v=1456216102" alt="" />
                <h2>Pasta Pomodoro with Shrimp</h2>
            <p>February 23, 2016</p>
            <h4>What's your go-to quick midweek meal? Shrimps should be on your quick meal list. Tossing them with quickly cooked fresh tomatoes, garlic, and basil, the way how you get excellent filling to your pasta.</h4>
            <p>by Ann Reed</p>
            <p className='recp-line'></p>
            </div>
            <div className="recp1">
                <img src="https://foodly-store.myshopify.com/cdn/shop/articles/Spinach-Puffs_large.jpg?v=1462445399" alt="" />
                <h2>Spinach Puffs</h2>
            <p>February 23, 2016</p>
            <h4>Serve these little spinach pies with a main course as your vegetable side and dinner roll in one, or eat a couple for a vegetarian dinner—they're that good.</h4>
            <p>by Ann Reed</p>
            <p className='recp-line'></p>
            </div>
            <div className="recp1">
                <img src="https://foodly-store.myshopify.com/cdn/shop/articles/Pasta_with_Swordfish_and_Cherry_Tomato_Sauce_large.png?v=1462438823" alt="" />
                <h2>Pasta with Swordfish and Cherry Tomato Sauce</h2>
            <p>February 23, 2016</p>
            <h4>This recipe is the epitome of Sicily with the swordfish, pine nuts, and golden raisins. It is fun to make and even better to eat taking you to Sicily island.</h4>
            <p>by Ann Reed</p>
            <p className='recp-line'></p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Recipes
import React from 'react'
import '../Blog/blog.css'
import Navbar from '../../Components/Navbar/Navbar'
import { BsCaretDown } from "react-icons/bs";
import { useState } from 'react';
import Footer from '../../Components/Footer/Footer'

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div>
        <Navbar/>
        <div className='blog-title'>
            <h1>BLOG</h1>
            <p>with love from the bottom of Foodly heart</p>
        </div>
        <div className="blog-cont">
        <div className="blog-sort">
                    <button onClick={toggleDropdown} className="dropbtn">
                        Sort By <span className='down'><BsCaretDown />

</span>
                    </button>
                    {isOpen && (
                        <div className="dropdown-content">
                            <button>Sort by</button>
                            <button>None</button>
                            <button>by title: A-Z</button>
                            <button>by title: Z-A</button>
                            <button>by date: new to old</button>
                            <button>by date: old to new</button>
                        </div>
                    )}
                </div>
                <div className='blog-alpha'>
                    <div className="a"><h2>A</h2><button>apple</button></div>
                    <div className="a"><h2>H</h2><button>harvest 2015</button></div>
                    <div className="a"><h2>N</h2><button>news</button></div>
                    <div className="a"><h2>R</h2><button>raspberries</button></div>
                </div>
        </div>
        <div className='blog-items'>
            <div className='blog-img'>
                <img src="https://foodly-store.myshopify.com/cdn/shop/articles/blog_news_02_large.jpg?v=1456213877" alt="" />
            </div>
            <div className='blog-head'>
                <h4>What We Got This Fall</h4>
                <p>February 23, 2016</p>
            </div>
            <div className='blog-auth'>
                <h5>by Ann Reed</h5>
                <p></p>
            </div>
        </div>
        <div className='blog-items'>
            <div className='blog-img'>
                <img src="https://foodly-store.myshopify.com/cdn/shop/articles/blog_news_01_large.jpg?v=1456213854" alt="" />
            </div>
            <div className='blog-head'>
                <h4>Apple Harvest 2015</h4>
                <p>February 23, 2016</p>
            </div>
            <div className='blog-auth'>
                <h5>by Ann Reed</h5>
                <p></p>
            </div>
        </div>
        <div className='blog-items'>
            <div className='blog-img'>
                <img src="https://foodly-store.myshopify.com/cdn/shop/articles/article_01_large.jpg?v=1456213578" alt="" />
            </div>
            <div className='blog-head'>
                <h4>Raspberries Harvest 2015</h4>
                <p>February 23, 2016</p>
            </div>
            <div className='blog-auth'>
                <h5>by Ann Reed</h5>
                <p></p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog
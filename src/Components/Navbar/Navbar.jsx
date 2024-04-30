import React from 'react'
import { RiSearchEyeLine } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
     <div className='navbar'>
        <div className='nav-icon'>
        <RiSearchEyeLine className='icon1-1'/>
        <p>USD <FaPlus className='plus'/></p>
        </div>
        <div className="nav-mid">
            <p>Organic food by Whytes'</p>
            <img src="https://foodly-store.myshopify.com/cdn/shop/files/logo_81149f76-33f4-4e96-9653-e9b0474902fe_x96.png?v=1613153201" alt="" />
            <p>from Manitoba, Canada</p>
        </div>
        <div className="nav-end">
            <div className="count">0</div>
            <p>$0.00</p>
            <TbShoppingBagCheck className='icon2'/>
        </div>
    </div>
    <div className='total-nav'>
    <div className="navbar1">
      <div className="pages">
        <Link to="/"><p>Home <FaPlus className='plus'/></p></Link>
        <Link to="/Products"><p>Products <FaPlus className='plus'/></p></Link>
        <Link to="/Blog"><p>Blog</p></Link>
        <Link to="/Recipes"><p>Recipes</p></Link>
        <Link to="/Page"><p>Pages <FaPlus className='plus'/></p></Link>
        <Link to="/Contacts"><p>Contact</p></Link>
        <Link to="/Login"><p>Login</p></Link>
      </div>
    </div>
    </div>
   </>
  )
}

export default Navbar
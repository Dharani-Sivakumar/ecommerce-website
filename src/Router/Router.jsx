import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Product'
import Blog from '../Pages/Blog/Blog'
import Recipes from '../Pages/Recipes/Recipes'
import Page from '../Pages/Page/Page'
import Contact from '../Pages/Contacts/Contact'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Products' element={<Products />}/>
            <Route path='/Blog' element={<Blog />}/>
            <Route path='/Recipes' element={<Recipes />}/>
            <Route path='/Page' element={<Page />}/>
            <Route path='/Contacts' element={<Contact />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Register' element={<Register />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router
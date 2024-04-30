import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import '../Products/product.css'
import Footer from '../../Components/Footer/Footer'


const Product = () => {
  return (
    <div>
        <Navbar/>
       <div className='product-title'>
        <h1>PRODUCT COLLECTIONS</h1>
        </div> 
        <div className="product-wholegrid">
            <div className="product-grid">
                <div className="grid1">
                    <div className="cont1-1">
                        <img src="https://foodly-store.myshopify.com/cdn/shop/collections/collection_01_all_large.png?v=1455630745" alt="" />
                    </div>
                    <div className="cont2-1">
                        <p>All products</p>
                    </div>
                </div>
                <div className="grid1">
                <div className="cont1-1">
                    <img src="https://foodly-store.myshopify.com/cdn/shop/collections/collection_02_fresh_large.png?v=1455202997" alt="" />
                    </div>
                    <div className="cont2-1">
                        <p>Fresh</p>
                    </div>
                </div>
                <div className="grid1">
                <div className="cont1-1">
                    <img src="https://foodly-store.myshopify.com/cdn/shop/collections/collection_03_frozen_large.png?v=1455263893" alt="" />
                    </div>
                    <div className="cont2-1">
                        <p>Frozen</p>
                    </div>
                </div>
                <div className="grid1">
                <div className="cont1-1">
                    <img src="https://foodly-store.myshopify.com/cdn/shop/collections/collection_04_dried_large.png?v=1455263955" alt="" />
                    </div>
                    <div className="cont2-1">
                        <p>Dried</p>
                    </div>
                </div>
                <div className="grid1">
                <div className="cont1-1">
                    <img src="https://foodly-store.myshopify.com/cdn/shop/collections/collection_05_liquid_large.png?v=1455263995" alt="" />
                    </div>
                    <div className="cont2-1">
                        <p>Liquid</p>
                    </div>
                </div>
                <div className="grid1">
                <div className="cont1-1">
                    <img src="https://foodly-store.myshopify.com/cdn/shop/collections/collection_06_sale_large.png?v=1456211951" alt="" />
                    </div>
                    <div className="cont2-1">
                        <p>Sale</p>
                    </div>
                </div>
                <div className="grid1">
                <div className="cont1-1">
                    <img src="https://foodly-store.myshopify.com/cdn/shop/collections/collection_07_specials_large.png?v=1482505449" alt="" />
                    </div>
                    <div className="cont2-1">
                        <p>Specials</p>
                    </div>
                </div>
                <div className="grid1">
                <div className="cont1-1">
                    <img src="https://foodly-store.myshopify.com/cdn/shop/collections/collection_08_cooked_large.png?v=1482505817" alt="" />
                    </div>
                    <div className="cont2-1">
                        <p>Cooked</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Product
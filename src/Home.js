import React from 'react'
import Product from "./Product";
import "./Home.css"

function Home() {
    return (
        <div className="home">
           <img
           className="home_image"
           src="https://m.media-amazon.com/images/S/abs-image-upload-na/c/AmazonStores/ATVPDKIKX0DER/46ce39b478a48bc311d9ebcceaab26f2.w1500.h400._CR0%2C0%2C1500%2C400_SX1500_.jpg" 
           alt=""/>

           {/* Product id, title, price, rating, image*/}
           <div className="home_row">
           <Product
            id="1234122"
            title="The lean Startup: How constant Inovation Creates"
            price={199.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81nxFC7UYFL._AC_SL1500_.jpghttps://images-na.ssl-images-amazon.com/images/Ihttps://m.media-amazon.com/images/I/61sEPbO97GL.jpg/61u3pEm18iL._AC_UL160_SR160,160_.jpghttps://m.media-amazon.com/images/I/61sEPbO97GL.jpg"
           />
           <Product
            id="1234122"
            title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            price={257.82}
            rating={5}
            image="https://m.media-amazon.com/images/I/71UyNLSv2mL._AC_UL320_.jpg"
           />
           </div>
           
           <div className="home_row">
           <Product
            id="1234122"
            title="AmazonBasics Medium Hard Camera Case - 18 x 14 x 6 Inches, Black"
            price={1663.76}
            rating={5}
            image="https://m.media-amazon.com/images/I/910ILT7DxGL._AC_UL320_.jpg"
           />
           <Product
            id="1234122"
            title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
            price={682.41}
            rating={5}
            image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg"
           />
           <Product
            id="1234122"
            title="Anker 6ft Premium Nylon Lightning Cable [2-Pack], MFi Certified for iPhone Chargers, iPhone SE/Xs/XS Max/XR/X / 8 Plus / 7/6 Plus, iPad Pro Air 2, and More(Black)"
            price={282.79}
            rating={5}
            image="https://m.media-amazon.com/images/I/71CeJKOpeiL._AC_UL320_.jpg"
           />
           </div>
           <div className="home_row">
           <Product
            id="1234122"
            title="AmazonBasics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 16 Deep Pockets - Queen, Dark Grey"
            price={332.72}
            rating={5}
            image="https://m.media-amazon.com/images/I/71ROFJE-8nL._AC_UL320_.jpg"
           />
           </div>
           {/* Product */}
        </div>
    )
}

export default Home

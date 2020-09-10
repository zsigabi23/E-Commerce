import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket, user }] = useStateValue();

    console.log(basket);

    return (
        <nav className="header">
            {/*Logo on the left*/}
           <Link to="/"><img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></Link>

            {/*Search Box*/}
            <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
            </div>

            {/*3 Links*/}
            <div className="header_nav">
                <Link to="/login" className="header_link">
                <div className="header_option">
    <span className="header_optionLineOne">Hello {user}</span>
                <span className="header_optionLineTwo">Sign In</span>
                </div>
                </Link>

                <Link to="/" className="header_link">
                <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
                </div>
                </Link>

                <Link to="/" className="header_link">
                <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
                </div>
                </Link>
            </div>
            {/*Basket icon with number*/}
            <Link to="./checkout" className="header_link">
                <div className="header_optionBasket">
                    {/*Shopping basket Icon*/}
                    <ShoppingBasketIcon />
                    {/*Number of items in the basket*/}
    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
            </Link>
        </nav>
    );
}

export default Header

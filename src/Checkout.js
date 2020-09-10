import React from 'react'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import CurrencyFormat from "react-currency-format"
import "./Checkout.css"
import Subtotal from "./Subtotal"

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">

            <img className="checkout_ad" src="https://i.imgur.com/FRXqJCI.jpg"
            alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>

                    {/* List of all Checkout products */}

                    {basket.map(item =>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                         />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div>
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout

import React, { useContext } from "react";
import "./ChooseItem.css";
// import { CartContext } from "../../context/cartContext";

function ChooseItem({ items }) {
    //let { items } = props;
    console.log(items)

    // let [cartItem, setCartItem] = React.useContext(CartContext);
    return (
        <div className="item" >
            <div className="img-wrapper1" >
                <img src={items.searchImage} alt="product-img" />
            </div>
            <div className="content-wrapper1">
                <h3 className="brand-name1" >{items.brand}</h3>
                <h4 className="brand-desc1" > {items.additionalInfo}</h4>
                <h5>
                    <span className="b-d-price1">Rs. {items.price}</span>
                    {items.discountDisplayLabel ? (
                        <span className="b-price1">Rs. {items.mrp}</span>
                    ) : null}
                    <span className="b-discount1">{items.discountDisplayLabel}</span>
                </h5>
                <button className="add-to-cart-btn1">
                    Add to Cart
                </button>
            </div>
        </div>
        // <div>hi</div>
    )
};

export default ChooseItem;

import React, { useContext } from "react";
import "./Products.css";
// import { CartContext } from "../../context/cartContext";
import ChooseItem from "../../ChooseItem/ChooseItem"
const Product = ({ data, item, index, setItem }) => {
  //let { item } = props;
  //console.log(data)
  function selectProduct() {
    const newItem = data[index];
    console.log("hi")
    console.log(newItem)
    setItem(newItem)
    //setIndex(index)
  }
  //let [cartItem, setCartItem] = React.useContext(CartContext);
  return (
    <div className="each-item">
      <div className="img-wrapper" onClick={selectProduct}>
        <img src={item.searchImage} alt="product-img" />
      </div>
      <div className="content-wrapper">
        <h3 className="brand-name" onClick={selectProduct}>{item.brand}</h3>
        <h4 className="brand-desc" onClick={selectProduct}> {item.additionalInfo}</h4>
        <h5>
          <span className="b-d-price">Rs. {item.price}</span>
          {item.discountDisplayLabel ? (
            <span className="b-price">Rs. {item.mrp}</span>
          ) : null}
          <span className="b-discount">{item.discountDisplayLabel}</span>
        </h5>
        <button className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

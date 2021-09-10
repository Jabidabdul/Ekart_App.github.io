import React from "react";
// import Loader from "../Loding/Loading";
import Product from "../Product/Product";
import "./Lists.css"
import ChooseItem from "../../ChooseItem/ChooseItem"
function List({ setAdd }) {
  let [data, setData] = React.useState(null);
  let [choose, setChoose] = React.useState(null);
  React.useEffect(() => {
    fetch('https://demo7242716.mockable.io/products')
      .then(res => res.json())
      .then(data => setData(data.products))
    console.log(data);
    // let res = await fetch("https://demo7242716.mockable.io/products");
    // let data = await res.json();
    // console.log(data);
    // setData(data.products);
  }, []);

  return (
    <div className="each-item-wrapper">
      {data ? (!choose) ? (
        data.map((eachItem, index) => {
          // { console.log(data) }
          return <Product setAdd={setAdd} setItem={setChoose} item={eachItem} index={index} data={data} />;
        })
      ) : (
        <ChooseItem setAdd={setAdd} items={choose} />
      ) : <div>Loading</div>
      }
    </div>
  );
}

//promises in js

//fetch return me a promise
export default List;

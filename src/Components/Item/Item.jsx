import React from "react";
import "./Item.css";
const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt=""></img>
      <p>{props.name}</p>
      <div className="item-price-new">
        <p>${props.new_price}</p>
      </div>
      <div className="item-price-old">
        <p>${props.old_price}</p>
      </div>
    </div>
  );
};
export default Item;

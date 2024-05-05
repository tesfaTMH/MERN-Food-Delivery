import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id] ? (
          /*<img className='add' onClick={()=>setItemCount(prev => prev + 1)} src={assets.add_icon_white} />*/
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            {/*<img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />*/}
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            {/*<img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />*/}
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

import React, { useState } from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import Cart from "./Cart";
import {useHistory} from 'react-router-dom'

const Header = (props) => {
  

   const {addToCart,cartItems,setCartItems} = props
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  console.log(isCartOpen);
  const history=useHistory()
  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }
console.log(cartItems)
  return (
    <Body>
      <h4 onClick={()=>history.push("/home")}>Guga's Bakery</h4>
      <div className="icon-container">
        <IconContext.Provider value={{ size: "30px" }}>
          <FaShoppingCart style={{ cursor: "pointer" }} onClick={toggleCart} />
        </IconContext.Provider>
        <span>CARRINHO</span>
        <div className="quantity-holder">{cartItems.length}</div>
      </div>
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        toggleCart={toggleCart}
        
      />
    </Body>
  );
};

export default Header;

const Body = styled.div`
  height: 80px;
  width: 100%;
  background: #e8e2c8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  h4 {
    font-size: 28px;
    font-weight: 700;
  }

  .icon-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    font-weight: 700;

    .quantity-holder {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      background: #111111;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

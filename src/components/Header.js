import React, { useState ,useContext} from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import Cart from "./Cart";
import {useHistory} from 'react-router-dom'
import UserContext from "../contexts/UserContext";

const Header = (props) => {
  
  const {setUser} = useContext(UserContext)
   const {cartItems,setCartItems} = props
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  const history=useHistory()
  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <Body >
      <button onClick={() => {localStorage.clear();setUser(null);history.push("/");}}className="logout">
        Logout
      </button>
     
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

  .logout {
    color: #855f13;
    margin-top: 12px;
    margin-bottom: 12px;
    background: #ff9901;
    font-weight: 700;
    outline: none;
    border: none;
    height: 32px;
    width: 140px;
    transition: all 0.5s 0s ease;
    cursor: pointer;
  }

  .logout:hover {
    background: #4b7daf;
    color: #ffffff;
    transition: all 0.5s 0s ease;
  }
`;

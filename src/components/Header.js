import React, { useState } from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import Cart from "./Cart";
import {useHistory} from 'react-router-dom'

const Header = (props) => {
  // const [cartItems, setCartItems] = useState([])

  
    
  //   // {
  //   //   image:
  //   //     "data:image/png;base64,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",
  //   //   name: "bolo",
  //   //   price: 2.5,
  //   //   qtd: 3,
  //   // },
  //   // {
  //   //   image:
  //   //     "data:image/png;base64,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",
  //   //   name: "bolo de fuba",
  //   //   price: 2.5,
  //   //   qtd: 4,
  //   // },
  //   // {
  //   //   image:
  //   //     "data:image/png;base64,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",
  //   //   name: "bolo asdas",
  //   //   price: 2.5,
  //   //   qtd: 1,
  //   // },
  //   // {
  //   //   image:
  //   //     "data:image/png;base64,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",
  //   //   name: "bsdasolo",
  //   //   price: 2.5,
  //   //   qtd: 5,
  //   // },
  //   // {
  //   //   image:
  //   //     "data:image/png;base64,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",
  //   //   name: "boladaso",
  //   //   price: 2.5,
  //   //   qtd: 2,
  //   // },
  // ]);

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

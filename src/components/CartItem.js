import React from "react";
import styled from "styled-components";
import { AiFillMinusCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const CartItem = (props) => {
  const { image, name, price, qtd, cartItems, setCartItems } = props;
  let priceToDisplay = price/100;
  priceToDisplay = priceToDisplay.toFixed(2).toString().replace(".", ",");

  function excludeItem(clickedItem) {
    
    const itemIndex = cartItems.findIndex((i)=>i.name===clickedItem)
    const newArray = cartItems.filter((i, index) => index !== itemIndex);
    setCartItems(newArray);
    
    //  const newArray = cartItems.filter((i) => i.name !== clickedItem);
    //  setCartItems(newArray);
  }

  return (
    <Body>
      <img src={image} alt="" />
      <div>
        <div className="container-name">
          <span>{name}</span>
          <span>{`R$ ${priceToDisplay}`}</span>
        </div>
        <div className="container-excluir">
          {/* <span>{`qtd: ${qtd}`}</span> */}
          <span>
            <IconContext.Provider value={{ size: "24px" }}>
              <AiFillMinusCircle
                onClick={() => excludeItem(name)}
                style={{ color: "red", cursor: "pointer" }}
              />
            </IconContext.Provider>
          </span>
        </div>
      </div>
    </Body>
  );
};

export default CartItem;

const Body = styled.div`
  height: 100px;
  flex-shrink: 0;
  margin-bottom: 20px;
  background: #ffffff;
  color: #111;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  justify-content: space-between;

  .container-name,
  .container-excluir {
    display: flex;
    justify-content: space-between;
    width: 200px;
    padding-top: 15px;
    padding-right: 15px;
  }
  img {
    width: 70px;
  }
`;


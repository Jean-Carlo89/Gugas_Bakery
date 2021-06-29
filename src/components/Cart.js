import React, { useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { ImSad } from "react-icons/im";

const Cart = (props) => {
  const { isCartOpen, setCartItems, cartItems, toggleCart } = props;

  function calculateTotal() {
    let totalPrice = 0;

    cartItems.forEach((i) => (totalPrice = totalPrice + i.price));

    return totalPrice;
  }

  calculateTotal();

  function confirmOrder() {
    alert("IR PARA CONFIRMAÇÃO DE COMPRA");
  }

  return (
    <Body display={isCartOpen}>
      <div className="close-cart">
        <span>ÚLTIMOS ADICIONADOS</span>
        <span onClick={toggleCart} style={{ cursor: "pointer", color: "red" }}>
          X
        </span>
      </div>
      {cartItems.length === 0 ? (
        <EmptyWarning>
          Não há items no seu carrinho
          <br />
          <ImSad />
        </EmptyWarning>
      ) : (
        <div className="itens-container">
          {cartItems
            .map((i) => {
              return (
                <CartItem
                  image={i.image}
                  name={i.name}
                  price={i.price}
                  qtd={i.qtd}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              );
            })
            .reverse()}
        </div>
      )}

      <div className="btn-container">
        <div>{`Preço total: R$ ${calculateTotal()
          .toFixed(2)
          .toString()
          .replace(".", ",")}`}</div>
        <button onClick={confirmOrder}>REVISAR COMPRA</button>
      </div>
    </Body>
  );
};

export default Cart;

const Body = styled.div`
  position: fixed;
  top: 92px;
  right: 40px;
  width: 300px;
  min-height: 100px;
  background: #e8e2c8;
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  font-family: "Lato", sans-serif;
  box-shadow: 0px 2px 10px 0px #000000;

  .itens-container {
    display: flex;
    flex-direction: column;
    max-height: 360px;
    width: 100%;
    overflow-y: hidden;
  }
  .close-cart {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 8px;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 12px;
  }

  .btn-container {
    font-size: 16px;
    font-weight: 700;
  }

  button {
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

  button:hover {
    background: #4b7daf;
    color: #ffffff;
    transition: all 0.5s 0s ease;
  }
`;

const EmptyWarning = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 22px;
  margin-bottom: 20px;
  line-height: 40px;
`;

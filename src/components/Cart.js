import React, { useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { ImSad } from "react-icons/im";
import ConfirmationDialog from "./Modals/ConfirmationDialog";
import { Scrollbars } from "react-custom-scrollbars-2";

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(35, 49, 86, 0.8)",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);

const Cart = (props) => {
  const { isCartOpen, setCartItems, cartItems, toggleCart } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  function calculateTotal() {
    let totalPrice = 0;

    cartItems.forEach((i) => (totalPrice = totalPrice + i.price/100));

    return totalPrice;
  }

  function confirmOrder() {
    setIsModalOpen(true);
  }

  return (
    <Body display={isCartOpen}>
      {isModalOpen ? (
        <ConfirmationDialog
          cartItems={cartItems}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          calculateTotal={calculateTotal}
        />
      ) : (
        ""
      )}
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
          <CustomScrollbars
            autoHide
            autoHideTimeout={500}
            autoHideDuration={200}
            autoHeight={true}
            autoHeightMax={300}
          >
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
          </CustomScrollbars>
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
    height: 300px;
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
    margin-top: 12px;
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


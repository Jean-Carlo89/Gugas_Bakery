import React from "react";
import styled from "styled-components";

const ConfirmationItem = (props) => {
  const { name, price, qtd } = props;

  let priceToDisplay = qtd * price;
  priceToDisplay = priceToDisplay.toFixed(2).toString().replace(".", ",");

  return (
    <Body>
      <div>
        <span className="name">{name}</span>
        <span>{`x${qtd}`}</span>
      </div>
      <span>{`R$ ${priceToDisplay}`}</span>
    </Body>
  );
};

export default ConfirmationItem;

const Body = styled.div`
  display: flex;
  width: 100%;
  color: #111111;
  justify-content: space-between;

  span {
    font-size: 22px;
  }
  .name {
    margin-right: 12px;
  }
`;

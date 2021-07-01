import React from "react";
import Modal from "react-modal";
import ConfirmationItem from "../ConfirmationItem";
import "./modal.css";
import { Scrollbars } from "react-custom-scrollbars-2";

///////////// COMPONENTES BIBLIOTECA DO SCROLL////////////////////

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

/////////////////////////////////////////////////////////////////

const ConfirmationDialog = (props) => {
  const { isModalOpen, setIsModalOpen, cartItems, calculateTotal } = props;

  Modal.setAppElement(".root");

  function closeModal() {
    setIsModalOpen(false);
  }

  function sendOrder() {
    alert("PEDIDO ENVIADO");
    setIsModalOpen(false);
  }

  return (
    <Modal
      style={position}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="dialog-box"
    >
      <div className="container">
        <span>Tem certeza que deseja confirmar sua compra?</span>

        <ul className="products-container">
          <CustomScrollbars
            autoHide
            autoHideTimeout={500}
            autoHideDuration={200}
            autoHeight={true}
            autoHeightMax={250}
          >
            {cartItems
              .map((i) => {
                return (
                  <ConfirmationItem name={i.name} price={i.price} />
                );
              })
              .reverse()}
          </CustomScrollbars>
        </ul>
        <span>{`Preço total: R$ ${calculateTotal()
          .toFixed(2)
          .toString()
          .replace(".", ",")}`}</span>
        <div className="btn-container">
          <button className="cancel-button" onClick={closeModal}>
            Não, voltar
          </button>
          <button onClick={sendOrder}>Confirmar</button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;

const position = {
  overlay: { zIndex: 1000 },
};

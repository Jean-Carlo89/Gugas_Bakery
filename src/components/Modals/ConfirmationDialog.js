import React, { useContext } from "react";
import Modal from "react-modal";
import ConfirmationItem from "../ConfirmationItem";
import "./modal.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

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
  const { isModalOpen, setIsModalOpen, cartItems, calculateTotal,setCartItems } = props;

  const { user} = useContext(UserContext);

  Modal.setAppElement(".root");

  function closeModal() {
    setIsModalOpen(false);
  }

  function triggerEmail() {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    const promise = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/sendmail`,
      { price: calculateTotal() },
      config
    );
    promise.then(() => {
      alert("compra realizada com sucesso!");
      closeModal()
      setCartItems([])
      
    });
    promise.catch(() => {
      alert("Algo deu errado. Tente novamente.");
    });
  }

  function makePurchase() {

    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    const promise = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/purchases`,
      { price: calculateTotal() },
      config
    );
    promise.then(() => {
      triggerEmail();
    });
    promise.catch(() => {
      alert("Algo deu errado. Tente novamente.");
    });
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
        <span
          onClick={() => console.log(user)}
        >{`Preço total: R$ ${calculateTotal()
          .toFixed(2)
          .toString()
          .replace(".", ",")}`}</span>
        <div className="btn-container">
          <button className="cancel-button" onClick={closeModal}>
            Não, voltar
          </button>
          <button onClick={makePurchase}>Confirmar</button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;

const position = {
  overlay: { zIndex: 1000 },
};

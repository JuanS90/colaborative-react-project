import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {CartContext, CartDispatchContext,} from "@/pages/context/ShoppingContext.jsx";
import CartItem from "./CartItem";
import { TYPES } from "@/pages/actions/actions";
import Paper from '@mui/material/Paper';


function ModalCompras(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(props.props);
  }, [props.props]);

  const dispatch = useContext(CartDispatchContext);

  const deleteFromCart = (id, all) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };
  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });
  const contenido = useContext(CartContext);
  const { products, cart } = contenido;
  

  return (
    <>
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"grey", }}>
        
          {cart.map((item, index) => (<Paper elevation={24} style={{margin:"0.5rem", padding:"0.8rem"}} >
          <CartItem key={index} item={item} deleteFromCart={deleteFromCart} /></Paper>
          ))}
          
                     </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={clearCart}>Limpiar Carrito</Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCompras;

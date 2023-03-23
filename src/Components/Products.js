import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductReducer, selectProducts, setErrors } from "../redux/slices/productsSlice";
import { deleteProduct, getallProducts } from "../service/api";
import Product from "./Product";

function Products(props) {
  const [products] = useSelector(selectProducts);
  const [showAlert, setShowAlert] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const dispatch= useDispatch();
  const deleteProd = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      deleteProduct(id)
      .then(()=>{
        dispatch(deleteProductReducer(id));
        dispatch(setErrors(null))
      })
      .catch((error)=>{
        dispatch(setErrors(error))
      })
    }
  };
 
  // const buy = (p) => {
  //   if (p.quantity > 0) {
  //     p.quantity--;
  //     setShowAlert(true);
  //     setTimeout(() => {
  //       setShowAlert(false);
  //     }, 2000);
  //   }
  // };
  useEffect(() => {

    console.log("composant a été monté " + showMessage);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    return console.log("composant a été supprimé ");
  }, []);

  useEffect(() => {
    console.log("composant a été modifié " + showMessage);
  }, [showMessage]);

  return (
    <Container style={{ marginTop: "30px" }}>
      {showMessage && (
        <Alert variant="success">
          <Alert.Heading>
            Hey, Welcome To Our Shop <strong> MyStore </strong>{" "}
          </Alert.Heading>
          <p>
            Thank you for choosing our store, we hope you enjoy your shopping
            experience!
          </p>
          <hr />
        </Alert>
      )}
      {showAlert && (
        <Alert style={{ marginTop: "30px" }} variant="primary">
          <p>You Bought an Item</p>
        </Alert>
      )}
      <Row>
        {products.length !==0 ? products.map((product, index) => (
          <Col md={4}  key={product.id}>
            <Product product={product} buyFun={buy} deleteProd={deleteProd}/>
          </Col>
        )) : <p>Product does not exist</p>}
      </Row>
    </Container>
  );
}

export default Products;

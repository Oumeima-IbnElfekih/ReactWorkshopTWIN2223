import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { deleteProduct, getallProducts } from "../service/api";
import Product from "./Product";

function Products(props) {
  const [products,setProducts] =useState([])
  const [showAlert, setShowAlert] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const getList = async()=>{
    const res=  await getallProducts()
    if (res.status ===200)
    setProducts(res.data)
   
   }
   const deleteProd = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
  if (result) {
    await deleteProduct(id);
    getList(); }
}
  useEffect(()=>{
    
     getList();
  },[])
  const buy = (p) => {
    if (p.quantity > 0) {
      p.quantity--;
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };
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
          <Col md={4} key={index}>
            <Product product={product} buyFun={buy} deleteProd={deleteProd}/>
          </Col>
        )) : <p>Product does not exist</p>}
      </Row>
    </Container>
  );
}

export default Products;

import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment } from "../redux/slices/cartSlice";
function Product(props) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(props.product)
  
  const addLikes = (e) => {
    e.preventDefault();
    setProduct({ ...product, like: product.like + 1 });
  };
  const addToCart = (p) => {
    dispatch(increment(p));
  };

    return (
     
      <Card
       style={{ width: "18rem" }} className={ product.like >= 5 ? "text-center bestProduct" :"text-center" } border="secondary">
             <Card.Header>
        <Card.Img
          variant="top"
          src={require("../assets/images/" + product.img)}
          alt="Product Img"
          height={200}
        />
        </Card.Header>
        <Card.Body>
          <Card.Title>
          <Link to={`${product.id}`}>{product.name}</Link>
          
          </Card.Title>
          <Card.Text>Price : {product.price} DT</Card.Text>
          <Card.Text>Quantity :{product.quantity}</Card.Text>
          <Card.Text>Likes :{product.like}</Card.Text>
          
          <Row>
            <Col>
              <Button variant="primary" onClick={addLikes}>Like</Button>
            </Col>
            <Col>
              <Button variant="dark" onClick = {()=> props.buyFun(product)} disabled={product.quantity===0}>Buy</Button>
            </Col>
           
           

          </Row>
          <br></br>
          <Row>
            <Col md={6}>
              {" "}
              <Button variant="success" ><Link to={`/products/update/${product.id}`}>Update Product </Link></Button>
            </Col>
            <Col md={6}>
              <Button variant="danger" onClick={() => props.deleteProd(product.id)}>Delete Product</Button>
            </Col>
            
          </Row>
          <br></br>
        <Row>
          <Col md={12}>
            <Button variant="success" onClick={() => addToCart(product)}>
              ADD TO CART +
            </Button>
          </Col>
        </Row>
        </Card.Body>
      </Card>
    );
  }


export default Product;

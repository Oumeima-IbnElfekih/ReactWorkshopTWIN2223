import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

function Product(props) {
  
  const [product, setProduct] = useState(props.product)
  const addLikes =(e) => {
        setProduct({...product, like : product.like +=1 })

  }
 

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
          <Card.Title>{product.name}</Card.Title>
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
        </Card.Body>
      </Card>
    );
  }


export default Product;

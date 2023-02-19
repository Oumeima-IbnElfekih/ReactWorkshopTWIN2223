import { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product :this.props.product  }
  }
  
  addLikes =(e) => {
      // e.preventDefault();
      console.log(this.state);
      this.setState((oldState)=> ({
          product : {...oldState.product, like : oldState.product.like +=1 }

      }))
  }
 
  render() {   
    return (
     
      <Card
       style={{ width: "18rem" }} className="text-center" border="secondary">
             <Card.Header>
        <Card.Img
          variant="top"
          src={require("../assets/images/" + this.state.product.img)}
          alt="Product Img"
          height={200}
        />
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.state.product.name}</Card.Title>
          <Card.Text>Price : {this.state.product.price} DT</Card.Text>
          <Card.Text>Quantity :{this.state.product.quantity}</Card.Text>
          <Card.Text>Likes :{this.state.product.like}</Card.Text>
          <Row>
            <Col>
              <Button variant="primary" onClick={this.addLikes}>Like</Button>
            </Col>
            <Col>
              <Button variant="dark" onClick = {()=> this.props.buyFun(this.state.product)} disabled={this.props.product.quantity===0}>Buy</Button>
            </Col>
            
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;

import { Component } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import products from "../products.json";
import Product from "./Product";

class Products extends Component {
  
  
  constructor(props) {
    super();
    this.state = { showAlert :false , showMessage: true}
  }
  buy=(p) => {
    if( p.quantity > 0 )
    {p.quantity -- ;
    this.setState({showAlert : true})
    setTimeout(
      ()=>  { this.setState({showAlert : false})}
      ,2000)}
  }
  componentDidMount(){
    console.log('composant a été monté ' + this.state.showMessage)
    setTimeout(
      ()=>  { this.setState({showMessage : false})}
      ,5000)

  }
  componentDidUpdate() {
    console.log('composant a été modifié ' + this.state.showMessage)
  }
  componentWillUnmount(){
    console.log('composant a été supprimé ' )
  }
  render() {
    return (
      <Container style={{ marginTop: "30px" }}>
      {this.state.showMessage &&
      <Alert variant="success">
            <Alert.Heading>Hey, Welcome To Our Shop <strong> MyStore </strong>    </Alert.Heading>
            <p>
            Thank you for choosing our store, we hope you enjoy your shopping experience!
            </p>
            <hr />
          </Alert> }
      {this.state.showAlert &&
      
      <Alert style={{ marginTop: "30px" }} variant="primary">
        <p>
        You Bought an Item
        </p>
      
      </Alert>
      }
        <Row>
          {products.map((product, index) => (
            <Col md={4} key={index}>
              <Product product={product} buyFun={this.buy} />
            </Col>
          ))}
        </Row>
        
      </Container>
    );
  }
}

export default Products;

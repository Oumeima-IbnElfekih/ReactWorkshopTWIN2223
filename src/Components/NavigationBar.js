import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavigationBar(){

    return (
    
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#">My Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto">
         {/* <NavLink to="/products" style={({isActive})=> ({ textDecoration : isActive ? 'underline' : 'none' })}>Products</NavLink>
         <NavLink to="aaaaa" style={({isActive})=> ({ textDecoration : isActive ? 'underline' : 'none' })} >Add Product</NavLink> */}
          <Nav.Link as={NavLink}  to="/products" style={({isActive})=> ({ textDecoration : isActive ? 'underline' : 'none' })}>Home</Nav.Link>
          <Nav.Link as={NavLink}  to="/aaaaa"  style={({isActive})=> ({ textDecoration : isActive ? 'underline' : 'none' })} >Link</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}
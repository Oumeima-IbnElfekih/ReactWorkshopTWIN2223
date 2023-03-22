import { Container, Nav, Navbar} from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCountAll } from "../redux/slices/cartSlice";

export default function NavigationBar(){
  const CartNumber = useSelector(selectCountAll);
    return (
    
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#">My Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto">
         {/* <NavLink to="/products" style={({isActive})=> ({ textDecoration : isActive ? 'underline' : 'none' })}>Products</NavLink>
         <NavLink to="aaaaa" style={({isActive})=> ({ textDecoration : isActive ? 'underline' : 'none' })} >Add Product</NavLink> */}
          <Nav.Link as={NavLink}  to="/products/list"
           style={({isActive})=> ({ textDecoration : isActive ? 'underline' : 'none' })}>
            Home</Nav.Link>
          <Nav.Link as={NavLink}  to="/products/add" 
           style={({isActive})=> ({ textDecoration : isActive ? 'underline' : 'none' })} >
            Add Product</Nav.Link> 
            <Nav.Link as={NavLink} to="/cart" style={({isActive})=>({textDecoration:isActive && 'underline'})}>Panier ({CartNumber})</Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}
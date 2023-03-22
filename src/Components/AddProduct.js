import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductReducer, setErrors } from "../redux/slices/productsSlice";
import { addProduct } from "../service/api";

export default  function AddProduit () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errors = useSelector(state=>state.products.errors);
    const [product, setProduct] =useState(

        {
           
            name: "",
            price: 0,
            img: "",
            like: 0,
            quantity: 0,
            description: ""
          }

    )
    const {name , price , img , like , quantity ,description} = product ;
     const handleformInput=(e)=> {
        setProduct({
            ...product , [e.target.name] :e.target.value
        })  
     }
     const handleFileInput=(e)=> {
        console.log(e.target.files[0])
        setProduct({
            ...product , [e.target.name] :e.target.files[0].name
        })  
     }
    const addP= async()=>{
      addProduct(product)
      .then((response)=>{
        dispatch(setErrors(null))
        dispatch(addProductReducer(response.data));
        navigate("/products/list");
      }).catch((error)=>{
        dispatch(setErrors(error))
      })

    }
   
    return (<>
     <Container style={{ marginTop: "30px" }}>
     {errors !== null && <Alert key="danger" variant="danger">
          {errors.message}
      </Alert>} 
        <Form >
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>handleformInput(e)} as="textarea" type="text" placeholder="Enter the name" name="name" value={name}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>handleformInput(e)}  type="text" placeholder="Enter the product description" name="description" value={description}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control  onChange={(e)=>handleformInput(e)}  type="number"  name="price" value={price}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Quantity</Form.Label>
        <Form.Control  onChange={(e)=>handleformInput(e)}  type="number"  name="quantity" value={quantity}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control  onChange={(e)=>{
                handleFileInput(e)

        }}   type="file"  name="img"/>
      </Form.Group>
      <Button variant="primary" onClick={addP}>
        Add Product
      </Button>
      <Button variant="gray">
        Cancel
      </Button>
    </Form>
    </Container>
    </>)
}
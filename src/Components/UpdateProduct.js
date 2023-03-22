import { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setErrors, updateProductReducer } from "../redux/slices/productsSlice";
import { editProduct, getallProducts } from "../service/api";

export default function UpdateProduct() {
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();
  const errors = useSelector(state=>state.products.errors);

  const [product, setProduct] = useState({
    id: param.id ,
    name: "",
    price: 0,
    img: "",
    like: 0,
    quantity: 0,
    description: "",
  });
  const { id, name, price, img, like, quantity, description } = product;
  
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await getallProducts(param.id);
    setProduct(response.data);
  };
  const onValueChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const onFileHandle = (e) => {
    console.log(e.target.files);
    setProduct({ ...product, [e.target.name]: e.target.files[0].name });
  };
  const UpdateP = async () => {
    editProduct(param.id, product)
    .then((response)=>{
      dispatch(setErrors(null))
      dispatch(updateProductReducer(response.data));
      navigate("/products/list");
    }).catch((error)=>{
      dispatch(setErrors(error))
    })
  };
  
  return (
    <>
      <Container style={{ marginTop: "30px" }}>
        <h2>Modify Your {name} Product</h2>
        {errors !== null && <Alert key="danger" variant="danger">
          {errors.message}
      </Alert>} 
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
                onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
              type="text"
              placeholder="Enter a Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>

            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description "
                onChange={(e) => onValueChange(e)}
              name="description"
              value={description}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
                onChange={(e) => onValueChange(e)}
              name="price"
              value={price}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
                onChange={(e) => onValueChange(e)}
              name="quantity"
              value={quantity}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
                onChange={(e) => onFileHandle(e)}
              name="img"
            />
          </Form.Group>
          <Button variant="primary" onClick={()=>UpdateP()}>Update Product</Button>
          <Button onClick={() => navigate("/products")} variant="secondary">
            Cancel
          </Button>
        </Form>
      </Container>
    </>
  );
}
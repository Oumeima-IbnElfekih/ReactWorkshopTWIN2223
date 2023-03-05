import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import AddProduit from './Components/AddProduct';
const UpdateProduct = React.lazy(()=> import('./Components/UpdateProduct'))
const NotFound = React.lazy(()=> import('./Components/NotFound'))
const NavigationBar = React.lazy(()=> import('./Components/NavigationBar'))
const Productdetails = React.lazy(()=> import('./Components/Productdetails'))
function App() {
  return (
    
    <>
    <Suspense fallback={
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}>
    <NavigationBar />
    <Routes>
          <Route path="/products">
              <Route path="list" element={<Products/>} />
              <Route path=":id" element={<Productdetails/>} />
              <Route path='update/:id' element={<UpdateProduct />}/>
              <Route path="add" element={<AddProduit/>} />
          </Route>
          <Route path='*' element={<NotFound />}/>
    </Routes>
    </Suspense>
    </>
  );
}

export default App;

//import { useState, useContext } from 'react';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import { AppContext } from './Contexts/AppContent';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
// import SignUp from './Pages/SignUp';
import axios from 'axios';
import SingleProduct from './Pages/SingleProduct';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import SignUp from './Pages/Auth/SignUp';
import SignIn from './Pages/Auth/SignIn';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
 import toast, {Toaster} from "react-hot-toast";
//import toast,{ ToastContainer } from 'react-toastify';
// import {Toaster} from 'react-hot-toast';

function App() {
  // const [loading, setLoading] = useState(false);
 const [cart, setCart] = useState([]);
 const [notice, setNotice] = useState({});

//  console.log(cart);
//Get the items from the cart
 const getCart = async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/carts/5`); 
    console.log(response.data);
    setCart(response.data.products); 
    // console.log(response.data.product);
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
 }

// get existing cart
// check if product exists in cart and increase the qty
// if it doesn\t, add product
// submit new to api
// if it doesn't exist add product to cart and if it exist increment qty to current quantity number 
 const addToCart = async (product) => {
  let existingCart = cart ?? []
  let productExist = existingCart.find((prod) => prod.id = product.id)
  // console.log(productExist)

  if (productExist) {
    productExist.quantity += 1
    let index = existingCart.findIndex(prod => prod.id === product.id)
    existingCart[index] = productExist
  }
  else {
    existingCart.push({
      productid: product.id,
      quantity: 1
  })
  }
  try {
    // let response = await axios.post('https://fakestoreapi.com/carts', JSON.stringify(payload));
    let response = await axios.post('https://fakestoreapi.com/carts', {
      userid: '5',
      date: (new Date).getDate(),
      products: existingCart
    });
    // console.log(response.data);
    setCart(response.data);
    getCart()
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
  
  //  let existingProduct = cart.find((productID)  => productID.id === productID.id);
  //  console.log("GOT HERE")
  //  if(existingProduct) {
  //   let index = cart.findIndex((productID) => productID.id === productID.id);
  //   let newCart = [...cart];

  //   newCart[index].qty = existingProduct.qty + 1;
  //   setCart(newCart);
  //  } else {
  //    product.qty = 1;
  //    setCart((prev) => [...prev, product])
  //  }
 }
 useEffect(() => {
   getCart();
   if(notice.message){
        if(notice.type == 'success'){
          toast.success(notice.message, {
            position: 'top-right'
          });
        }
        else{
          toast.error(notice.message, {
            position: 'top-right'
          });
        }
      }
 },[notice])
//  useEffect(() => {
//   if(notice.message){
//     if(notice.type === 'success'){
//       toast.success(notice.message, {
//         position: 'top-right'
//       });
//     }
//     else{
//       toast.error(notice.message, {
//         position: 'top-right'
//       });
//     }
//   }
// },[notice])
 
  return (
    <AppContext.Provider
     value={{ 
       cart,
       setCart,
       addToCart: addToCart,
       setNotice
      }}>
      {/* <Toaster/> */}
      {/* <ToastContainer />  */}
       <Toaster />  
      <Router>
      <NavBar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path=':id' element={<SingleProduct/>} />
       </Routes>
       <Footer />
      </Router>
    
    </AppContext.Provider>
  )
}

export default App

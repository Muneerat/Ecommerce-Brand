//import { useState, useContext } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { AppContext } from "./Contexts/AppContent";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
// import SignUp from './Pages/SignUp';
import axios from "axios";
import SingleProduct from "./Pages/SingleProduct";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Auth/SignIn";
import toast, { Toaster } from "react-hot-toast";
import AllProduct from "./Pages/AllProduct";
import Cart from "./Components/cart";
//import toast,{ ToastContainer } from 'react-toastify';
// import {Toaster} from 'react-hot-toast';

function App() {
  // const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [notice, setNotice] = useState({});
  const [errors, setErrors] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [ourProducts, setOurProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
//Validation
  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (!username) {
      errors.username = "Username is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  //Get all products
  const getOurProducts = () => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setOurProducts(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getOurProducts();
  }, []);

  //Get categories
  const getCategory = () => {
   
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((res) => {
        // console.log(res.data)
        setCategories(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);
  //  console.log(cart);

  //Get the items from the cart
  const getCart = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/carts/3`);
      console.log(response.data);
      setCart(response.data.products);
      // console.log(response.data.product);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  // get existing cart
  // check if product exists in cart and increase the qty
  // if it doesn\t, add product
  // submit new to api
  // if it doesn't exist add product to cart and if it exist increment qty to current quantity number
 
  // const addToCart = async (product) => {
  //   let existingCart = cart ?? [];
  //   let productExist = existingCart.find((prod) => (prod.id = product.id));
  //    console.log(productExist)

  //   if (productExist) {
  //     productExist.quantity += 1;
  //     let index = existingCart.findIndex((prod) => prod.id === product.id);
  //     existingCart[index] = productExist;
  //   } else {
  //     existingCart.push({
  //       productid: product.id,
  //       quantity: 1,
  //     });
  //   }
  //   try {
  //     // let response = await axios.post('https://fakestoreapi.com/carts', JSON.stringify(payload));
  //     let response = await axios.post("https://fakestoreapi.com/carts", {
  //       userid: "5",
  //       // date: new Date().getDate(),
  //       // products: existingCart,
  //       title: title,
  //       price: price,
  //       description: description,
  //       image: image,
  //       category: category,

  //     });
  //     console.log(response.data);
  //     setCart(response.data);
  //     getCart();
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //   }

  //   //  let existingProduct = cart.find((productID)  => productID.id === productID.id);
  //   //  console.log("GOT HERE")
  //   //  if(existingProduct) {
  //   //   let index = cart.findIndex((productID) => productID.id === productID.id);
  //   //   let newCart = [...cart];

  //   //   newCart[index].qty = existingProduct.qty + 1;
  //   //   setCart(newCart);
  //   //  } else {
  //   //    product.qty = 1;
  //   //    setCart((prev) => [...prev, product])
  //   //  }
  // };
  const addToCart = (product,id) => {
   
    //add to cart
    const newItem = {...product,amount:1};
    //Check if the product is already in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    console.log(newItem)
    //if cart item is already in cart
    if (cartItem) {
      //increase the quantity
      const newCart = [...cart].map(item => {
        if(item.id === id) {
          return {...item, amount: cartItem.amount + 1}
         
        } else {
          return item;
        }
      })
      setCart(newCart);
      console.log(newCart)
    }else{
      setCart([...cart, newItem])
    }
    console.log(cartItem)
      //add the product to cart
    
  }
  useEffect(() => {
    getCart();
    if (notice.message) {
      if (notice.type == "success") {
        toast.success(notice.message, {
          position: "top-right",
        });
      } else {
        toast.error(notice.message, {
          position: "top-right",
        });
      }
    }
  }, [notice]);

  return (
    <div className={darkMode ? "app dark" : "dark"}>
      <AppContext.Provider
        value={{
          cart,
          setCart,
          addToCart: addToCart,
          setNotice,
          errors,
          validate,
          darkMode,
          toggleTheme,
          ourProducts,
          setOurProducts,
          getOurProducts,
          getCategory,
          categories,
          setCategories,
        }}
      >
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
            <Route path=":id" element={<SingleProduct />} />
            <Route path="/allProducts" element={<AllProduct />} />
            <Route path="/cart" element={<Cart />}/>
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

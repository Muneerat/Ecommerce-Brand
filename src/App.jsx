//import { useState, useContext } from 'react';
// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from "react-router-dom";
import { AppContext } from "./Contexts/AppContent";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import axios from "axios";
import SingleProduct from "./Pages/SingleProduct";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Auth/SignIn";
import toast, { Toaster } from "react-hot-toast";
import AllProduct from "./Pages/AllProduct";
import Cart from "./Components/cart";
import NotFound from "./Pages/NotFound";

function App() {
  // const [loading, setLoading] = useState(false);
  //  const { pathname } = useLocation();
  const [cart, setCart] = useState([]);
  const [notice, setNotice] = useState({});
  const [errors, setErrors] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [ourProducts, setOurProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  // const [emptyCart, setEmptyCart] = useState(false);
  const [totalItems, setTotalItems] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  




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
        console.log("done")
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

  //Get the items from the cart
  const getCart = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/carts/${id})`);
      setCart(response.data.products);
      // console.log(response.data.product);
    } catch (error) {
     // console.error("Error fetching cart:", error);
    }
  };

//Add items to cart
  const addToCart = (product,id) => {
   
    //add to cart
    const newItem = {...product,amount:1};
    //Check if the product is already in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
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
      setNotice({ message: `${cartItem.title} in cart increased.`, type: "success" });
  
    }else{
      setCart([...cart, newItem])
      setNotice({ message: `Item added to cart.`, type: "success" });
    }
  }

  // Increment the quantity
  const increaseItem = (id) => {
    const newCart = [...cart].map((item) => {
      if (item.id === id) {
        return {...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
 
    setCart(newCart);
    setNotice({ message: `Item added to cart.`, type: "success" });
  
  };

  //Decrement the quantity
  const decreaseItem = (id) => {
   const cartItem = cart.find((item) => {
     return item.id === id;
   })
   if(cartItem){
    const newCart = [...cart].map((item) => {
      if (item.id === id) {
        return {...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
    setNotice({ message: `${cartItem.title} decrease from cart.`, type: "error" });

  }
    if (cartItem.amount < 2) {
      removeItem(id);
      setNotice({ message: `${cartItem.title} removed from cart.`, type: "error" });
    }
  };

  //Remove the item from cart
  const removeItem = (id) => {
    let updatedCart = cart.filter((prod) => prod.id !== id );
    setCart(updatedCart)
    setNotice({ message: `  Item removed from cart.`, type: "error" });
  }

//Total amount of items in the cart
    useEffect(() => {
      if (cart) {
        const totalItems = cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.amount;
        }, 0);
        setTotalItems(totalItems);
      }
    });
  
    //Total price
   useEffect(() => {
    if(cart){
      const totalPrice = cart.reduce((accumulator, currentItem) =>{
        return accumulator + (currentItem.amount * currentItem.price)
      },0)
      setTotalPrice(totalPrice);
    }
   })
  
    //clear cart
    const emptyCart = () => {
      setCart([]);
      setNotice({ message: `All item removed from cart.`, type: "error" });
    };
    // useEffect(()=>{
    //   window.scrollTo(0, 0);
    // },[])
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    
  }
  useEffect(() => {
    getCart();
    if (notice.message) {
      if (notice.type == "success") {
        toast.success(notice.message, {
          position: "top-right",
        });
      } 
      else {
        toast.error(notice.message, {
          position: "top-right",
        });
      }
    }
  }, [notice]);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
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
          removeItem,
          increaseItem,
          decreaseItem,
          totalItems,
          totalPrice,
          emptyCart,
          scrollToTop

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

            <Route path="/products">

            <Route path=":id" element={<SingleProduct />} />
            <Route path="allProducts" element={<AllProduct />} />
            <Route path="*" element={<NotFound />}/>
            </Route>
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

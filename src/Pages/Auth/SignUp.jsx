import React, { useState, useContext, useEffect } from "react";
import FormInput from "../../Components/Form/FormInput";
import sign from "../../assets/sign.png";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import Links from "../../Components/Links";
import FormLabel from "../../Components/Form/FormLabel";
import Layouts from "../../Components/Layouts";
import axios from "axios";
import { AppContext } from "../../Contexts/AppContent";
import FormError from "../../Components/Form/FormError";
export default function SignUp() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [username, SetUsername] = useState("");
  const [errors, SetErrors] = useState({});
   const { setNotice } = useContext(AppContext);
  
  //Validation for yje inputs
   const validate = () => {
    const errors = {};
if (!name && !name.trim()) {
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
    SetErrors(errors);
    return Object.keys(errors).length === 0;
  }
  const submit = (e) => {
    e.preventDefault();
   
   const isValid =  validate();
    if( !isValid ){
      return;
    }
    
     SetErrors({});
    setSubmitting(true);
    //Create user
    axios
      .post("https://fakestoreapi.com/users", {
        email: email,
        username: username,
        password: password,
        name: {
          firstname: name.split(" ")[0],
          lastname: name.split(" ")[1],
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      })
      .then((res) => {
        console.log(res.config.data);
        localStorage.setItem("user", JSON.stringify(res.config.data));
        SetName("");
        SetEmail("");
        SetPassword("");
        SetUsername("");
        setNotice({
          type: 'success',
          message: 'Your account has been successfully created.'
      });
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  // useEffect (() => {
   
  // })
  return (
    <Layouts className="p-0">
      <div className="flex w-full flex-col md:flex-row p-0">
        <div className="md:w-3/6">
          <img src={sign} alt="" className="w" />
        </div>
        <div className="flex flex-col justify-center  align-middle mx-auto">
          <form className="" onSubmit={submit}>
            <h2 className="py-3 text-4xl">Create an account</h2>
            <p className="py-2 px-2">Enter your details below</p>
            <div className="max-w-xs mx-auto my-3">
              <FormLabel>Enter your name</FormLabel>
              <FormInput
                placeholder="Name"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => SetName(e.target.value)}
              />
              <FormError error={errors?.name} />
            </div>
            <div className="max-w-xs mx-auto my-3">
              <FormLabel>Enter your username</FormLabel>
              <FormInput
                placeholder="Username"
                name="username"
                id="username"
                required
                value={username}
                onChange={(e) => SetUsername(e.target.value)}
              />
               <FormError error={errors?.username} />
            </div>
            <div className="max-w-xs mx-auto my-3">
              <FormLabel>Enter your Email</FormLabel>
              <FormInput
                placeholder="Email or Phone Number"
                name="email"
                id="email"
                required
                type="email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              />
               <FormError error={errors?.email} />
            </div>
            <div className="max-w-xs mx-auto my-3">
              <FormLabel>Enter your Password</FormLabel>
              <FormInput
                type="password"
                placeholder="********"
                name="password"
                id="password"
                required
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
               <FormError error={errors?.password} />
            </div>
            <Button
              className="bg-primary w-full text-white my-4 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-light hover:text-black"
              disabled={submitting}
            >
              {submitting && (
                <div className="w-5 h-5 rounded-full animate-spin border-r border-t border-slate-800"></div>
              )}
              {!submitting && <span>Create Account</span>}
            </Button>
            <p>
              Already have account? <Link lassName=" text-primary" to="/signIn">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </Layouts>
  );
}

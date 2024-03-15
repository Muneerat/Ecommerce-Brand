import { useEffect, useState } from "react";
import FormInput from "../../Components/Form/FormInput";
import sign from "../../assets/sign.png";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import FormLabel from "../../Components/Form/FormLabel";
import Layouts from "../../Components/Layouts";
import axios from "axios";

export default function SignIn() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const [password, SetPassword] = useState("");
  const [username, SetUsername] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.config.data);
        localStorage.setItem("user", JSON.stringify(res.config.data));
        navigate("/");
        // setSubmitting(false)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  // const getLoggedIn = localStorage.getItem('user') !== null;
  // if(getLoggedIn ){
  //   navigate("/products");
  //   return null;
  // }
  // useEffect(() => {
  //   if(localStorage.getItem('user') !== null){
  //     navigate("/products");
  //   }
  //   if(getLoggedIn ){
  //     navigate("/products");
  //     return null;
  //   }
  // },[])
  return (
    <Layouts>
      <div className="flex w-full">
        <div className="w-3/6">
          <img src={sign} alt="" className="w" />
        </div>
        <div className="flex flex-col justify-center  align-middle mx-auto">
          <form onSubmit={submit}>
            <h2 className="py-3 text-4xl">Log in</h2>
            <p className="py-3 px-1">Enter your details below</p>
            <div className="max-w-xs mx-auto my-3">
              <FormLabel>Enter your Username</FormLabel>
              <FormInput
                placeholder="Username"
                name="username"
                id="username"
                value={username}
                onChange={(e) => SetUsername(e.target.value)}
              />
            </div>
            <div className="max-w-xs mx-auto my-3">
              <FormLabel>Enter your Password</FormLabel>
              <FormInput
                type="password"
                placeholder="********"
                name="password"
                id="password"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
            </div>
            <Button
              className="bg-primary w-full text-white my-4 hover:text-black hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={submitting}
            >
              {submitting && (
                <div className="w-5 h-5 rounded-full animate-spin border-r border-t border-slate-800"></div>
              )}
              {!submitting && <span>Create Account</span>}
            </Button>
          </form>
          {/* <p>
          Already have account? <Link to="./signIn">Log in</Link>
        </p> */}
        </div>
      </div>
    </Layouts>
  );
}

import { useContext, useEffect, useState } from "react";
import FormInput from "../../Components/Form/FormInput";
import sign from "../../assets/sign.png";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import FormLabel from "../../Components/Form/FormLabel";
import Layouts from "../../Components/Layouts";
import axios from "axios";
//import { AppContext } from "../../Contexts/AppContent";


export default function SignIn() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const [password, SetPassword] = useState("");
  const [username, SetUsername] = useState("");
  //const {setNotice} = useContext(AppContext);

  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        // setNotice({
        //   type : 'success',
        //   message : 'Login Successful'
        // })
        // localStorage.setItem("users", JSON.stringify(res.config.data));
        navigate("/");
       
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
//  useEffect(() => {
//     if(notice.message){
//       if(notice.type === 'success'){
//         toast.success(notice.message, {
//           position: 'top-right'
//         });
//       }
//       else{
//         toast.error(notice.message, {
//           position: 'top-right'
//         });
//       }
//     }
//  },[notice])

  return (
    <Layouts>
      <div className="flex w-full">
        <div className="w-3/6">
          <img src={sign} alt="SignIn image" className="w" />
        </div>
        <div className="flex flex-col justify-center  align-middle mx-auto">
          <form onSubmit={submit}>
            <h2 className="py-3 text-4xl">LogIn</h2>
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
        
        </div>
      </div>
    </Layouts>
  );  
}

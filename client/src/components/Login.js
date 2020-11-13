import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import axios from "axios"

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
let initialuser = {
  username: "",
  password: ""
}

let [user,setuser] = useState(initialuser)

let updateUser = function(name,value){
  setuser({...user,[name]: value})
}

let onChange = function(event){
  let {name,value}=event.target;
  updateUser(name,value)
}

let history = useHistory()

let onSubmit = function(event){
  event.preventDefault()
  axios.post('http://localhost:5000/api/login', user)
    .then(req => {
      localStorage.setItem("token", req.data.payload);
      history.push("/Bubblepage")
    })
    .catch( err => {
      console.log(err)
    });
}


  return (
    <div>
    <form onSubmit={onSubmit}>

      <label>Username
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={onChange}
      />
      </label>

      <label>Password
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={onChange}
      />
      </label>

      <input type="submit" value="Login"/>

    </form>
  </div>
  );
};

export default Login;

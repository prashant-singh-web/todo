import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Appcontext } from "./context/contextProvider";

function User() {
  const {islogin, setIslogin} = useContext(Appcontext)
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [islogin, setIslogin] = useState(false);
  
  const sendUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/post", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
  };
  const getUser = async () => {
    const data = {
      username: username,
      password: password
      // add more data here
    };

    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:4000/api/getnow',
        headers: { 'Content-Type': 'application/json' },
        data
      });

      console.log(response.data,response.status);
      if (response.status === 200) {
              setIslogin(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(islogin)

 
  return (
    <div className="flex flex-row">
        <div className="w-[500px] h-[500px] bg-red-500 dark:bg-gray-500">
      <h1>sign up</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="email"
        name=""
        id=""
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="btn" onClick={sendUser}>
        submit
      </button>
    </div>
    <div className="w-[500px] h-[500px]">
      <h1>sign up</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="btn" onClick={getUser}>
        submit
      </button>
    </div>
    </div>
  );
}

export default User;

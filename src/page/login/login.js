import React from 'react';
import styled from "styled-components";

const Login = () => {
    return (
        <Hello>
            <div className="app">
                <form action="">
                    <h1>Login Up</h1>
                    <br/>
                    <input type="text" placeholder="Name"/>
                    <input type="color" placeholder="color"/>
                    <br/>
                    <br/>
                    <input type="search" placeholder="Search"/>
                    <input type="file" placeholder="file"/>
                    <br/>
                    <br/>
                    <input name="email" type="text" placeholder="Enter Your Email...."/>
                    <input name="password" type="password" placeholder="Enter Your Email...."/>
                    <br/>
                    <br/>
                    <input type="number" name="phoneNumber" placeholder="Phone Number"/>
                    <input type="week" placeholder="week"/>
                    <br/>
                    <br/>
                    <button type="submit">Registration</button>
                </form>
            </div>
        </Hello>
    );
};

const Hello = styled.div`
  margin-top: 220px;
  text-align: center;


  h1 {
    padding: 10px;
    font-size: 50px;
    color: blue;
  }

  input {
    width: 20%;
    height: 40px;
    padding: 10px;
    border-color: blue;
    color: black;
  }

  button {
    font-size: 20px;
    width: 10%;
    height: 50px;
    background-color: black;
    color: blue;
  }
`

export default Login;
import React from 'react';
import BgImg from "../../image/mebel2.jpg"
import styled from "styled-components";

const HeaderCom = () => {
    return (
        <HeaderStyle>
            <div className="header-bg">
                <h3>Online Shop</h3>

                <h1>New Furniture</h1>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, nesciunt?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <button className="btn">Read More</button>
            </div>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.div`
  background: url("${BgImg}") no-repeat center center/cover;
  width: 100%;
  min-height: 100vh;
  text-align: center;

  .header-bg {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 30px;
      color: aqua;
    }

    h1 {
      font-size: 50px;
      color: aqua;
    }

    p {
      font-size: 20px;
      color: aqua;
    }

    .btn {
      width: 100px;
      height: 40px;
      margin-top: 10px;
      background-color: transparent;
      border-color: blue;
      cursor: pointer;
      color: cornflowerblue;
      transition: 0.9s;
    }
  }

  .btn:hover {
    transform: scale(1.2);
    color: aqua;
  }
`

export default HeaderCom;
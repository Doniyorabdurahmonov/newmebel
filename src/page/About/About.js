import React from 'react';
import foto from "../../image/mebel3.jpg"
import styled from "styled-components";

const About = () => {
    return (
        <Style>
            <h1>Creater : Doniyor</h1>
            <h2>React Name : Mebel </h2>
        </Style>
    );
};
const Style = styled.div`
  background: url("${foto}") no-repeat center center/cover;
  width: 100%;
  height: 100vh;

  h1 {
    padding-top: 200px;
    text-align: center;
    color: white;
    font-size: 45px;
    font-family: "Arial Unicode MS",serif;
  }

  h2 {
    text-align: center;
    color: white;
    font-size: 35px;
    font-family: "Arial Unicode MS",serif;
  }
`

export default About;
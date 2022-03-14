import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {Context} from "./Context";
import styled from "styled-components";


const FileInfo = () => {
    const {array} = useContext(Context)
    const {id} = useParams()
    const singlePhoto = array.find(el => {
        return el.id === id
    })
    return (
        <FileStyle>
            <img src={singlePhoto.image} alt="Photo"/>
            <h1>{singlePhoto.name}</h1>
            <p>{singlePhoto.description}</p>
            <h3>{singlePhoto.price}00$</h3>
        </FileStyle>
    );
};
const FileStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit) minmax(350px, 1fr);
  margin: auto;
  max-width: 100%;

  img {
    margin-top: 150px;
    margin-left: 500px;
    width: 700px;
    height: 400px;
    border-radius: 20px;
  }

  h1 {
    text-align: center;
    font-size: 50px;
    color: orangered;
  }
  p{
    text-align: center;
    font-size: 25px;
    color: red;
  }
  h3{
    text-align: center;
    color: red;
  }
`

export default FileInfo;
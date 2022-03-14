import React, {useContext} from 'react';
import {Context} from "../../Context";
import HomePhoto from "../../conponents/PhotoCom/HomePhoto";
import styled from 'styled-components'
import HeaderCom from "../../conponents/HeaderCom/HeaderCom";

const Home = () => {
    const {array} = useContext(Context)

    return (
        <Wrapper>
            <HeaderCom/>
            <div className="container">
                <h1>Featured Products</h1>
                <div className="Nice">
                    {
                        array.slice(1, 7).map(el => {
                            return <HomePhoto el={el}/>
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
};


const Wrapper = styled.div`

  .container {
    max-width: 75%;
    margin: auto;

    h1 {
      text-align: center;
      padding: 20px;
      color: black;
      font-size: 45px;
      border-bottom: 2px solid black;
    }

    .Nice {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      grid-gap: 15px;
      margin-top: 10px;

      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
    }
  }
`
export default Home;
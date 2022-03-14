import React, {useContext, useState} from 'react';
import styled from "styled-components";
import {Context} from "../../Context";
import {faShoppingCart, faShoppingBag, faHeart, faHeartBroken} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const ProductsPhoto = ({el}) => {
    const [hovered, setHovered] = useState(false)
    const {AddCard, RemoveCard, cardArray, toggleFavorite} = useContext(Context)

    const shopCard = () => {
        let plusArray = cardArray.find(Cart => Cart.id === el.id)
        if (plusArray) {
            return <FontAwesomeIcon className="faShoppingCart" onClick={() => RemoveCard(el.id)} size="2x"
                                    icon={faShoppingCart}/>
        } else {
            return <FontAwesomeIcon className="faShoppingCart" onClick={() => AddCard(el)} size="2x"
                                    icon={faShoppingBag}/>
        }

    }
    const Heart = () => {
        if (el.isFavorite) {
            return <FontAwesomeIcon className="faHeartBroken" onClick={() => toggleFavorite(el.id)} size="2x"
                                    icon={faHeart}/>

        } else {
            return <FontAwesomeIcon className="faHeartBroken" onClick={() => toggleFavorite(el.id)} size="2x"
                                    icon={faHeartBroken}/>
        }


    }

    return (
        <Container onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(true)}>
            {hovered && (
                <div className="card">
                    {shopCard()}
                    {Heart()}
                </div>
            )}
            <div>
                <Link to={`/${el.id}`}>
                    <img src={el.image} alt=""/>
                </Link>
                <h3>{el.name}</h3>
            </div>
        </Container>
    );
};

const Container = styled.div`
  position: relative;
  margin-top: 74px;

  .card {
    .faShoppingCart {
      position: absolute;
      top: 20px;
      left: 20px;
      color: black;
    }

    .faHeartBroken {
      position: absolute;
      top: 20px;
      right: 20px;
      color: red;
    }
  }

`

export default ProductsPhoto;
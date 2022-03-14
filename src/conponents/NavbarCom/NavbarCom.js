import React, {useContext} from 'react';
import styled from 'styled-components'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Context} from "../../Context";


const NavbarCom = () => {
    const {cardArray} = useContext(Context)

    return <NavbarStyle>
        <div className="container">
            <div className="nav">
                <h1>Furtniture Shop</h1>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            Products
                        </Link>
                    </li>

                    <li className="man">
                        <Link to="/card">
                            <FontAwesomeIcon size="1x" icon={faShoppingCart}/>
                        </Link>
                        <sup>
                            {
                                cardArray.length
                            }
                        </sup>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </NavbarStyle>
};


const NavbarStyle = styled.div`
  width: 100%;
  min-height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99 !important;

  .container {
    width: 85%;
    margin: auto;


    .nav {
      display: flex;
      flex-direction: row;
      min-height: 80px;
      align-items: center;
      justify-content: space-between;
      color: aqua;


      h1 {
        font-size: 40px;
        transition: 1.2s;
        cursor: pointer;
      }

      ul {
        display: flex;
        flex-direction: row;

        li {
          list-style: none;
          padding: 15px;
          transition: 1s;

          a {
            text-decoration: none;
            font-size: 20px;
            color: aqua;

            .man {
              margin-left: 300px;
            }
          }
        }

        li:last-child {
          padding-right: 0;
        }
      }
    }
  }

  h1:hover {
    transform: scale(1.2);
    border-bottom: 1px solid aqua;
  }

  li:hover {
    transform: scale(1.2);
    border-bottom: 1px solid aqua;
  }
`
export default NavbarCom;
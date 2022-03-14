import React, {useContext} from 'react';
import {Context} from "../../Context";
import styled from 'styled-components'
import ProductsPhoto from "../../conponents/ProductsPhoto/ProductsPhoto";

const Products = () => {
    const {array, setArray, data} = useContext(Context)

    const searchByName = (e) => {
        const name = e.target.value
        const newArray = data.filter(el => {
            return el.name.toLowerCase().includes(name.toLowerCase())
        })
        setArray(newArray)
    }

    const hander = (e) => {
        const category = e.target.value
        const newArray = data.filter(el => {
            return el.company.toLowerCase().includes(category.toLowerCase())
        })
        setArray(newArray)
    }

    return (
        <Wrapper>
            <select onChange={hander} name="select" id="select">
                <option value="marcos">Marcos</option>
                <option value="liddy">Liddy</option>
                <option value="ikea">Ikea</option>
            </select>
            <form action="/">
                <label htmlFor="search">
                    <input onChange={searchByName} type="search" placeholder="Search"/>
                </label>
            </form>
            <div className="Nice">
                {
                    array.map(el => {
                        return <ProductsPhoto el={el}/>
                    })
                }
            </div>
        </Wrapper>
    )
};


const Wrapper = styled.div`
  max-width: 75%;
  margin: auto;
  margin-top: 90px;

  select {
    width: 120px;
    height: 30px;
    border-color: blue;
    color: blue;
  }

  input {
    margin-left: 1000px;
    width: 160px;
    height: 20px;
    color: red;
    border-color: blue;
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

`
export default Products;
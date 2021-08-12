import React, { useEffect, useState } from 'react';
import './styles.css';
import {
  Link,
  } from "react-router-dom";

const Product = ({ match }) => {
  console.log(match)

  useEffect(() => {
      fetchItem();
    }, []);
  
    const [item, setItem] = useState([
    ]);
  
    const fetchItem = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
      const item = await data.json();
      setItem(item);
      console.log(item)
    };

  return (
       
    <div>
    <h1>Produit</h1>
    <div className='item-container'>
      
        <div className='card' key={item.id}>
          
          <img src={item.image} alt='' />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          
        </div>
        
    </div>
    <p>{item.price}$</p> 
    <a class="boutton"> <Link class="text" to={`/products/`}>Retour</Link></a>
    </div>
)
}

export default Product;
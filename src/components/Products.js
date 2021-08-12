import React, { useEffect, useState } from 'react';
import {
  Link,
  } from "react-router-dom";

function Products({}) {

    useEffect(() => {
        fetchItems();
      }, []);
    
      const [items, setItems] = useState([]);
    
      const fetchItems = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const items = await data.json();
        setItems(items);
      };

    return (
      <div className='item-container'>  
        <ul>
        
          <h1>Liste des Produits</h1>
        {items.map((items) => ( 
          <div className='card'>
            <li>
            {items.title} 
            </li>
          <li>  
            <img src={items.image} alt='' />
           
          </li>
          <div>
          <button class="boutton"><Link class="text" to={`/product/${items.id}`}>Voir</Link></button>
          </div>
          </div>
        ))}
        
      </ul>
      </div>
      
    )
}

export default Products;
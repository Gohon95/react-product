import React, {useEffect, useState} from "react";


const App = () => {

    useEffect(() => {
        fetchItems();
    },[])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {

        const data = await fetch('https://fakestoreapi.com/products');
        const items = await data.json();
        setItems(items);
    }
   console.log(items);

    return(
        <>
        </>
    )
}

export default App;
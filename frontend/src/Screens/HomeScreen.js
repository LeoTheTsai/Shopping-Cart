import React, { useState, useEffect }from 'react';
import axios from "axios";
import {add_to_cart} from "../Operations/CartOperations";

function HomeScreen (prop) {

    //define a hook
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("http://localhost:5000/api/Items");
            setItems(data);
        }
        fetchData();
        return () => {
            //
        };
    }, [])  


    return <ul className="items">
    {
      items.map(item =>
            <li key = {item.id}>
                <div className = "item-name">{item.name}</div>
                <img className = "item-image" src={item.image} alt="item-name"/>
                <div className="item-detail">
                    <div className="item-price">{item.price} bitcoin</div>
                    <button onClick ={e => add_to_cart(item.name, item.price, item.id)} className = "buy-item-button" type= "submit">
                        <i className = "fas fa-plus-square"></i>
                    </button>
                </div>
            </li>)
    }
    
  </ul>
}

export default HomeScreen;
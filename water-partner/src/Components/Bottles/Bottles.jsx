import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';

const Bottles = () => {
    //declear useState
    const [bottles, setbottles] = useState([]);
    const [cart, setCart] = useState([]);

    //   declear useEffect to get data from API
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setbottles(data))
    }, [])

    //handle purchase button
    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        console.log("add to cart: ", bottle);
    }
    return (
        <div>
            <h2>Available Bottles: {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
            <h3>
                <div className="bottle-container">
                    {
                        bottles.map(bottle => <Bottle
                            //props key 
                            key={bottle.id}
                            //props data 
                            bottle={bottle}
                            //props function 
                            handleAddToCart={handleAddToCart}
                        ></Bottle>)
                    }
                </div>
            </h3>
        </div>
    );
};

export default Bottles;
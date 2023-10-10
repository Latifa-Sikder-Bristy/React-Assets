import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoreCart } from "../../Utilities/localstorage";

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

    //load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length);
        if (bottles.length > 0) {
            const storeCart = getStoreCart();
            console.log(storeCart);
        }
    }, [bottles])

    //handle purchase button
    const handleAddToCart = bottle => {
        //copy the cart array cz react not push directly
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id)
        // console.log("add to cart: ", bottle);
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
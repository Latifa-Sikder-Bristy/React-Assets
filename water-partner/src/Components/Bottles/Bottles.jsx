import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoreCart, removeFromLS } from "../../Utilities/localstorage";
import Cart from "../Cart/cart";

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
            const savedCart = [];
            for (const id of storeCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            console.log('savedCart', savedCart)
            setCart(savedCart)
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
    const handleRemoveFromCart = id => {
        //visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        //remove from local storage
        removeFromLS(id);
    }
    return (
        <div>
            <h2>Available Bottles: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
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
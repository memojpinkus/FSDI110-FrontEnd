import "./product.css";
import QtyPicker from "./qtyPicker";
import { useState, useContext } from "react";
import store from "../context/storeContext";

const Product = (props) =>{

    const [quantity, setQuantity] = useState(1);

    const addProdToCart = useContext(store).addProdToCart;

    const onQtyChange = (value) =>{
        console.log("Quantity changed to: ", value);
        setQuantity(value);
    };

    const getTotal = () =>{
        let total = quantity * props.data.price;
        return "$"+total.toFixed(2);
    }

    const addProduct = () => {
        //add prod to context (state)
        let cartProd = {...props.data};
        cartProd.quantity = quantity;

        addProdToCart(cartProd);
    }

    return(
        <div className="product">
            <img src={"/imgs/"+props.data.image} alt="product img"></img>
            <h2>{props.data.title}</h2>

            <label className="price">Price: ${props.data.price}</label>
            <label className="total">Total: ${getTotal(quantity)}</label>

            <QtyPicker onChange={onQtyChange}></QtyPicker>

            <button onClick={addProduct}>Add</button>

        </div>
    );
};

export default Product;
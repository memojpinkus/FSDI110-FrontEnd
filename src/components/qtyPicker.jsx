import { useState } from "react";
import "./qtyPicker.css";

const QtyPicker = (props) => {
    let [quantity, setQuantity] = useState(1);

    const handleDecrease = () =>{
        let value = quantity;
        if(value>1){
            value=value-1;
        }
        setQuantity(value);
        props.onChange(value);
    }

    const handleIncrease = () =>{
        let value = quantity+1;
        setQuantity(value);
        props.onChange(value);
    }

    return(<div className="qtyPicker">
            <button className="btn btn-info btn-sm" onClick={handleDecrease}>-</button>
            <label> {quantity} </label>
            <button className="btn btn-info btn-sm" onClick={handleIncrease}>+</button>
            </div>);
}

export default QtyPicker;
import React, {useContext, useState} from "react"
import { CartContext } from "./Context"

const CartEntry = (props) => {
    const { removeItem } = useContext(CartContext)

    
    return (
        <div className = "cart-entry grid">
            <h3 className = "text-4b">{props.name}</h3>

            <div className = "cart-info flex">
                <p className = "text-red text-4b">{props.quantity}x</p>
                <p className = "text-4">{`@ $${props.price.toFixed(2)}`}</p>
                <p className = "text-4">${(props.quantity * props.price).toFixed(2)}</p>  
            </div>

            <button className = "clear-btn" onClick={() => removeItem(props.name)}>x</button>
        </div>
    )
}

export default CartEntry
import React, {useContext, useState} from "react"

const ModalEntry = (props) => {
    
    return (
        <div className = "modal-entry grid">
            <img src = {props.thumbnail} alt = "item thumbnail"/>
            <h3 className = "text-4b">{props.name}</h3>

            <div className = "modal-info flex">
                <p className = "text-red text-4b">{props.quantity}x</p>
                <p className = "text-4">{`@ $${props.price.toFixed(2)}`}</p>
            </div>

            <p className = "text-4">${(props.quantity * props.price).toFixed(2)}</p>  
        </div>
    )
}

export default ModalEntry
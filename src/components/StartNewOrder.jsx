import React, {useContext} from "react"
import { CartContext } from "./Context"

const StartNewOrder = () => {
    const { hideModal, emptyCart } = useContext(CartContext)
    
    const clearOrders = () => {
        hideModal()
        emptyCart()
    }

    return (
        <button className = "new-order-btn" onClick = {clearOrders}>
            Start New Order
        </button>
    )
}

export default StartNewOrder
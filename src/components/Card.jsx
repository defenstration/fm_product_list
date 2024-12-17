import { useContext } from "react"
import AddToCartBtn from "./AddToCart"
import { CartContext } from "./Context"

const Card = (props) => {
    const {cart} = useContext(CartContext)

    return (
    <div className = "card">
        <picture className = "image" style = {{border: cart.find((item) => item.name === props.name) ? '2px solid hsl(var(--clr-red))' : '2px solid transparent'}}>
            <source media="(min-width: 850px)" srcSet={props.image.desktop}></source>
            <source media="(min-width: 618px)" srcSet={props.image.tablet}></source>
            <img src = {props.image.mobile} />  
        </picture>
        
        <AddToCartBtn 
            name = {props.name}
        />
        <h3 className = "category text-4">{props.category}</h3>
        <h4 className = "name text-3">{props.name}</h4>
        <p className = "price text-3 text-red">${props.price.toFixed(2)}</p>
    </div>
    )
}

export default Card
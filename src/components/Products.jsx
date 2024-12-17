import React from "react"
import Card from "./Card"
import data from "../data/data.json"

const Products = (props) => {
    return (
        data.map((product) => {
            return <Card key = {product.name} {...product} />
        })
    )
}

export default Products
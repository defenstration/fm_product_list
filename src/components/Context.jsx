import {useState, createContext} from "react"
import data from "../data/data.json"

export const CartContext = createContext()

export const CartProvider = ( {children} ) => {
    CartProvider.propTypes = {
        
    }
    const [cart, setCart] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.name === product.name)
            if (existingProduct) {
                return prevCart.map((item) => 
                item.name === product.name ? {...item, quantity: item.quantity + 1} : item)
            } else {
                let item = data.find((item) => item.name === product.name)
                return [...prevCart, {...product, quantity: 1, price: item.price, thumbnail: item.image.thumbnail }]
            }
        })
    }

    const showModal = () => {
        const modal = document.getElementById("modal")
        if (modal) modal.showModal()
        setIsModalOpen(true)
    }

    const hideModal = () => {
        const modal = document.getElementById("modal")
        if (modal) modal.close()
        setIsModalOpen(false)

    }

    const updateQuantity = (productName, quantity) => {
        setCart((prevCart) => 
            prevCart.map((item) => 
                item.name === productName ? {...item, quantity } : item
            ).filter((item) => item.quantity > 0)
        )
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (name) => {
        setCart((prevCart) => prevCart.filter((item) => item.name !== name));
      };

    const value = {
        cart, 
        setCart,
        addToCart,
        updateQuantity,
        removeItem,
        emptyCart,
        isModalOpen, 
        showModal,
        hideModal
    }
    

    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>
}


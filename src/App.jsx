import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Products from "./components/Products.jsx"
import Cart from "./components/Cart.jsx"
import { CartProvider } from "./components/Context.jsx"
import Confirmation from "./components/Confirmation.jsx"

const App = () => {
    return (

        <CartProvider>
            <div id = "app-wrapper">
                <Header />
                <main>
                    
                    <h2 className = "text-1">Desserts</h2>
                    <div id="item-wrapper"><Products /></div>
                    <Cart />
                    <Confirmation />
                </main>
                <Footer />
            </div>
        </CartProvider>

    )
}

export default App

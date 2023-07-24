import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detatil - Open/close
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const openProductDetail =() => setisProductDetailOpen(true)
    const closeProductDetail =() => setisProductDetailOpen(false)
    
    const [productToShow, setProductToShow] = useState({})


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
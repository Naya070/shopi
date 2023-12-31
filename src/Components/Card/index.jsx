import { useContext } from "react"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from "../../Context"


const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct  = (ProductDetail) => {
        context.openProductDetail()
        context.setProductToShow(ProductDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProduct([...context.cartProduct, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProduct.filter(product => product.id === id).length > 0
        if (isInCart) {
            return (
                <button className="absolute top-0 right-0 flex justify-center items-center bg-lime-200 w-6 h-6 rounded-full m-2 p-1"
                    >
                        <CheckIcon/>
                    </button>
            )   
        } else {
            return (
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProductsToCart(event, data.data)}>
                        <PlusIcon/>
                    </button>
            )
            
        }
    }

    return (
        <div 
        className="bg-white cursor-pointer w-56 h-60"
        onClick={()=> showProduct(data.data)}>
            <figure className="relative mb-2 w-full gap-3 h-3/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt={data.data.title}/>
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}
export default Card
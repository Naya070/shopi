
import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import "./styles.css"
import { ShoppingCartContext } from "../../Context"






function ProductDetail() {
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isProductDetailOpen ? "flex" : "hidden"} flex flex-col fixed right-0 border bg-white border-black rounded-lg top-[68px] w-[360px] h-[calc(100vh-68px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <XCircleIcon className="h-6 w-6 text-black"/>
            </div>
        </aside>
        
    )
}

export default ProductDetail
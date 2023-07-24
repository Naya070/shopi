
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
                <XCircleIcon className="h-6 w-6 text-black cursor-pointer"
                    onClick={()=> context.closeProductDetail()}
                />
            </div>
            <div className='flex justify-center items-center'>
            <figure className='w-56 h-56 pz-6 items-center'>
                <img    className='w-full h-full rounded-lg' 
                        src={context.productToShow.image} 
                        alt={context.productToShow.title}/>    
            </figure>
            </div>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-2md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
        
    )
}

export default ProductDetail
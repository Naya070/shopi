
import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import "./styles.css"
import { ShoppingCartContext } from "../../Context"






function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} flex flex-col fixed right-0 border bg-white border-black rounded-lg top-[68px] w-[360px] h-[calc(100vh-68px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <XCircleIcon className="h-6 w-6 text-black cursor-pointer"
                    onClick={()=> context.closeCheckoutSideMenu()}
                />
            </div>
            
        </aside>
        
    )
}

export default CheckoutSideMenu
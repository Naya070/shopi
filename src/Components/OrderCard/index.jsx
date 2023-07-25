
import { XCircleIcon } from '@heroicons/react/24/solid'









const OrderCard = props => {
    const { id, title, image, price, handleDelete} = props
    return (
        <div className='flex justify-between items-center mb-1 border-solid border-2 border-zinc-200 rounded-lg'>
            <div className='flex items-center gap-2'>
                <figure className='w-15 h-15'>
                    <img className='w-full h-full rounded-lg ' src={image} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
            </div>
            <XCircleIcon onClick={()=> handleDelete(id)}/>
        </div>
    )
}

export default OrderCard
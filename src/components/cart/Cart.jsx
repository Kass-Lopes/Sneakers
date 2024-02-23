import { FaTrashAlt } from 'react-icons/fa';

function cart( {visibilitty, value} ) {
    const activeImage = 'images/image-product-1.jpg'
    return ( 
        <div className={ ` flex-col w-full lg:items-end lg:container mt-2 z-50 ${visibilitty}  lg:z-20 bg-transparent justify-center items-center` }>
            <div className="flex  lg:w-96 p-4 flex-col cart pb-4 lg:rounded-xl">
                <div className="pb-2">
                    <h1 className="flex text-xl ">CART</h1>   
                </div>

                <div className='flex flex-col mt-5 justify-center items-center'>
                    <div className='flex'>
                        <img src={activeImage}/>
                        <div className='flex p-3 flex-col ml-5' >
                            <p className='flex text-lg font-semibold text-gray-900'>Fall Limited Edition Sneaker</p>
                            <p className='flex gap-3'> $125.00 x {value} <span className='flex font-bold'> {`$${125.00 * value}.00`} </span> </p>
                        </div>
                        <FaTrashAlt />
                    </div>
                    <button className='flex pt-5 pb-5 pr-20 pl-20 mt-4 bg-orange-500 rounded-xl text-white'>Checkout</button>
                </div>
            </div>
        </div>
     )
}

export default cart;

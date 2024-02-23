
import { useState } from 'react';
import {FaChevronCircleLeft, FaChevronCircleRight, FaMinus, FaPlus} from 'react-icons/fa'
import car from '../../assets/images/icon-cart.svg'

function Main( {marginTop, value, increment, decrement, putImageInCartAndMain, indexOfImageCartAndMain} ) {

    const [imageIndex, setImageIndex] = useState(0)
         
    const imagesCollection = [
        'images/image-product-1.jpg',
        'images/image-product-2.jpg',
        'images/image-product-3.jpg',
        'images/image-product-4.jpg',
    ]

    const nextImage = ()=>{
        setImageIndex( (prevIndex)=> (prevIndex + 1) % imagesCollection.length )
    }
    const prevImage = ()=>{
        setImageIndex( (nextIndex)=> (nextIndex + imagesCollection.length - 1) % imagesCollection.length )
    }
           
    return ( 
        <main className={` lg:container flex -mt-56 ${marginTop}  justify-center pl-4 pr-4 `} >
           <div className='lg:flex lg:gap-28 '>
                <div className='lg:flex lg:flex-col '>
                    <div className='lg:w-96 relative flex justify-center items-center'>
                        <FaChevronCircleLeft className='absolute left-5 lg:hidden w-9 h-9 ' onClick={prevImage} />
                        <img src={imagesCollection[imageIndex]} className='lg:rounded-lg w-full h-80 lg:hidden' />

                        <img src={ indexOfImageCartAndMain } className='lg:rounded-lg w-full h-80 hidden lg:flex' />
                        <FaChevronCircleRight className='absolute right-5 lg:hidden w-9 h-9' onClick={ nextImage } />
                    </div>
                    <div className='lg:flex lg:gap-5 lg:*:w-20 lg:*:h-20 lg:rou lg:mt-5 hidden'>
                        <div > <img src={imagesCollection[0]} className='lg:rounded-lg cursor-pointer' onClick={ putImageInCartAndMain } /> </div>
                        <div > <img src={imagesCollection[1]} className='lg:rounded-lg cursor-pointer' onClick={ putImageInCartAndMain } /> </div>
                        <div > <img src={imagesCollection[2]} className='lg:rounded-lg cursor-pointer' onClick={ putImageInCartAndMain } /> </div>
                        <div > <img src={imagesCollection[3]} className='lg:rounded-lg cursor-pointer' onClick={ putImageInCartAndMain } /> </div>
                    </div>

                </div>

                <div className='flex flex-col largura lg:p-5 pt-9 pr-5 pl-5 mb-10 justify-center '>
                    <p className='letra font-semibold'>SNEAKER COMPANY</p>
                    <h1 className='flex title-fall flex-wrap'>Fall Limited Edition Sneaker </h1>
                    <p className='flex mt-3 mb-5 text-lg text-gray-500 flex-wrap'>These low-profile sneakers are you perfect casual wear companion.
                        Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. 
                    </p>
                    <div className='flex w-full justify-between h-14 items-center mb-5 '>
                        <h3 className='flex text-2xl font-bold mb-3 gap-4 justify-center items-center'>
                            $125.00 <span className='text-orange-500 text-lg bg-orange-200 pl-2 pr-2'>50%</span>
                        </h3>
                        <h4 className='text-gray-500 text-lg font-bold line-through mb-8 lg:hidden'> $250.00 </h4>
                    </div>
                    <h4 className='lg:flex lg:text-gray-500 lg:text-lg lg:font-bold line-through lg:mb-8 hidden'> $250.00 </h4>
                    <div className='lg:flex lg:gap-5 lg:items-center hidden'>
                        <FaMinus className='lg:text-orange-500 lg:text-xl cursor-pointer' onClick={ decrement }  />

                        <h5 className='lg:flex lg:text-4xl lg:font-bold'> {value} </h5>
                        
                        <FaPlus className='lg:text-orange-500 lg:text-xl cursor-pointer' onClick={ increment } />

                        <button className='lg:ml-11 lg:bg-orange-500 lg:pt-5 lg:pb-5 lg:pl-20 lg:pr-20 lg:text-white text-xl font-semibold rounded-xl hidden lg:flex'>Add to Cart</button>
                    </div>
                    <div className='flex justify-between lg:hidden pb-5 pr-16 pl-16'>

                        <FaMinus className='text-orange-500 text-xl' onClick={ decrement } />

                        <h5 className='text-4xl font-bold'> {value} </h5>
                        
                        <FaPlus className='text-orange-500 text-xl' onClick={ increment } />

                    </div>
                    <button className='ml-11 bg-orange-500 pt-5 pb-5 pl-14 pr-14 text-white text-xl font-semibold rounded-xl lg:hidden text-center'> Add to Cart </button>
                </div>
           </div>
        </main>
     );
}

export default Main;
import Header from "../components/header/Header";
import Cart from "../components/cart/Cart";
import Main from "../components/main/Main";
import { useState } from "react";


function Home() {

    const [isVisible, setIsVisible] = useState('hidden')
    const [mainMarginTop, setMainMarginTop] = useState('sm:mt-16 mt-5')
    const [value, setValue] = useState(0)
    const [clickChangeImage, setClickChangeImage] = useState('images/image-product-1.jpg')

    const hadleIsVisible = ()=>{
        if(isVisible == 'hidden'){
            setIsVisible('flex')
            setMainMarginTop('sm:-mt-52 -mt-56')

        }else{
            setIsVisible('hidden')
            setMainMarginTop('sm:mt-16 mt-5')
        } 
    }
    
    const decrement =()=>{
        ( value == 0 ) ? setValue( 0 ) : setValue( value - 1)
    }
    
    const increment =()=>{
        setValue( value + 1 )

    }
    const getIndexToPutImageInMainAndCart = (e)=> {
        setClickChangeImage(e.target.src)
    }

    return ( 
        <div className='flex relative flex-col items-center h-screen '>
            <Header showCart={hadleIsVisible} />
            <Cart visibilitty={isVisible} value={value} />
            <Main 
             marginTop={mainMarginTop}
             value={value}
             increment={increment} 
             decrement={decrement}
             putImageInCartAndMain={ getIndexToPutImageInMainAndCart }
             indexOfImageCartAndMain = { clickChangeImage }
             />
        </div>
     );
}

export default Home;
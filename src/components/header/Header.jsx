
import logo from '../../assets/images/logo.svg'
import car from '../../assets/images/icon-cart.svg'
import { FaBars, FaWindowClose} from 'react-icons/fa';
import { useState } from 'react';

import avatar from '../../assets/images/avatar.jpg'

function Header( {showCart} ) {

    const [OpenCloseMenu, setOpenCloseMenu] = useState('hidden')
    const [isClosed, setIsclosed] = useState(true)

    const OpenMobileMenu = ()=>{
        OpenCloseMenu == 'hidden' ? setOpenCloseMenu('flex') : setOpenCloseMenu('hidden')

        setIsclosed(!isClosed)
    }

    return ( 
        <header className=" lg:flex bg-white lg:container 
        lg:justify-between lg:items-center header flex justify-between 
        w-full pl-8 pr-8 items-center ">

          { 
          /*<FaWindowClose className='flex w-7 h-7 relative left-6 lg:hidden' /> */
          
             isClosed == true ? 
             <FaBars className='flex w-7 h-7 relative left-1 lg:hidden ' onClick={OpenMobileMenu} /> :
             <FaWindowClose className='flex w-7 h-7 relative left-1 lg:hidden ' onClick={OpenMobileMenu} />
          }


            <div className={` lg:hidden absolute left-0 w-full bg-slate-50 ${OpenCloseMenu} `} >
                
                <ul className='flex lg:gap-7 lg:*:text-gray-600 bg-slate-50 flex-col absolute z-50 w-full top-7 justify-center items-center gap-5 pb-3 pt-4'>
                    <li className='cursor-pointer hover:text-black '>Collections</li>
                    <li className='cursor-pointer hover:text-black '>Men</li>
                    <li className='cursor-pointer hover:text-black '>Women</li>
                    <li className='cursor-pointer hover:text-black '>About</li>
                    <li className='cursor-pointer hover:text-black '>Contact</li>
                </ul>
            </div>

            <img src={logo} className='cursor-pointer logo' />

            <div className=' lg:mr-8 lg:flex lg:justify-center lg:items-center hidden'>
                <ul className='lg:flex lg:gap-7 lg:*:text-gray-600'>
                    <li className='cursor-pointer hover:text-black '>Collections</li>
                    <li className='cursor-pointer hover:text-black '>Men</li>
                    <li className='cursor-pointer hover:text-black '>Women</li>
                    <li className='cursor-pointer hover:text-black '>About</li>
                    <li className='cursor-pointer hover:text-black '>Contact</li>
                </ul>
            </div>

            <div>
                <div className='flex items-center justify-center h-14 gap-7 lg:mr-20 '>
                    <img src={car} className=' cursor-pointer text-gray-700' onClick={ showCart } />
                    <a href="https://web.facebook.com/kasslopes0" target='_blanck'> <img src={avatar} className='flex rounded-full h-8 w-8' /> </a>
                </div>
            </div>
        </header>
     );
}

export default Header;
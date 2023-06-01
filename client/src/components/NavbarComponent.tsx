 
 // images
import logo from '../assets/images/logo.png';
import  { HamburgerIcon }  from '../icons/HamburgerIcon';

// links from react router dom
import { Link } from 'react-router-dom';

// react hooks
import { useState } from 'react';





export const Navbar = () => {

    const [menu, setShowMenu] = useState(false);

    // menu will store the div dropdown menu, hideMenu will set the state to true to show the menu

    return (
        <div className=''>

            <div className="max-w-7xl mx-auto lg:max-h-24 ">


            {/* Desktop */}
              <div className='hidden md:flex justify-between items-center px-4'>
              

                <img src={logo}

                alt='Dog logo'
                className='max-w-20 max-h-20 object-cover'
                />
          
                
                <ul className='flex gap-8 text-lg text-slate-200 font-semibold'>
                  <li>

                    <Link to="/">Home</Link>
                
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                    
                  </li>
                  <li>
                  <Link to="/adopt">Adopt</Link>
                  </li>
                  <li>
                  <Link to="/give">Give</Link>
                  </li>
                  <li>
                  <Link to="/contact">Contact</Link>
                  </li>

                </ul>
                

              </div>

              {/* Mobile */}
              
              <div className='md:hidden flex items-center justify-between px-4'>
                
                <div className="w-36">

                  <img src={logo}
                  alt='Logo icon'
                  className='object-cover'/>
                </div>
            

                {/* Hamburger Icon */}
                <div>
                  <button onClick={() => setShowMenu(!menu)}>
                    <HamburgerIcon />
              
                  </button>
                
                </div>

              </div>
              {/* Mobile Version Dropdown Menu */}
              <div className={menu ? 'dropdownMenu md:hidden' : 'hidden'}>
                <ul className='flex flex-col px-4 py-2 items-start space-y-3.5 text-lg text-slate-200 font-medium'>
                    <li className='border-b-2 border-btn-purple text-start hover:text-slate-500 duration-300'>
                      Home
                    </li>
                    
                    <li className='border-b-2 border-btn-purple  text-start hover:text-slate-500 duration-300'>
                      About
                    </li>
                    <li className='border-b-2 border-btn-purple  text-start hover:text-slate-500 duration-300'>
                      Adopt
                    </li>
                    <li className='border-b-2 border-btn-purple  text-start hover:text-slate-500 duration-300'>
                      Give
                    </li>
                    <li className='hover:text-slate-500 duration-300'>
                      Contact
                    </li>

                  </ul>
              </div>
          </div>
        </div>
    )
}
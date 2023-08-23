import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] =useState(false);
    console.log(open);
    const routes = [
        {
          "id": 1,
          "name": "Home",
          "path": "/"
        },
        {
          "id": 2,
          "name": "About Us",
          "path": "/about"
        },
        {
          "id": 3,
          "name": "Services",
          "path": "/services"
        },
        {
          "id": 4,
          "name": "Portfolio",
          "path": "/portfolio"
        },
        {
          "id": 5,
          "name": "Contact",
          "path": "/contact"
        }
      ]
      
    return (
        <nav>
          {/* here we set onclick function for small device navbar icon change */}
            <div onClick={()=> setOpen(!open) } className='bg-purple-400 md:hidden'>
            <span>
                {
                open===true?
                <XMarkIcon className="h-6 w-6 text-blue-500" />:
                <Bars3Icon className="h-6 w-6 text-blue-500" />
                }
                </span>
            
            
            </div>
            
            <ul className={`md:flex absolute md:static  bg-purple-400 pl-8 py-2 duration-500 ${open ? 'top-6' : '-top-36'}`}>
            {
              // here we call nav component
                routes.map(route => <Link
                key={route.id}
                route={route}
                ></Link> )
            }
            </ul>
        </nav>
    );
};

export default Navbar;
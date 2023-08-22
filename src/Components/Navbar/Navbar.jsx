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
            <div onClick={()=> setOpen(!open)}>
            <Bars3Icon className="h-6 w-6 text-blue-500" />
            </div>
            <span>{open===true?"open":"close"}</span>
            <ul className='md:flex'>
            {
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
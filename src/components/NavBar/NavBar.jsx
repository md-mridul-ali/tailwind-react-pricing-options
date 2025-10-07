import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
// this data for dynamic navbar design
const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "About",
        path: "/about",
    },
    {
        id: 3,
        name: "Services",
        path: "/services",
    },
    {
        id: 4,
        name: "Projects",
        path: "/projects",
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
    },
];


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navigationData.map(route => <Link key={route.id} route={route}>

    </Link>)

    return (
        // dynamic navbar design
        <nav className='flex justify-between mx-10 mt-2 text-black'>
            <span className='flex hover:cursor-pointer' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <X className='md:hidden'></X> :
                        <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000
                    ${open ? 'top-8 ' : '-top-40'}
                    bg-amber-200`}>
                    {links}
                </ul>

                <h3 className='ml-4'>My Navbar</h3>
            </span>

            <ul className='md:flex hidden'>

                {
                     links
                }
            </ul>


            {/* dynamic navbar design */}
            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul> */}


            {/* static navbar design */}
            {/* <ul className='flex'>
                <li className='mr-10'><a href='/'>Home</a></li>
                <li className='mr-10'><a href='/About'>About</a></li>
                <li className='mr-10'><a href='/Blog'>Blog</a></li>
            </ul> */}
            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;
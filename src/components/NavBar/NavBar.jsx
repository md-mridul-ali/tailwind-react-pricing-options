import React from 'react';
import Link from './Link';
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
    return (
        <nav>

            <ul className='flex'>

                {
                    navigationData.map(route => <Link key={route.id} route={route}>

                    </Link>)
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
        </nav>
    );
};

export default NavBar;
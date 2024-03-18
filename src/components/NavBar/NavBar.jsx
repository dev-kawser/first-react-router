import { useState } from "react";
import Link from "../Link/Link";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { path: '/home', id: 1, name: 'Home' },
        { path: '/about', id: 2, name: 'About Us' },
        { path: '/services', id: 3, name: 'Services' },
        { path: '/products', id: 4, name: 'Products' },
        { path: '/contact', id: 5, name: 'Contact Us' }
    ];

    return (
        <div className="py-5 mt-5 lg:mt-10">
            <div className="lg:hidden" onClick={() => setOpen(!open)}>

                {
                    open === true ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                }

            </div>

            <ul className={`
            lg:flex absolute lg:static text-black px-6 py-3 rounded-xl duration-1000 bg-blue-300
            ${open ? 'left-12 bg-blue-700 text-white hover:bg-blue-950' : '-left-72'}
            
            `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default NavBar;
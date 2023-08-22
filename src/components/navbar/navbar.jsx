import React from 'react';
import './Navbar.css'
import { Button } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div className="navbar">
            <nav className='nav'>
                <h1 className="logo">
                    Tiendita
                </h1>
                <ul className='nav-links'>
                    <li>
                        <Button colorScheme="green">
                            <FaShoppingCart
                                style={{ marginRight: '5px', color: 'white' }} // Change the color here
                                size={15}
                            />
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

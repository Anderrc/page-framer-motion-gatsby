import { motion } from 'framer-motion';
import React from 'react';
import Link from '../../atoms/link/link';
import './header.scss';
const Header = () => {
    return (
        <header className="o-header">
            <nav className="o-header__nav">
                <a href="/" className="nav__logo">
                    <motion.div
                        animate={{ rotate: 360 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 2 }}
                    >
                        ✌
                    </motion.div>
                    Animation
                </a>

                <ul className="nav__links">
                    <li className="link">
                        <Link href="#" content="Stocks"></Link>
                    </li>
                    <li className="link">
                        <Link href="#" content="Shops"></Link>
                    </li>
                    <li className="link">
                        <Link href="#" content="Download"></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

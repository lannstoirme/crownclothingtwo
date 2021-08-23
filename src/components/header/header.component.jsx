import React from 'react';

import { ReactComponent as Logo } from './crown.svg'

import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
    <div className='logo-container'>
    <Link to="/">
   
        <Logo className='logo'></Logo>
    </Link>
    </div>
    <div className='options'>
        <div className='option'>
        <Link to='/shop'>
            SHOP
        </Link>
        </div>
        <div className='option'>
        <Link className='option' to='/shop'>
            CONTACT 
        </Link>
        </div>

    </div>

    </div>
)

export default Header; 
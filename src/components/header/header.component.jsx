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
        
        <Link className='option' to='/shop'>
            SHOP
        </Link>

    
        <Link className='option' to='/shop'>
            CONTACT 
        </Link>
        
        <Link className='option' to='/signin'>
                SIGN IN 
                
        </Link>
        
        </div>

    </div>
)

export default Header; 
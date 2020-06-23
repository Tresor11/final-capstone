import React from 'react'
import {Link} from 'react-router-dom'
import toggle from '../helper/index';
const Nav=()=>(
    <nav>
        <div onClick={toggle} className='hamburger'>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <ul className='nav-links'>
            <li><Link>Home</Link></li>
            <li><Link>Profile</Link></li>
            <li><Link>Logout</Link></li>
        </ul>
        <div className='profile has-text-danger has-background-black'>
        <i class="fas fa-lock"></i>
        </div>
    </nav>
)

export default Nav;
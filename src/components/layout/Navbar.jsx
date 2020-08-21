import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'


const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/dashboard" className="brand-logo">Red Sales</Link>
                    <SignedInLink/>
                    <SignedOutLink/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

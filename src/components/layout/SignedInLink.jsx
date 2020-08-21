import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLink = () => {
    return (
        <>
            <ul className="right">
                <li><NavLink to="/createrequest">New Request</NavLink> </li>
                <li><NavLink to="/">Log Out</NavLink> </li>
                <li>
                    <NavLink to="/dashboard" 
                        className="btn btn-floating pink lighten-1"> NN
                    </NavLink> 
                </li>
            </ul>
        </>
    )
}

export default SignedInLink

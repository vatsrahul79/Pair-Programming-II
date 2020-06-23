import React from 'react'
import {Link} from 'react-router-dom'


export default function Navabar(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to = '/' >Home</Link>

                </li>
                <li>
                    <Link to = "/about">About</Link>

                </li>
                <li>
                    <Link to = '/login' >Login</Link>

                </li>
                <li>
                    <Link to = '/contact us' >Contact us</Link>

                </li>
                <li>
                    <Link to = '/shoppingcart'>Cart</Link>

                </li>
            </ul>

        </div>
    )
}
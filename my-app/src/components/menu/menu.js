import React from 'react'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'


function Menu() {
    return (
        <Toolbar>
            <nav className='nav__menu'>
                <Link to={`/contact/`}>contact</Link>
                <Link to={`/about/`}>about</Link>
            </nav>
        </Toolbar>

    )
}
export default Menu
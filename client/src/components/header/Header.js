import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

const Header = () => {

    return (
        <div className="header">
            <nav className="navbar">
                <Link to="/" className="" style={{textDecoration:"None"}}>
                    <h5 className="logo" 
                    onClick={() => window.scrollTo({top: 0})} id="logoName">
                        Social Book
                    </h5>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header

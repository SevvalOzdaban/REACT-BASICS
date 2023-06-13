import React from 'react'
import CustomNavLink from './CustomNavLink'

function Navbar() {
    return (
        <nav className="navbar navbar-expand bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomNavLink to='/dashboard' title='Dashboard' />
                        </li>
                        <li className="nav-item">
                            <CustomNavLink to="/settings" title='Settings' />
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
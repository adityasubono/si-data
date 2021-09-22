import React from 'react';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand text-white" href="#">SI-DATA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white"
                                   aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white"
                                   href="#" id="navbarDropdown"
                                   role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Master Data
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/user">User Data</a></li>
                                    <li><a className="dropdown-item" href="/player">Player Data</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/report">Report Data</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default Navbar;

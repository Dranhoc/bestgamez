import React, { useState } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function Header({searchTerm, setSearchTerm}) {

    function handleChange(e) {
        setSearchTerm(e.target.value);
    };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        };
    };
   
    return (
        <header>
            <div className="containerLogo">
                <a href="../"><img src="/assets/ico/logo.svg" alt="Logo Joystick" className="logoImage" /></a>
                <p className='logoText'>BestGamez</p>
            </div>
            
            <form>
                <input
                    type="text"
                    name="search"
                    className="searchBar"
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Search for games"/>
            </form>
            
            <nav className="containerBurger">
                <NavDesktop/>
                <NavMobile/>
            </nav>
        </header>
    );
};

export default Header;
import React, { useState } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit() {
        //Faire quelque chose avec la recherche
        console.log('Recherche soumise:', searchTerm);
    };

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
                <img src="./assets/ico/logo.svg" alt="Logo Joystick" className="logoImage" />
                <p className='logoText'>BestGamez</p>
            </div>
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    className="searchBar"
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Search for games"/>
            </form>

            {/* <div className={burgerClass} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div> */}
            
            <nav className="containerBurger">
                <NavDesktop/>
                <NavMobile/>
            </nav>
        </header>
    );
};

export default Header;
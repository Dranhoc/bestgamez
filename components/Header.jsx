import React, { useState, useTransition } from 'react';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [burgerClass, setBurgerClass] = useState("containerBurger unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

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

    function toggleMenu() {
        if(!isMenuClicked) {
            setBurgerClass("containerBurger clicked");
        }
    }

   
    return (
        <header>
            <div className="containerLogo">
                <img src="assets/ico/logo.svg" alt="Logo Joystick" classnName="logoImage" />
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

            <div className={burgerClass} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            <nav className={menuClass}>
                <ul>
                    <li>Log in</li>
                    <li>Sign up</li>
                    <li>API</li>
                </ul> 
            </nav>
        </header>
    );
};

export default Header;
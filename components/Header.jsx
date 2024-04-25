import React, { useState } from 'react';

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
            <p className='logo'>RAWG</p>
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
            <nav className="navBar">
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
import React, { useState, useEffect } from 'react';
import Api from './Api';

function Filters() {
    const [orderBy, setOrderBy] = useState('');
    const [platform, setPlatform] = useState('');
    const [gameType, setGameType] = useState('');
    

    const handleFilterChange = (filterType, value) => {
        switch (filterType) {
            case 'orderBy':
                setOrderBy('&ordering=' + value);
                break;
            case 'platform':
                setPlatform('&platforms=' + value);
                break;
            case 'gameType':
                setGameType('&genres=' + value);
                break;
            default:
                break;
        }
    };

    return (
        <>    
            <section className='filters'>

            <div>
                <select onChange={(e) => handleFilterChange('orderBy', e.target.value)} className='custom-select'>
                    <option value="" disabled selected>Order by...</option>
                    <option value="added">Date added</option>
                    <option value="name">Name</option>
                    <option value="released">Release date</option>
                </select>
            </div>

            <div>
                <select onChange={(e) => handleFilterChange('platform', e.target.value)} className='custom-select'>
                    <option value="" disabled selected>Platforms</option>
                    <option value="4">PC</option>
                    <optgroup label="Playstation">
                        <option value="18">Playstation 4</option>
                        <option value="187">Playstation 5</option>
                    </optgroup>
                    <optgroup label="Xbox">
                        <option value="1">Xbox One</option>
                        <option value="186">Xbox Series S/X</option>
                    </optgroup>
                    <option value="3">iOS</option>
                    <option value="21">Android</option>
                    <option value="5">Apple Macintosh</option>
                    <option value="6">Linux</option>
                    <optgroup label="Nintendo">
                        <option value="83">Nintendo 64</option>
                        <option value="9">Nintendo DS</option>
                        <option value="13">Nintendo DSi</option>
                        <option value="8">Nintendo 3DS</option>
                        <option value="7">Nintendo Switch</option>
                    </optgroup>
                </select>
            </div>

            <div>
                <select onChange={(e) => handleFilterChange('genre', e.target.value)} className='custom-select'>
                    
                        <option value="" disabled selected>Genres</option>
                        <option value="51">Indie</option>
                        <option value="4">Action</option>
                        <option value="10">Strategy</option>
                        <option value="5">RPG</option>
                        <option value="2">Shooter</option>
                        <option value="3">Adventure</option>
                        <option value="7">Puzzle</option>
                        <option value="1">Racing</option>
                        <option value="15">Sports</option>
                        <option value="14">Simulation</option>

                </select>
            </div>

            </section>
            <Api
                platform={platform}
                genres={gameType}
                ordering={orderBy}
            />
        
        </>
    )
}

export default Filters;
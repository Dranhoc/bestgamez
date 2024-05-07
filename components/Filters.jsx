import { useState } from 'react';
import Api from './Api.jsx';

function Filters() {
    const [selectedValue, setSelectedValue] = useState({});



    function handleChange(e) {
        setSelectedValue(e.target.value);
        console.log(selectedValue);
    };

    return (
      <>
        <section className='filters'>

            <div>
                <select onChange={handleChange} className='custom-select'>
                    <option value="" disabled selected>Order by...</option>
                    <option value="date_added">Date added</option>
                    <option value="name">Name</option>
                    <option value="release_date">Release date</option>
                    <option value="popularity">Popularity</option>
                    <option value="average_rating">Average rating</option>
                </select>
            </div>

            <div>
                <select onChange={handleChange} className='custom-select'>
                    <option value="" disabled selected>Platforms</option>
                    <option value="pc">PC</option>
                    <optgroup label="Playstation">
                        <option value="ps4">Playstation 4</option>
                        <option value="ps5">Playstation 5</option>
                    </optgroup>
                    <optgroup label="Xbox">
                        <option value="ps4">Xbox One</option>
                        <option value="ps5">Xbox Series S/X</option>
                    </optgroup>
                    <option value="ios">iOS</option>
                    <option value="android">Android</option>
                    <option value="apple_macintosh">Apple Macintosh</option>
                    <option value="linux">Linux</option>
                    <option value="Nintendo">Nintendo</option>
                </select>
            </div>

            <div>
                <select onChange={handleChange} className='custom-select'>
                    
                        <option value="" disabled selected>Type of game</option>
                        <option value="free_online_games">Free Online Games</option>
                        <option value="action">Action</option>
                        <option value="strategy">Strategy</option>
                        <option value="rpg">RPG</option>
                        <option value="shooter">Shooter</option>
                        <option value="adventure">Adventure</option>
                        <option value="puzzle">Puzzle</option>
                        <option value="racing">Racing</option>
                        <option value="sports">Sports</option>

                </select>
            </div>


        </section>
        <Api />
        </>
    )
}

export default Filters;
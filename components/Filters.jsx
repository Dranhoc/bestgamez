import { useState } from 'react';

function Filters() {
    const [selectedValue, setSelectedValue] = useState({});



    function handleChange(e) {
        setSelectedValue(e.target.value);
        console.log(selectedValue);
    };

    return (
        <section className='filters'>
            {/* filtering by name */}
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

            {/* sorting */}
            <div>
                <select onChange={handleChange} className='custom-select'>
                    <option value="" disabled selected>Platforms</option>
                    <option value="date_added">Date added</option>
                    <option value="name">Name</option>
                    <option value="release_date">Release date</option>
                    <option value="popularity">Popularity</option>
                    <option value="average_rating">Average rating</option>
                </select>
            </div>
        </section>
    )
}

export default Filters;
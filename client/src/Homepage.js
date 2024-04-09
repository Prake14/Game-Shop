import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../src/homepage.css';

function Homepage() {
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('https://game-website-5hi0.onrender.com/games')
            .then(response => {
                setGames(response.data);
            })
            .catch(error => {
                console.error('Error fetching games:', error);
            });
    }, []);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const filteredGames = games.filter(game => {
        return game.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className='container'>
            <div className='input'>
            <input
                type='text'
                placeholder='Search by title...'
                value={searchTerm}
                onChange={handleSearch}
            /></div>
            <div className='gambox'>
                {filteredGames.map((item, i) => (
                    <a key={item.id} href={`/${item.id}`}>
                        <div className='box' key={i}>
                            <div className='titles'>
                                <h1 style={{ color: 'white' }}>Title:</h1>
                                <h1 className="titlename" style={{ color: 'white' }}>{item.title}</h1>
                            </div>
                            <p className='des'>
                                <b>Description about the game</b><br />
                                {item.short_description}
                            </p>
                            <div className='img'>
                                <img src={item.thumbnail} alt={`Thumbnail for ${item.title}`} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Homepage;
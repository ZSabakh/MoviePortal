import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './home.css'

function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`${window.$BASE_URL}movie/top_rated?api_key=${window.$API_KEY}&language=en-US&page=1`)
            .then(result => result.json())
            .then(result => {
                setMovies(result.results)
            })
    }, [])

    return (
        <div className="container">
            <h1>Movies</h1>

            <div className="moovies_list">
                {movies.map((item, index) => (
                    <div key={index} className="movie-item">
                        <Link to={`/movie/${item.id}`}>
                            <img src={`${window.$IMAGE_CDN}${item.backdrop_path}`} alt="movieimage" />
                            <span>{item.title}</span>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    )
}


export default Home;
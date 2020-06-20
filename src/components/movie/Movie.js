import React, { useState, useEffect } from 'react';

import './movie.css'

const Movie = ({ match }) => {

    const {
        params: { movie_id },
    } = match;


    const [movie, setMovie] = useState([])
    const [load, setLoad] = useState(true)


    useEffect(() => {
        const fetchMovie = async () => {
            const result = await fetch(`${window.$BASE_URL}movie/${movie_id}?api_key=${window.$API_KEY}`)
                .then(result => result.json())
            setLoad(false)
            setMovie(result);
        };
        fetchMovie();
    }, [movie_id]);

    return (
        <div className="container">

            {load ? (
                <div>Loading ...</div>
            ) : (
                    <div className="movie_wrapper">
                        <div className="movie_left_info">
                            <img src={`${window.$IMAGE_CDN}${movie.poster_path}`} alt="image" />
                            <span className="imdb_data">
                                rating: {movie.vote_average}/{movie.vote_count}
                            </span>
                        </div>
                        <div className="movie_right_info">
                            <h1>{movie.original_title}</h1>
                            <span>{movie.overview}</span>
                            <p>revenue: {movie.revenue}</p>
                            <p>release date: {movie.release_date}</p>
                            <p>popularity: {movie.popularity}</p>
                            <p>
                                <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} target="_blank">IMDB</a>
                            </p>
                        </div>

                    </div>
                )}


        </div>
    )
}


export default Movie;
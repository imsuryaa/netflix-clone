import React, {useState, useEffect} from 'react'
import axios from '../axios'


// destructuring with props
const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])

    // Snipet of code which runs based on specific condition
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request
        }
        fetchData()
        // if [], run once when row loads, and dont run again
    }, [fetchUrl])

    console.log(movies);

    return (
        <div className='row'>
            {/** title */}
            <h2>{title}</h2>

            {/** container with several row posters */}
            <div className='row_posters'>
                {movies.map(movie => (
                    <img src={movie.poster_path} alt={movie.name}/>
                ))}
            </div>
            {/* */}

        </div>
    )
}

export default Row

import {useState,  useEffect} from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieHome.css'
import SearchIcon from '.././Search.svg'

//b3af9268
const API_URL = 'http://www.omdbapi.com?apikey=b3af9268'

// const movie1 = {
//     "Title": "Avengers Assemble",
//     "Year": "2012–2019",
//     "imdbID": "tt2455546",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
// }


const MovieHome = () => {
    const[movies, setMovie] = useState([])
    const [SearchItem, SetSearchItem] = useState('')

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovie(data.Search);
    }

    useEffect(() => {
        searchMovies("avatar")
    }, [])

  return (
    <div className='movie-app'>
        <h1>MovieLand</h1>


        <div className='search'>
            <input  placeholder='search for movies' value={SearchItem} onChange={(e) => SetSearchItem (e.target.value)}/>
            <img src={SearchIcon} alt='seach the movie'onClick={() => searchMovies(SearchItem)}/>
        </div>

        {
            movies?.length > 0 ? (
                <div className="container">
                    { movies.map((movie) => (<MovieCard movie={movie}/>))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movie found</h2>
                </div>
            )
        }
        
    </div>
  )
}

export default MovieHome
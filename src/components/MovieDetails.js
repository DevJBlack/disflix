import React , {Component} from 'react'

export default class MovieDetails extends Component {
    constructor(props){
        super(props)
    }

    render(){
        // console.log(this.props)
        let mappedMovies = this.props.movies.filter((item,i)=>{
            return item.title.toLowerCase().includes(this.props.search.toLowerCase())
        })
        .map((movie,i)=>{
            return (
                <div key={i} className='card'>
                    <h1>{movie.title}</h1>
                    <h3>{movie.year}</h3>
                    <img src={movie.image} alt="movie image"/>
                </div>
            )
        })
        return(
            <div className='cards-display'>
                {mappedMovies}
            </div>
        )
    }
} 

//Again props are assessible if you pass it in the constructor and super (lines 4 and 5)
//Now we can use the movies prop from App.js (passed down starting from App.js -> MovieList -> MovieDetails) and the userinput/search prop (passed down from its parents MovieList)
//We filter through the movies props for the userinput/search prop that we received from MovieList. It now allows us to filter only what the user types in. 
//We have chained the .map method onto that .filter so we will display all of the movies that we match that search. In the .map we return JSX so now it is displaying properly.
//We store the result of the .filter and .map in a variable called mappedMovies.
//We display that variable on line 24 in the render's return.   
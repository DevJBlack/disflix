import React , {Component} from 'react'
import MovieDetails from './MovieDetails';

export default class MovieList extends Component {
    constructor(props){
        super(props)
        
        this.state={
            userInput:''
        }
        // this.handleSearch = this.handleSearch.bind(this)
        //one way to bind methods to 'this' class's constructor object
    }

    handleInput(value){
        // console.log(value)
        this.setState({
            userInput:value
        })
    }

    // handleSearch=()=>{
    //     console.log(this.state.userInput)
    // }
    //using an arrow function to bind method to 'this' class's constructor object
    //just an fyi I commented this method out because it doesn't do anything in this application

    render(){
        return(
            <div className='movie-list'>
                <form>
                    <input type="text" placeholder='Search' onChange={(e)=>this.handleInput(e.target.value)}/>
                    {/* <button onClick={()=>this.handleSearch()}>Search</button> */}
                    {/* Another way to bind methods to 'this' class's constructor object */}
                </form>
                <MovieDetails movies={this.props.movies} search={this.state.userInput}/>
            </div>
        )
    }
} 

//Line 5 and 6 allows us to access props
//It now has access to props, notice that it is a class component, which means that we must refer to them as this.props. For functional components we refer to them just as props
//Line 36 we pass that prop down to its child component (MovieDetails)
//Line 36 we also pass the userInput property from state to its child component (MovieDetails)
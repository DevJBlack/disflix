import React, {Component} from 'react';
import './App.css';
import Movies from './Movies';
import Nav from './components/Nav'
import MovieList from './components/MovieList'

class App extends Component {

  render(){
    // console.log(Movies)
    return (
      <div className='app'>
        <Nav/>
        <MovieList movies={Movies}/>
      </div>
    );

  }
}

export default App;

//some notes:
//Movies is declared above on line 3, being imported locally
//Then line 14 I pass it down to its child component (MovieList)
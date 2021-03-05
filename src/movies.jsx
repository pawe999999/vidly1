
import  React, { Component } from 'react';
import { getMovie, getMovies } from './fakeMovieService';




export default class Movies extends Component {

    state = {
      movies: getMovies()
    };
   
    handleDelete = movie => {
      const movies = this.state.movies.filter(m=> m._id !== movie._id);
      this.setState({movies})
    };


    

    render() {
      const {length: numberOfFilms} = this.state.movies

      if(numberOfFilms === 0){
        return <p className="m-5">Bruh no movies</p>
      }
    return (<React.Fragment>
      <p>There are {numberOfFilms} movies</p>
      <table className="table" >
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th>   </th>
        </tr>
      </thead>
      <tbody>
      {this.state.movies.map(movie =>(
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>{<button className="btn btn-danger" onClick={() => this.handleDelete(movie)}>Delete</button>}</td>
        </tr>
        ))}
      </tbody>
    </table>
    
    </React.Fragment>
  

      
    );
  }
}

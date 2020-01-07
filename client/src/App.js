import React, { useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieUpdate from "./Movies/MovieUpdate";
import AddMovie from "./Movies/AddMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const deleteMovie = id => {
    axios
      .delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  const addMovie = movie => {
    axios
      .post(`http://localhost:5000/api/movies/`, movie)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} deleteMovie={deleteMovie}/>;
        }}
      />
      <Route
        path="/add-movie/"
        render={props => {
          return <AddMovie {...props} addMovie={addMovie}/>;
        }}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          return <MovieUpdate {...props} deleteMovie={deleteMovie}/>;
        }}
      />
    </>
  );
};

export default App;

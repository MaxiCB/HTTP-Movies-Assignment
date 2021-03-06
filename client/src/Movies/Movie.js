import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";
import MovieUpdate from "./MovieUpdate";
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  deleteMovie = id => {
    const deleteMovie = this.props.deleteMovie;
    deleteMovie(id);
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={e => this.saveMovie}>
          Save
        </div>
        <Link to={`/update-movie/${this.state.movie.id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <div
          className="save-button"
          style={{ marginTop: "60px" }}
          onClick={e => console.log('test')}
        >
          Update
        </div>
      {/* <MovieUpdate movie={this.state.movie} /> */}
    </Link>
        <Link to={`/`} style={{ textDecoration: 'none', color: 'white' }}>
          <div
            className="save-button"
            style={{ marginTop: "120px" }}
            onClick={e => this.deleteMovie(this.props.match.params.id)}
          >
            Delete
          </div>
        </Link>
      </div>
    );
  }
}

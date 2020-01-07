import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";

const MovieUpdateCard = props => {
  const { title, director, metascore, stars } = props.movie;

  let tempMovie = {
    id: props.movie.id,
    title: title,
    director: director,
    metascore: metascore,
    stars: props.movie.stars
  };
  console.log(tempMovie);

  const updateMovie = movie => {
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <Input
        placeholder="New Title: "
        onChange={e => (tempMovie.title = e.target.value)}
      />
      <div className="movie-director">
        Director: <em>{director}</em> <br />
        <Input
          placeholder="New Director: "
          onChange={e => (tempMovie.director = e.target.value)}
        />
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
        <br />
        <Input
          placeholder="New Score: "
          onChange={e => (tempMovie.metascore = e.target.value)}
        />
      </div>
      <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
        <div
          className="save-button"
          style={{ marginTop: "320px" }}
          onClick={e => updateMovie(tempMovie)}
        >
          Update
        </div>
      </Link>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieUpdateCard;

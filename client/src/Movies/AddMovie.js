import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from "reactstrap";

const AddMovie = props => {
  const addMovie = movie => {
    const add = props.addMovie;
    add(movie);
    props.history.push("/")
  };

  let testMovie = {
    title: "",
    director: "",
    metascore: "",
    stars: []
  };

  return (
    <>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Title: </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Title" onChange={e => (testMovie.title = e.target.value)}/>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Director: </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Director" onChange={e => (testMovie.director = e.target.value)}/>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Score: </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Score" onChange={e => (testMovie.score = e.target.value)}/>
      </InputGroup>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button onClick={e => addMovie(testMovie)}>Add Movie</Button>
      </div>
    </>
  );
};

export default AddMovie;

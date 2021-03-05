import React from "react";

const MoviesId = ({ match, history }) => {
  return (
    <div>
      <h1>Movies Form {match.params.id} </h1>;
      <button
        className="btn btn-primary"
        onClick={() => history.replace("/movies")}
      >
        Save
      </button>
      ;
    </div>
  );
};

export default MoviesId;

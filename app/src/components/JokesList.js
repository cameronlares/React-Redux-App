import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJokes } from "../actions/actions";

const JokesList = (props) => {
  //component
  useEffect(() => {
    //call the action creator

    props.fetchJokes();
  }, []);

  return (
    <div>
      {props.isLoading && <h4> Loading jokes data...</h4>}
      {props.error && (
        <p className="error">Uh oh, something happened....{props.error}</p>
      )}
      {props.jokes.length > 0 && (
        <div className="card">
          {" "}
          {props.jokes.map((joke) => (
            <div className="card-content" key={joke.id}>
              {" "}
              <h2>Joke #{joke.id} </h2>
              {joke.setup}
              <h3>Punchline</h3>
              {joke.punchline}{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    jokes: state.jokes,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchJokes })(JokesList);

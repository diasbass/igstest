import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component {
  state = {
    events: [],
    movieTitle: [],
    movieId: []
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const response = await api.get("");
    for (let i = 0; i < response.data.length; i++) {
      this.setState({
        events: response.data[i].event,
        movieTitle: response.data[i].event.title
      });
      console.log(this.state.events);
      //console.log(this.state.movieTitle);
    }
  };
  render() {
    return <div className="movie-list" />;
  }
}

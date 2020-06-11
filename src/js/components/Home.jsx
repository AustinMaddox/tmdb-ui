import axios from "axios";
import React from "react";

import Table from "./Table.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      SearchTerm: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const movies = await this.fetchPopularMovies();
    this.setState({
      movies: movies,
    });
  }

  handleChange(event) {
    this.setState({
      SearchTerm: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const movies = await this.fetchSearchMovies();
    this.setState({
      movies: movies,
    });
  }

  fetchPopularMovies = async () => {
    const { api_url } = this.props;
    try {
      const { data } = await axios.get(api_url + "/popular");
      return data.results;
    } catch (error) {
      this.handleError(error, api_url);
    }
  };

  fetchSearchMovies = async () => {
    const { api_url } = this.props;
    try {
      const { data } = await axios.get(
        api_url + "/search?query=" + this.state.SearchTerm
      );
      return data.results;
    } catch (error) {
      this.handleError(error, api_url);
    }
  };

  render() {
    if (!this.state.movies) return null;
    return (
      <div className="m-4">
        <form
          className="sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2"
          onSubmit={this.handleSubmit}
        >
          <div className="flex items-center p-2">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={this.state.SearchTerm}
              onChange={this.handleChange}
            />
            <button
              className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white ml-4 py-1 px-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
        <Table movies={this.state.movies} />
      </div>
    );
  }
}

export default Home;

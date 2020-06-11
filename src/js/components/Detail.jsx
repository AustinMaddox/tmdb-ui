import axios from "axios";
import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  async componentDidMount() {
    const movie = await this.fetchMovie();
    this.setState({
      movie: movie,
    });
  }

  fetchMovie = async () => {
    const { api_url, id } = this.props;
    try {
      const { data } = await axios.get(api_url + "/detail/" + id);
      return data;
    } catch (error) {
      this.handleError(error, api_url);
    }
  };

  render() {
    const { movie } = this.state;
    if (!movie) return null;
    return (
      <div className="m-4">
        <div>
          <a href="/" className="text-blue-700 underline">
            &laquo; Back to Home
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div>
            {movie.poster_path && (
              <img
                className=""
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                alt={movie.overview}
              />
            )}
          </div>
          <div>
            <div className="text-4xl">{movie.title}</div>
            <div className="py-4">{movie.overview}</div>
            <div className="py-4">
              {movie.backdrop_path && (
                <img
                  className=""
                  src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
                  alt={movie.overview}
                />
              )}
            </div>
            <div>{movie.tagline}</div>
            <div className="py-4">Release Date: {movie.release_date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;

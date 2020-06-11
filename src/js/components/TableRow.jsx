import React from "react";

class TableRow extends React.Component {
  handleClick() {
    alert("lcicke");
  }
  render() {
    const { movie } = this.props;
    return (
      <tr>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              {movie.poster_path && (
                <img
                  className="h-10 w-10 rounded-full"
                  src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  alt={movie.overview}
                />
              )}
            </div>
            <div className="ml-4">
              <div className="text-sm leading-5 font-medium hover:text-blue-900 hover:underline text-gray-900">
                <a href={movie.id}>{movie.title}</a>
              </div>
              <div className="text-sm leading-5 text-gray-500">
                {movie.overview.length < 80
                  ? movie.overview
                  : movie.overview.slice(0, 80) + "..."}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 uppercase">
            {movie.original_language}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
          {movie.release_date}
        </td>
      </tr>
    );
  }
}

export default TableRow;

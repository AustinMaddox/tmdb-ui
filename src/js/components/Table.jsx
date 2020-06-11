import React from "react";

import TableRow from "./TableRow.jsx";

class Table extends React.Component {
  render() {
    const TableRows = this.props.movies.map((movie) => (
      <TableRow key={movie.id} movie={movie} />
    ));
    return (
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Language
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Released
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">{TableRows}</tbody>
      </table>
    );
  }
}

export default Table;

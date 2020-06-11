// Assets
import "../sass/tailwind-source.scss";
import "../../node_modules/animate.css/animate.css";

// Community Contributed Modules
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

// React Components
import CheckApiStatus from "./components/CheckApiStatus.jsx";
import CheckEnvironmentVariables from "./components/CheckEnvironmentVariables.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Detail from "./components/Detail.jsx";
import NotFound from "./components/NotFound.jsx";

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api_url: process.env.API_URL,
    };
  }

  render() {
    return (
      <div>
        <CheckEnvironmentVariables />
        <CheckApiStatus api_url={this.state.api_url} />
        <main>
          <Router>
            <Home path="/" api_url={this.state.api_url} />
            <Detail path="/:id" api_url={this.state.api_url} />
            <NotFound default />
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Entry;

ReactDOM.render(<Entry />, document.getElementById("app-root"));

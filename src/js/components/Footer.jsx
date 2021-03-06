import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-smoke-400 py-2">
        <p className="text-center text-white text-xs">
          Copyright &copy; {new Date().getFullYear()} {process.env.APP_NAME}.
          All rights reserved.
        </p>
      </footer>
    );
  }
}

export default Footer;

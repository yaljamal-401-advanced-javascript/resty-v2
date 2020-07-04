import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>RESTy</h1>
        <ul>
          <Link to='/'> Home </Link>
          <Link to='history'>History</Link>
        </ul>

      </header>
    );
  }
}

export default Header;

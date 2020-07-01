import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import History from '../history/history.js';
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>RESTy</h1>
       <nav>
         <ul>
           <li>
            <Link exact to='/'>Home</Link>
           </li>
           <li>
            <NavLink exact to='/history'>History</NavLink>
           </li>
         </ul>
       </nav>
      </header>
    );
  }
}

export default Header;

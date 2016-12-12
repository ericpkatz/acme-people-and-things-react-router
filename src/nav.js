import React from 'react';
import { Link } from 'react-router';
const Nav = ({ pathname })=> {
  return (
      <ul className='nav nav-tabs' style={{ marginBottom: '10px' }}>
        <li className={ pathname === '/' ? 'active': '' }>
          <Link to='/'>Home</Link>
        </li>
        <li className={ pathname === '/people' ? 'active': '' }>
          <Link to='/people'>People</Link>
        </li>
      </ul>
  );
};

export default Nav;

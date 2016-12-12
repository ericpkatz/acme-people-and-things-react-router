import React from 'react';
import Nav from '../nav.js';

const Layout = (props)=> {
  return (
      <div className='container'>
      <Nav pathname={ props.location.pathname }/>
      { props.children }
    </div>
    );
};

export default Layout;


import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
      <div className='header'>
          <div className='inline'>
            <div className='inline logo'>TLU</div>
            <div className='inline category'>Home</div>
            <div className='inline category'>Employees</div>
          </div>
          <div className='inline'>
            <div className='inline search-input'><input placeholder='Search'/></div>
            <div className='inline search-button'><button>Search</button></div>
          </div>
      </div>
    );
  };
  
export default Header;
import './Header.css';
import React from 'react';
import punkLogo from '../assets/logo.png';
import SearchIcon from '@material-ui/icons/Search'

function Header() {
  return (
    <div className='header'>
      <div className="logoContainer">
        <img src={punkLogo} className='punkLogo' alt='Logo' />
      </div>
      <div className="searchBar">
       <div className="searchIconContainer">
         <SearchIcon />
         </div> 
         <input className='searchInput'  placeholder='Collection, item or user...' />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>MarketPlace</p>
        <p>Create</p>
      </div>
      <div className="loginButton">
        Login
      </div>
    </div>
  )
}

export default Header
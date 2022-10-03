import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      <div className='header_left'>
        <IconButton>
            <MenuIcon /> 
        </IconButton>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQKEJJeAFbgd5ZK_DdEUz4dNPgp6Aa3hD_K8gZRmUP2EfhPxOR9OpXTOAzjwLu_LLRyQ&usqp=CAU"
            alt="/"
        />   
      </div>
      <div className='header_middle'>
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className='header_inputCaret' />
      </div>
      <div className='header_right'>
        <IconButton>
            <AppsIcon />
        </IconButton>
        <IconButton>
            <NotificationIcon />
        </IconButton>
        <Avatar />

      </div>
    </div>
  )
};

export default Header;

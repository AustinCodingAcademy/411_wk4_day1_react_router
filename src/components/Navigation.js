import React, { Component, Fragment, } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = () => {
  const navStyle = {
    color: 'white'
  }

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          FakeCars.com
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/" style={navStyle}>Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/About" style={navStyle}>About</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation;
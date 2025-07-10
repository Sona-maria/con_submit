/*import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

// Import icons
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import ViewListIcon from '@mui/icons-material/ViewList';
import SortIcon from '@mui/icons-material/Sort';
import CakeIcon from '@mui/icons-material/Cake';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const NavBar = () => {
  return (
    <AppBar position="sticky" className="appbar">
      <Toolbar className="toolbar">
        <Typography variant="h5" className="title">
          CONTACT_BOOK
        </Typography>

        <Box className="nav-links">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button className="nav-button" variant="contained" startIcon={<LoginIcon />}>
              Login
            </Button>
          </Link>

          <Link to="/a" style={{ textDecoration: 'none' }}>
            <Button className="nav-button" variant="contained" startIcon={<AddIcon />}>
              Add
            </Button>
          </Link>

          <Link to="/v" style={{ textDecoration: 'none' }}>
            <Button className="nav-button" variant="contained" startIcon={<ViewListIcon />}>
              View
            </Button>
          </Link>

          

          

          <Link to="/Birthdays" style={{ textDecoration: 'none' }}>
            <Button className="nav-button" variant="contained" startIcon={<NotificationsIcon />}>
              Birthday Reminder
            </Button>
          </Link>

          <Link to="/Ab" style={{ textDecoration: 'none' }}>
            <Button className="nav-button" variant="contained" startIcon={<InfoIcon />}>
              Aboutus
            </Button>
          </Link>

          <Link to="/s" style={{ textDecoration: 'none' }}>
            <Button className="nav-button" variant="contained" startIcon={<PersonAddIcon />}>
              Signup
            </Button>
          </Link>
          
          <Link to="/logout" style={{ textDecoration: 'none' }}>
            <Button className="nav-button" variant="contained" startIcon={<InfoIcon />}>
              LOGOUT
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;  */


import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';

import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import ViewListIcon from '@mui/icons-material/ViewList';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();
  const location = useLocation(); // 👈 track route changes

  // Update login state whenever the route changes (like after login)
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!user);
  }, [location]); // 👈 re-run on route change

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <AppBar position="sticky" className="appbar">
      <Toolbar className="toolbar">
        <Typography variant="h5" className="title">
          CONTACT_BOOK
        </Typography>

        <Box className="nav-links">
          {!isLoggedIn ? (
            <>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<LoginIcon />}>
                  Login
                </Button>
              </Link>

              <Link to="/s" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<PersonAddIcon />}>
                  Signup
                </Button>
              </Link>

              <Link to="/Ab" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<InfoIcon />}>
                  About Us
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/a" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<AddIcon />}>
                  Add
                </Button>
              </Link>

              <Link to="/v" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<ViewListIcon />}>
                  View
                </Button>
              </Link>

              <Link to="/Birthdays" style={{ textDecoration: 'none' }}>
                <Button className="nav-button" variant="contained" startIcon={<NotificationsIcon />}>
                  Birthday Reminder
                </Button>
              </Link>

              <Button
                className="nav-button"
                variant="contained"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

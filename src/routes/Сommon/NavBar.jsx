import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import useStyles from '../Styles/LayoutStyle.js';

const NavBar = () => {
  const classes = useStyles();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/albums', label: 'Albums' },
    { path: '/users', label: 'Users' },
  ];

  return (
    <Box component="header" className={classes.header}>
      {navLinks.map(({ path, label }) => (
        <NavLink 
          key={path} 
          to={path} 
          className={({ isActive }) => 
            isActive ? `${classes.link} ${classes.linkActive}` : classes.link
          }
        >
          {label}
        </NavLink>
      ))}
    </Box>
  );
};

export default NavBar;

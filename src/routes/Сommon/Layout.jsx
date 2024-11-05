import Box from '@mui/material/Box';
import { Outlet } from "react-router-dom";
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import useStyles from '../Styles/LayoutStyle.js';

export default function Layout() {
  const classes = useStyles();

  return (
    <Box>
      <NavBar />
      <hr className={classes.hr} />
      <Box component="main" className={classes.mainContent}>
        <Outlet />
      </Box>
      <hr className={classes.hr} />
      <Footer />
    </Box>
  );
}

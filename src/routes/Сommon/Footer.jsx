import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useStyles from '../Styles/LayoutStyle.js';

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Box className={classes.footerContent}>
        <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'left' }}>
          Created by: Isahan Gasanov
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'right' }}>
          BSU: 2024
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

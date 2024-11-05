import { Box, Typography } from '@mui/material';
import useStyles from './Styles/HomeStyle.js';

export default function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography variant="h1" className={classes.responsiveTypography} >
        SPA & ROUTING
      </Typography>
    </Box>
  );
}

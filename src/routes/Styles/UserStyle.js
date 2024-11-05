import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  box: {
    padding: '1rem',
    '@media (max-width: 600px)': {
      padding: '0.5rem',
    },
  },
  heading: {
    fontSize: '2rem',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
  listItem: {
    marginBottom: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default useStyles; 

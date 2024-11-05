import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  layoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '0 2rem',
  },
  header: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  mainContent: {
    flex: 1, 
    padding: '2rem',
  },
  footer: {
    color: 'grey',
    padding: '1rem',
    textAlign: 'center',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  linkActive: {
    background: 'lightblue',
  },
  hr: {
    border: 'none',
    borderTop: '2px solid #ccc',
    margin: '20px 0',
  },
});

export default useStyles;
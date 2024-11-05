import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    padding: 8,
  },
  heading: {
    marginBottom: 16,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  userBox: {
    cursor: 'pointer',
    padding: '8px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '8px',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  box: {
    width: '90%',
    height: '600px',
    overflow: 'auto',
    border: '1px solid #ccc',
    padding: 2,
    margin: 'auto',
  },
  albumBox: {
    cursor: 'pointer',
    padding: '8px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
  },
});

export default useStyles;

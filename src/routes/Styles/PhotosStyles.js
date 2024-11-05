import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    width: '90%',
    height: '600px',
    overflow: 'auto',
    border: '1px solid #ccc',
    padding: theme.spacing(2),
    margin: 'auto',
    
    '@media (max-width: 600px)': {
      width: '100%',
      height: '400px',
    },
  },
  fadeIn: {
    opacity: 0,
    animation: `$fadeIn 0.5s forwards`,
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  contentWrapper: { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
  },
  gridImg: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    gap: theme.spacing(2), 
    marginTop: theme.spacing(2),
    '& img': {
      width: '150px',
      height: '150px',
      objectFit: 'cover',
    },
  },
  loading: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  imgWrapper: {
    position: 'relative', 
  },
  imgContainer: {   
    left: "20%",
    width: '150px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  imgLoading: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export default useStyles;

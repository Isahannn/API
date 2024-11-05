import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  box: {
    height: '700px',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '2rem',
    animation: '$fadeIn 1s ease-in-out',
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  responsiveTypography: {
    h1: {
      fontSize: '3rem',
      '@media (max-width: 600px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width: 400px)': {
        fontSize: '1rem',
      },
    },
  },
});

export default useStyles;

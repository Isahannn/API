import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

box:{
    width: "90%", 
    height: "600px", 
    overflow: 'auto', 
    border: '1px solid #ccc', 
    padding: 2, 
    margin: "auto" 
},
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  albumBox: {
    cursor: 'pointer',
    padding: '8px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
  },

});

export default useStyles;

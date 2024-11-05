
import { useLoaderData } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { fetchAlbumsData } from './AlbumsApi.jsx';
import useStyles from '../Styles/AlbumStyle.js';

export const loader = async () => {
  const albums = await fetchAlbumsData();
  return { albums };
}

export default function Albums() {
  const { albums } = useLoaderData();
  const classes = useStyles(); 

  return (
    <Box>
      <h2>Albums</h2>
      <Box className={classes.box}>
        <Grid container spacing={2}>
          {albums.map(album => (
            <Grid item xs={12} key={album.id}>
              <Link 
                to={`/users/${album.userId}/albums/${album.id}`} 
                className={classes.link}
              >
                <Box className={classes.albumBox}>
                  <strong>{album.title}</strong>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
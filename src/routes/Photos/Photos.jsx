import { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import useStyles from '../Styles/PhotosStyles.js';
import { fetchPhotosData } from './PhotosApi.jsx';

export const loader = async ({ params }) => {
  try {
    return await fetchPhotosData(params.albumId);
  } catch (error) {
    console.error('Error fetching photos data:', error);
    throw new Response('Error fetching photos data', { status: 500 });
  }
};

export default function Photos() {
  const { album, user, photos } = useLoaderData();
  const classes = useStyles();
  const [loadedPhotos, setLoadedPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (photos) {
      setLoadedPhotos(photos);
      setIsLoading(false);
    }
  }, [photos]);

  return (
    <Box>
      <h2>Photos</h2>
      <Box><strong>Album:</strong> {album.title}</Box>
      <Box className={classes.album}>
        <strong>Posted by:</strong> <Link to={`/users/${user.id}`}>{user.name}</Link>
      </Box>
      <Box className={classes.box}>
        {isLoading ? (
          <Box className={classes.loading}><CircularProgress /></Box>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {loadedPhotos.map((photo) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id} className={classes.imgWrapper}>
                <Link to={`/users/${user.id}/albums/${album.id}`}>
                  <Box className={classes.imgContainer}>
                    <img
                      className={classes.fadeIn} 
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                      loading="lazy"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                </Link>
                <p className={classes.title}>{photo.title}</p>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
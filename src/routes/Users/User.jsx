import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useStyles from '../Styles/UserStyle.js';
import {fetchUsersData} from './UserApi.jsx';

export const loader = async ({ params }) => {
  const { id } = params;
  return await fetchUsersData(id);
};

export default function User() {
  const { user, albums } = useLoaderData();
  const [showLoading, setShowLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <Box className={classes.loading}>Loading...</Box>;
  }


  return (
    <Box className={classes.box}>
      <Typography variant="h2" className={classes.heading}>User Details</Typography>
      <Box><strong>Name:</strong> {user.name}</Box>
      <Box><strong>Username:</strong> {user.username}</Box>
      <Box><strong>Email:</strong> {user.email}</Box>
      <Typography variant="h2" className={classes.heading}>Albums</Typography>
      <ul>
        {albums.map(album => (
          <li key={album.id} className={classes.listItem}>
            <Link to={`/users/${user.id}/albums/${album.id}`} className={classes.link}>
              <Typography>{album.title}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
}


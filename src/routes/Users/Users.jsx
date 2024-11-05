import { Link, useLoaderData } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useStyles from '../Styles/UsersStyle.js';
import { fetchUsers } from './UserApi.jsx';

export const loader = async () => {
  const users = await fetchUsers();
  return { users };
};

export default function Users() {
  const { users } = useLoaderData();
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h2" className={classes.heading}>Users</Typography>
      {users.map(user => (
        <Link key={user.id} to={`/users/${user.id}`} className={classes.link}>
          <Box className={classes.userBox}>
            {user.name}
          </Box>
        </Link>
      ))}
    </Box>
  );
}

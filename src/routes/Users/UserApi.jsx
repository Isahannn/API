import { BASE_URL } from '../ConstURL.jsx';

export const fetchUsersData = async (id) => {
  try {
    const userResponse = await fetch(`${BASE_URL}/users/${id}`);
    if (!userResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const user = await userResponse.json();

    const albumsResponse = await fetch(`${BASE_URL}/albums?userId=${id}`);
    if (!albumsResponse.ok) {
      throw new Error('Failed to fetch albums');
    }
    const albums = await albumsResponse.json();

    return { user, albums };
  } catch (error) {
    console.error(error);
    throw new Response('Error fetching user or albums data', { status: 500 });
  }
};

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Response('Error fetching users data', { status: 500 });
  }
};
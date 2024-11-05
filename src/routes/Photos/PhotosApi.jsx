import { BASE_URL } from '../ConstURL.jsx';

const fetchWithRetry = async (url, options = {}, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Fetch error: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      if (i < retries - 1) {
        await new Promise(res => setTimeout(res, delay));
      } else {
        throw error;
      }
    }
  }
};

export const fetchPhotosData = async (albumId) => {
  try {
    const albumResponse = await fetchWithRetry(`${BASE_URL}/albums/${albumId}`);
    const album = await albumResponse.json();

    const userResponse = await fetchWithRetry(`${BASE_URL}/users/${album.userId}`);
    const user = await userResponse.json();

    const photosResponse = await fetchWithRetry(`${BASE_URL}/photos?albumId=${albumId}`);
    const photos = await photosResponse.json();

    return { album, user, photos };
  } catch (error) {
    console.error('Error fetching photos data:', error);
    throw new Response('Error fetching photos data', { status: 500 });
  }
};

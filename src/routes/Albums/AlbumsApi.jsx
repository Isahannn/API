
import { BASE_URL } from '../ConstURL.jsx';

export const fetchAlbumsData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/albums`);
    if (!response.ok) {
      throw new Error('Error when retrieving albums');
    }
    return await response.json(); 
  } catch (error) {
    console.error(error);
    throw new Response('Error fetching albums data', { status: 500 });
  }
};
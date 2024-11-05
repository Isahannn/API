import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './routes/Сommon/Layout.jsx';
import Albums, { loader as albumsLoader } from './routes/Albums/Albums.jsx';
import Users, { loader as usersLoader } from './routes/Users/Users.jsx';
import User, { loader as userLoader } from './routes/Users/User.jsx';
import Photos, { loader as photosLoader } from './routes/Photos/Photos.jsx';
import Home from './routes/Home.jsx';
import NotFound from './routes/NFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true, 
        element: <Home />,
      },
      {
        path: 'users',
        loader: usersLoader,
        element: <Users />,
      },
      {
        path: 'albums',
        loader: albumsLoader,
        element: <Albums />,
        errorElement: <NotFound />, 
      },
      {
        path: 'users/:id',
        loader: userLoader,
        element: <User />,
        errorElement: <NotFound />, 
      },
      {
        path: 'users/:userId/albums/:albumId',
        loader: photosLoader,
        element: <Photos />,
        errorElement: <NotFound />, 
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
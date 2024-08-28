import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import TourDetailsPage from './pages/TourDetailsPage';
import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'tour/:tourId',
				element: <TourDetailsPage />,
			},
		],
	},
]);

const App = () => (
	<ThemeProvider theme={theme}>
		<RouterProvider router={router}></RouterProvider>
	</ThemeProvider>
);

export default App;

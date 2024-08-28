import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import SearchAppBar from './components/SearchAppBar';
import HomePage from './pages/HomePage';
import TourDetailsPage from './pages/TourDetails';
import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: 'tour/:tourId',
		element: <TourDetailsPage />,
	},
]);

const App = () => (
	<ThemeProvider theme={theme}>
		<SearchAppBar />
		<RouterProvider router={router} />
	</ThemeProvider>
);

export default App;

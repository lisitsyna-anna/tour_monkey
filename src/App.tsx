import './App.css';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import TourCard from './components/TourCard';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './theme/theme';
import SearchAppBar from './components/SearchAppBar';
import cities from './data.json';

const App = () => (
	<ThemeProvider theme={theme}>
		<SearchAppBar />
		<Container sx={{ marginY: 5 }}>
			{cities.map((city) => (
				<>
					<Typography
						variant="h4"
						component="h4"
						marginTop={5}
						marginBottom={3}
					>
						Top {city.name} Tours
					</Typography>
					<Grid2 container spacing={5}>
						{city.tours.map((tour) => (
							<TourCard key={tour.id} {...tour} />
						))}
					</Grid2>
				</>
			))}
		</Container>
	</ThemeProvider>
);

export default App;

import { Container, Typography, Grid2 } from '@mui/material';
import TourCard from '../components/TourCard';
import cities from '../data.json';

const HomePage = () => (
	<Container sx={{ marginY: 5 }}>
		{cities.map((city) => (
			<>
				<Typography variant="h4" component="h4" marginTop={5} marginBottom={3}>
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
);

export default HomePage;

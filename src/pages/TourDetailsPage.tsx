import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage';
import AboutTourSection from '../components/AboutTourSection';
import AskedQuestionsSection from '../components/AskedQuestionsSection/AskedQuestionsSection';
import BottomNav from '../components/BottomNav';
import cities from '../data.json';

const TourDetailsPage = () => {
	const { tourId } = useParams();

	const tour = cities
		.flatMap((city) => city.tours)
		.find((tour) => tour.id === parseInt(tourId!!, 10));

	if (!tour) {
		return <Typography variant="h4">Tour not found</Typography>;
	}

	return (
		<Container sx={{ width: 900, marginTop: 3 }}>
			<Typography variant="h3" component="h1">
				{tour.name}
			</Typography>
			<Box
				marginTop={3}
				sx={{
					display: 'flex',
				}}
			>
				<img src={tour.image} alt="Tour" height={325} width={510} />
				<ImageCollage />
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 3,
					marginTop: 3,
					marginBottom: 10,
				}}
			>
				<AboutTourSection aboutText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, rerum culpa laboriosam esse est maiores deleniti nisi enim explicabo dolorem obcaecati quisquam quo repudiandae maxime tenetur veritatis, vel dicta, vitae eaque aspernatur ea laudantium. Id quos consequatur itaque aspernatur voluptatibus!" />
				<AskedQuestionsSection />
			</Box>
			<BottomNav />
		</Container>
	);
};

export default TourDetailsPage;

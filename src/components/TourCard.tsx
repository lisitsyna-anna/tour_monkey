import { FC } from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';

type TourCardProps = {
	name: string;
	duration: number;
	rating: number;
	numberOfReviews: number;
	price: number;
	image: string;
};

const TourCard: FC<TourCardProps> = ({
	name,
	duration,
	rating,
	numberOfReviews,
	price,
	image,
}) => (
	<Grid2 size={3}>
		<Paper elevation={3}>
			<img src={image} alt="Tour" className="img" />
			<Box sx={{ paddingX: 1 }}>
				<Typography variant="subtitle1" component="h2">
					{name}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 0.5,
					}}
				>
					<AccessTimeIcon sx={{ width: 12.5 }} />
					<Typography variant="body2" component="p">
						{duration} hours
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						marginTop: 3,
						gap: 0.5,
					}}
				>
					<Rating
						name="half-rating-read"
						value={rating}
						precision={0.5}
						readOnly
						size="small"
					/>

					<Box
						sx={{
							display: 'flex',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'space-between',
							gap: 1.5,
						}}
					>
						<Typography variant="body2" component="p">
							{rating}
						</Typography>
						<Typography variant="body3" component="p">
							({numberOfReviews} reviews)
						</Typography>
					</Box>
				</Box>

				<Box>
					<Typography variant="h6" component="h3">
						From C ${price}
					</Typography>
				</Box>
			</Box>
		</Paper>
	</Grid2>
);

export default TourCard;

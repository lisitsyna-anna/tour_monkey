import { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ElementType } from 'react';

type AboutTourSectionProps = {
	aboutText: string;
	wrapperComponent?: ElementType;
};

const AboutTourSection: FC<AboutTourSectionProps> = ({
	aboutText,
	wrapperComponent = 'section',
}) => (
	<Box
		component={wrapperComponent}
		sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
	>
		<Typography variant="h6" component="h4">
			About this ticket
		</Typography>
		<Typography variant="body1" component="p">
			{aboutText}
		</Typography>
	</Box>
);

export default AboutTourSection;

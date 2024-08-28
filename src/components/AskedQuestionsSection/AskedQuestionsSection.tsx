import { ElementType, FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordions from '../Accordions/Accordions';

type AskedQuestionsSectionProps = {
	wrapperComponent?: ElementType;
};

const AskedQuestionsSection: FC<AskedQuestionsSectionProps> = ({
	wrapperComponent = 'section',
}) => (
	<Box
		component={wrapperComponent}
		sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
	>
		<Typography variant="h6" component="h4">
			Frequently asked questions
		</Typography>
		<Accordions />
	</Box>
);

export default AskedQuestionsSection;

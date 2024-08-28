import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from './Accordions.styles';

const Accordions = () => {
	const [expanded, setExpanded] = React.useState<string | false>('panel1');

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	return (
		<Box
			sx={{
				marginBottom: 10,
			}}
		>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography>How long is the travel?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}
			>
				<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
					<Typography>Do we need to bring food and drinks?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}
			>
				<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
					<Typography>What will we see?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default Accordions;

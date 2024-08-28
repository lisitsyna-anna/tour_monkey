import { FC } from 'react';
import { Button, Modal as ModalMUI } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type ModalProps = {
	isOpen: boolean;
	handleClose: () => void;
	modalTitle: string;
	modalContent: JSX.Element;
};

const Modal: FC<ModalProps> = ({
	isOpen,
	handleClose,
	modalTitle,
	modalContent,
}) => (
	<ModalMUI
		open={isOpen}
		onClose={handleClose}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
	>
		<Box
			sx={{
				position: 'absolute' as 'absolute',
				top: '40%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				bgcolor: 'background.paper',
				border: '2px solid #000',
				boxShadow: 24,
				p: 4,
			}}
		>
			<Typography id="modal-modal-title" variant="h6" component="h2">
				{modalTitle}
			</Typography>
			{modalContent}
			<Button type="submit" variant="contained">
				Submit
			</Button>
		</Box>
	</ModalMUI>
);

export default Modal;

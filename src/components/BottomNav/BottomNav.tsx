import { useState } from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import Button from '@mui/material/Button';
import Modal from '../Modal';
import DatePicker from '../DatePicker';

const BottomNav = () => {
	const [isBookModalOpen, setIsBookModalOpen] = useState(false);

	const handleOpenBookModal = () => setIsBookModalOpen(true);

	const handleCloseBookModal = () => setIsBookModalOpen(false);

	return (
		<Paper
			sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
			elevation={3}
		>
			<BottomNavigation>
				<Button onClick={handleOpenBookModal}>Book Tour</Button>
				<Modal
					isOpen={isBookModalOpen}
					handleClose={handleCloseBookModal}
					modalTitle="Book tour"
					modalContent={<DatePicker />}
				/>
			</BottomNavigation>
		</Paper>
	);
};

export default BottomNav;

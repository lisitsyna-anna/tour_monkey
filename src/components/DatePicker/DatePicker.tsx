import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const DatePicker = () => (
	<DemoContainer components={['DateRangePicker']}>
		<DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
	</DemoContainer>
);

export default DatePicker;

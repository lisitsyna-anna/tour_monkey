import { Outlet } from 'react-router-dom';
import SearchAppBar from '../SearchAppBar';

const Layout = () => (
	<>
		<SearchAppBar />
		<Outlet />
	</>
);

export default Layout;

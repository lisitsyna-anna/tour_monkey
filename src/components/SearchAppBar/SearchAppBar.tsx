import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from './SearchAppBar.styles';
import { Link } from 'react-router-dom';

const SearchAppBar = () => (
	<Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="open drawer"
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton>
				<Link
					to="/"
					style={{
						textDecoration: 'none',
						color: 'inherit',
						display: 'block',
						width: '100%',
					}}
				>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						TOURMONKEY
					</Typography>
				</Link>

				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ 'aria-label': 'search' }}
					/>
				</Search>
			</Toolbar>
		</AppBar>
	</Box>
);

export default SearchAppBar;

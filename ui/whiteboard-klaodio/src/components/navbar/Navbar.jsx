import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import IconButton from '@material-ui/core/IconButton';
import ChangeHistoryRoundedIcon from '@material-ui/icons/ChangeHistoryRounded';
import ColorLensRoundedIcon from '@material-ui/icons/ColorLensRounded';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Crop169Icon from '@material-ui/icons/Crop169';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import MenuIcon from '@material-ui/icons/Menu';

class MainNav extends Component {
	render() {
		return (
			<Navbar bg="light" fixed="top">
				{/* <IconButton aria-label="menu" color="inherit">
					<MenuIcon />
				</IconButton> */}
				<Navbar.Brand href="#home">
					<h2>kla⭔di⭔</h2>
				</Navbar.Brand>
				<Navbar.Collapse className="justify-content-center">
					<IconButton aria-label="creion" color="inherit">
						<CreateTwoToneIcon />
					</IconButton>
					<IconButton aria-label="linie" color="inherit">
						<ShowChartIcon />
					</IconButton>
					<IconButton aria-label="culoare" color="inherit">
						<ColorLensRoundedIcon />
					</IconButton>
					<IconButton aria-label="triunghi" color="inherit">
						<ChangeHistoryRoundedIcon />
					</IconButton>
					<IconButton aria-label="cerc" color="inherit">
						<RadioButtonUncheckedIcon />
					</IconButton>
					<IconButton aria-label="dreptunghi" color="inherit">
						<Crop169Icon />
					</IconButton>
					<IconButton aria-label="delete" color="inherit">
						<AttachFileIcon />
					</IconButton>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default MainNav;

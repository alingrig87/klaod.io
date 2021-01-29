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

class MainNav extends Component {
	render() {
		return (
			<Navbar bg="light" fixed="top">
				<Navbar.Brand href="#home" color="primary">
					klaoodioooo
				</Navbar.Brand>
				<IconButton aria-label="creion" color="primary">
					<CreateTwoToneIcon />
				</IconButton>
				<IconButton aria-label="culoare" color="primary">
					<ColorLensRoundedIcon />
				</IconButton>
				<IconButton aria-label="triunghi" color="primary">
					<ChangeHistoryRoundedIcon />
				</IconButton>
				<IconButton aria-label="cerc" color="primary">
					<RadioButtonUncheckedIcon />
				</IconButton>
				<IconButton aria-label="dreptunghi" color="primary">
					<Crop169Icon />
				</IconButton>
				<IconButton aria-label="delete" color="primary">
					<AttachFileIcon />
				</IconButton>
			</Navbar>
		);
	}
}

export default MainNav;

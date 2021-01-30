import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './AppBar.css';
import Color from '../Color/Color';
import Eraser from '../Eraser/Eraser';

const AppBar = (props) => {
	return (
		<div className="appbar">
			<Navbar bg="light" fixed="top">
				<Navbar.Brand href="#home">
					<h2>kla⭔di⭔</h2>
				</Navbar.Brand>
				<Navbar.Collapse className="justify-content-center">
					<Color handleColor={props.handleColor} />
					<Eraser handleColor={props.handleColor} />
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default AppBar;

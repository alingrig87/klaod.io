import React from 'react';
import Board from '../board/Board';
import MainNav from '../navbar/Navbar';

import './style.css';

class Container extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<MainNav></MainNav>
				<div className="board-container">
					<Board></Board>
				</div>
			</div>
		);
	}
}

export default Container;

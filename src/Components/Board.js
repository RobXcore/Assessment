import React from 'react';
import board from '../Assets/board.svg';
import '../Stylesheets/board.css';

function Board () {
	return (
		<div>
			<img className="board" src={board} alt="" />
		</div>
	);
}

export default Board;

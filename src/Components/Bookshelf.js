import React from 'react';
import bookcase from '../Assets/bookcase.svg';
import '../Stylesheets/bookshelf.css';

function Bookshelf () {
	return (
		<div className="containeer">
			<img className="bookshelf" src={bookcase} alt="" />
		</div>
	);
}

export default Bookshelf;

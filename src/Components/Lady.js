import React from 'react';
import lady from '../Assets/lady.svg';
import '../Stylesheets/lady.css';

function Lady () {
	return (
		<div>
			<img className="lady" src={lady} alt="" />
		</div>
	);
}

export default Lady;

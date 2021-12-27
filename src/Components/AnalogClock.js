import React, { useEffect, useState } from 'react';
import '../Stylesheets/clock.css';
import Clock from 'react-clock';
import clock_base from '../Assets/clock_base.svg';

function AnalogClock () {
	const [ value, setValue ] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setValue(new Date()), 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (<>

		<div className="clock-container">
			<Clock value={value} />
		</div>
		<img className='clock-base' src={clock_base} alt="" />
	</>);
}

export default AnalogClock;

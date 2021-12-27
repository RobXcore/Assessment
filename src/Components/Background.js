import React from 'react';
import '../Stylesheets/background.css'
import bg_stripes from '../Assets/bg_stripes.svg'
import ground from '../Assets/ground.svg'

function Background () {
return (<>
		<div className="background">
			<img className='top' src={bg_stripes} alt="" />
			<img className='bottom' src={ground} alt="" />
		</div>
	</>
	);
}

export default Background;

import React from 'react';
import '../index.css';

function sectionHeader(props) {
	return (
		<div className='section-header'>
			<h2> {props.title} </h2>

			<hr className='section-header-hr' />
		</div>
	);
}

export default sectionHeader;

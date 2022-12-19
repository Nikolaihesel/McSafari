import React from 'react';
import ButtonPrim from './btnPrimary';
import '../index.css';
function travels(props) {
	return (
		<div className=' travels-home   '>
			<img
				src={props.image}
				alt=''
				className='travel-img-home'
			/>

			<h3 className='sub-header_black'> {props.travelName} </h3>
			<h3 className='sub-header_black'> {props.date} </h3>

			<ButtonPrim
				link={props.link}
				text={props.textButton}
			/>
		</div>
	);
}

export default travels;

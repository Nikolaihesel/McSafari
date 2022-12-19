import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
function btnPrimary(props) {
	return (
		<Link
			className='no-decoration'
			to={props.link}>
			<button className='btn-prim'>{props.text}</button>
		</Link>
	);
}

export default btnPrimary;

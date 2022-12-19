import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function footer() {
	return (
		<div>
			<div className='top-footer'>
				<div className='left-wrap-footer '>
					<h3 className='sub-header'>Kontakt</h3>
					<ul>
						<li>Stefan Jensen</li>
						<li> Mail@mail.com</li>
						<li>Telefon: 20202020</li>
					</ul>
				</div>

				<div className='right-wrap-footer '>
					<h3 className='sub-header'>Services</h3>
					<ul classname=''>
						<li>
							{' '}
							<Link
								to='Offroad'
								className='paragraph_white'>
								Offroad
							</Link>
						</li>
						<li>
							{' '}
							<Link
								className='paragraph_white'
								to='Rejser'>
								Rejser
							</Link>
						</li>
						<li>
							{' '}
							<Link
								className='paragraph_white'
								to='About'>
								Om os
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className='bottom-footer'>
				<p className='paragraph_white'>© 2022 Mockup. All Rights Reserved.</p>
			</div>
		</div>
	);
}

export default footer;

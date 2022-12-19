import React from 'react';

import '../index.css';

import StefanL from '../img_mcsafari/stefanl.png';
import StefanR from '../img_mcsafari/stefanr.png';
import SubHeader from './sectionHeader';

function omStefan(props) {
	return (
		<div className='m-4rem'>
			<div className='about-stefan-container'>
				<SubHeader title='Mød jeres instruktør' />

				<div className='about-stefan'>
					<div className='left-about-stefan'>
						<img
							src={StefanL}
							alt=''
						/>

						<h4 className='paragraph_white'>
							{' '}
							<i>
								{' '}
								Stefan Jacobsen,
								<br /> Instruktør{' '}
							</i>
						</h4>
					</div>

					<div className='right-about-stefan'>
						<p>
							Stefan jacobsen er indehaver af McSafari. Stefan er opvokset i
							Tanzania, men med stærke danske rødder har han nu bosat sig på
							fyn. Stefan har kørt motorcykel hele hans voksne liv og er både
							instruktør på offroad skolen, samt guide på mange af de ture
							McSafari tilbyder! Udover at være en formidal guide og underviser
							snakker han også flydende Swahilli, hvilket ofte viser sig som en
							fordel på vores rejser
						</p>

						<img
							src={StefanR}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default omStefan;

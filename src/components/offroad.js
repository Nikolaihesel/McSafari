import React from 'react';
import '../index.css';
import Hero from '../img_mcsafari/heroOffroad.png';
import ButtonPrim from './btnPrimary';
import SubHeader from './sectionHeader';
import Calender from '../img_mcsafari/2imgcal.png';
import Person from '../img_mcsafari/3imgpers.png';
import Years from '../img_mcsafari/3img-10.png';
import img1 from '../img_mcsafari/Group 66.png';
import img2 from '../img_mcsafari/Group 67.png';
import img3 from '../img_mcsafari/Group 68.png';

import AboutStefan from './omStefan';

function offroad() {
	return (
		<div>
			<div className='header-container'></div>
			<div className='hero-subpage_test'>
				<img
					src={Hero}
					alt=''
				/>
			</div>

			<div className=' paragraph-hero-subpage'>
				<SubHeader title='Offroad hver lørdag!' />

				<p>
					Hos McSafari tilbyder vi Offroad skole og lege dage på motorcykel! Alle kan være med og det kræver ikke kørekort eller tidligere erfaring på MC! Vi stiller motorcykler til rådighed og lærer dig hvordan du sikkert kan køre i alt terræn.{' '}
				</p>

				<ButtonPrim
					text='Læs mere'
					link='Offroad'
				/>
			</div>

			<br />
			<br />
			<br />
			<SubHeader title='Fakta' />

			<div className='three-piece-offroad'>
				<div className='three-container'>
					<img
						src={Calender}
						alt=''
					/>
					<p>
						{' '}
						Hver lørdag er offroad skolen i gang og du kan frit deltage!{' '}
					</p>
				</div>
				<div className='three-container'>
					<img
						src={Person}
						alt=''
					/>
					<p>
						{' '}
						Der er plads til alle! Der tilbydes undervisning uanset tidligere erfaring!{' '}
					</p>
				</div>
				<div className='three-container'>
					<img
						src={Years}
						alt=''
					/>
					<p>
						{' '}
						Instruktører med mere end 10 års erfaring i offroad kørsel på motorcykel!{' '}
					</p>
				</div>
			</div>

			<AboutStefan />

			<SubHeader title='Sidste off road dag' />

			<div className='three-piece-offroad'>
				<div className='three-container'>
					<img
						className='img-offroad-dag'
						src={img1}
						alt=''
					/>
					<p>
						{' '}
						Alle kom helskindede gennem en vildt fed dag!{' '}
					</p>
				</div>
				<div className='three-container'>
					<img
						className='img-offroad-dag'
						src={img2}
						alt=''
					/>
					<p>
						{' '}
						Flere havde deres første møde med motorcykel kørsel denne gang!{' '}
					</p>
				</div>
				<div className='three-container'>
					<img
						className='img-offroad-dag'
						src={img3}
						alt=''
					/>
					<p>
						{' '}
						Der var også tid til at prøve kræfter med balancen! {' '}
					</p>
				</div>
			</div>
		</div>
	);
}

export default offroad;

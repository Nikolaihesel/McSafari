import React from 'react';
import '../index.css';
import { useState, useEffect } from 'react';

import Hero from '../img_mcsafari/rejse1.png';
import rejse2 from '../img_mcsafari/rejse2.png';
import rejse3 from '../img_mcsafari/rejse3.png';
import rejse4 from '../img_mcsafari/rejse4.png';

import Travels from './travels';
import SubHeader from './sectionHeader';
import ButtonPrim from './btnPrimary';
import AboutStefan from './omStefan';

import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function Rejser() {
	const [newTrip, setNewTrip] = useState('');
	const [newDate, setNewDate] = useState(0);
	const [trips, setTrips] = useState([]);
	const tripsCollectionRef = collection(db, 'Products');

	const createTrip = async () => {
		await addDoc(tripsCollectionRef, { location: newTrip, date: newDate });
	};

	useEffect(() => {
		const getTrips = async () => {
			const data = await getDocs(tripsCollectionRef);
			setTrips(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getTrips();
	}, []);
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
				<SubHeader title='Rejser du ikke vil glemme!' />

				<p>
					Hos McSafari har vi et bredt udvalg af rejser! Vi tilbyder ture med både danske og lokale guides! Der bliver heletiden tilføjet nye rejser, så kan du ikke finde en der passer i din kalender skal du blot vende tilbage igen snarest muligt! 
					<br/> I mellemtiden kan du tage et kig på vores offroad skole, og blive klar til et vildt eventyr!
					
					{' '}
				</p>

				<ButtonPrim
					text='Læs mere'
					link='Offroad'
				/>
			</div>

			<div className='destination-container'>
				<SubHeader title='Rejsedestinationer' />

				<div className='products-container'>
					{trips.map((trip) => {
						return (
							<Travels
								image={rejse2}
								travelName={[trip.location, trip.date]}
								link='home'
								textButton='Book nu'
							/>
						);
					})}
					
				</div>

				
			</div>

			<div className='video'><iframe
						width='100%'
						height='100%'
						src='https://www.youtube.com/embed/EnUtUDAUf9Y'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen></iframe></div>

			<AboutStefan />
		</div>
	);
}

export default Rejser;

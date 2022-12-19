import React from 'react';
import '../index.css';
import { useState, useEffect } from 'react';

import Travels from './travels';
import rejse2 from '../img_mcsafari/rejse2.png';

import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function Gui() {
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
			<div className='gui-style'>
				<input
					onChange={(event) => {
						setNewTrip(event.target.value);
					}}
					placeholder='location'
				/>
				<input
					onChange={(event) => {
						setNewDate(event.target.value);
					}}
					type='number'
					placeholder='date'
				/>

				<button onClick={createTrip}> Create trip </button>
			</div>

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

			{trips.map((trip) => {
				return (
					<div>
						{' '}
						<h1>{trip.location}</h1>
					</div>
				);
			})}
		</div>
	);
}

export default Gui;

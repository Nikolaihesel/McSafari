import React from 'react';
import '../index.css';
import Hero from '../img_mcsafari/hero_about.png';
import rejse5 from '../img_mcsafari/rejse5.png';
import SubHeader from './sectionHeader';
import ButtonPrim from './btnPrimary';
import AboutStefan from './omStefan';
function about() {
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
				<SubHeader title='Alle skal have muligheden for en unik oplevelse' />

				<p>
					Hos McSafari tror vi på at alle skal have lov til at opleve hvad vi
					mener er den fedeste oplevelse i dit liv! vi tilbyder undervisning i
					offroad motorcykel kørsel, og rejser på motorcykel! alle kan være med,
					så længe de er friske på at opleve verden på en motorcykel!
				</p>

				<ButtonPrim
					text='Læs mere'
					link='Offroad'
				/>
			</div>

			<div className='container-mission'>
				<div className='mission-rejser'>
					<h3>Vores mission</h3>
					<br />
					<p>
						Vi tror hos McSafari på at alle kan følge med på vores eventyr! Alle
						skal have en chance for at opleve verden og opdage nye sider af sig
						selv. Vi tilbyder en grundig oplæring i offroad kørsel, og
						garanterer at vi kan klæde dig på, til et uforglemmeligt eventyr på
						en af vores mange rejser! Du skal ikke tøve med at kontakte os hvis
						du har nogle spørgsmål, eller blot vil høre mere om hvad vi kan
						tilbyde dig!
					</p>
				</div>

				<img
					src={rejse5}
					alt=''
				/>
			</div>

			<AboutStefan />

			<SubHeader title='Kontakt os' />

			<div className='contact'>
				<div className='contact-container-column'>
					<h3 className='sub-header_black'>
						Du er altid velkommen til at kontakte os!
					</h3>
					<p className='paragraph'>Addresse: Bellingevej 123, 5250 Odense SV</p>

					<p className='paragraph'>Telefon: +45 88 88 88 88 </p>
					<p className='paragraph'>Mail: Mcsafari@info.dk </p>
				</div>

				<div className='contact-container'>
					<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18153.746843961322!2d10.292512441912578!3d55.336734248411695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdf242cadba85%3A0xa00afcc1d521ea0!2s5250%20Bellinge!5e0!3m2!1sda!2sdk!4v1671441157335!5m2!1sda!2sdk'></iframe>
				</div>
			</div>
		</div>
	);
}

export default about;

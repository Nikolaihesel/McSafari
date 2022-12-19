import './index.css';
import { Routes, Route, Link } from 'react-router-dom';

// Componenets
import Footer from './components/footer';
import Logo from './img_mcsafari/logo.png';

// pages
import Home from './components/Home';
import About from './components/about';
import Offroad from './components/offroad';
import Rejser from './components/Rejser';
import Gui from './components/Gui';

function App() {
	return (
		<div className='App'>
			<nav className='nav'>
				<img
					className='logo'
					src={Logo}
					alt=''
				/>

				<ul>
					<li>
						<Link
							to='/'
							className='paragraph_white'>
							Hjem
						</Link>{' '}
					</li>
					<li>
						<Link
							to='Offroad'
							className='paragraph_white'>
							Offroad
						</Link>{' '}
					</li>
					<li>
						<Link
							to='Rejser'
							className='paragraph_white'>
							Rejser
						</Link>{' '}
					</li>
					<li>
						{' '}
						<Link
							to='About'
							className='paragraph_white'>
							Om os
						</Link>{' '}
					</li>
				</ul>
			</nav>

			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='Offroad'
					element={<Offroad />}
				/>
				<Route
					path='Rejser'
					element={<Rejser />}
				/>
				<Route
					path='About'
					element={<About />}
				/>
				<Route
					path='Gui'
					element={<Gui />}
				/>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;

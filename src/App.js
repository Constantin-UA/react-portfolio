import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Separator from './components/Separator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className="app">
			<NavBar />
			<Banner />
			<Skills />
			<Separator />
			<Contact />
			<Separator />
			<Projects />
			<Separator />
			<Footer />
			<Separator />
		</div>
	);
}

export default App;

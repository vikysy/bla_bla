import './App.scss';
import AboutBrand from './components/aboutBrand/AboutBrand';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';

function App() {

	return (
		<>
			<Header />
			<AboutBrand />
			<Portfolio />
			<AboutUs />
			<ContactUs />
			<Footer />
		</>
	)
}

export default App;

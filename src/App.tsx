import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage/HomePage';
import TopHeader from './components/TopHeader';

function App() {
	return (
		<div className="d-flex flex-column min-vh-100">
      <TopHeader />
			<Header />
      <HomePage />
			<Footer />
		</div>
	);
}

export default App;

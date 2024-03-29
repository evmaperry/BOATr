import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Splash from './components/Splash.js';
import LocationsContainer from './components/LocationsContainer';
import ServicesContainer from './components/ServicesContainer';
import EmailForm from './components/EmailForm';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Header />
      <Splash />
      <ServicesContainer />
      <LocationsContainer />
      <EmailForm />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;

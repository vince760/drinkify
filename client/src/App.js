import './App.css';
import Hero from './components/Hero';
import Background from './images/drink-1870139.jpg';
import 'react-multi-carousel/lib/styles.css';
import Popularingredient from './components/Popularingredient';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="App"
    >
      <Hero />
      <Popularingredient />
    </div>
  );
}

export default App;

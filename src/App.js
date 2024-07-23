import './App.css';
import Backtotop from './common/Backtotop';
import FooterSection from './components/FooterSection';
import GridSection from './components/GridSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App overflow-hidden">
      <Header/>
      <HeroSection/>
      <GridSection/>
      <Backtotop/>
      <FooterSection/>
    </div>
  );
}

export default App;

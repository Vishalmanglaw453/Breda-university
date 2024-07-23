import './App.css';
import BackToTop from './common/BackToTop';
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
      <FooterSection/>
      <BackToTop/>
    </div>
  );
}

export default App;

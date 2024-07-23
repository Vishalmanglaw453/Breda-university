import './App.css';
import Backtotop from './common/BackToTop';
import Footer from './components/Footer';
import Grid from './components/Grid';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App overflow-hidden">
      <Header/>
      <Hero/>
      <Grid/>
      <Backtotop/>
      <Footer/>
    </div>
  );
}

export default App;

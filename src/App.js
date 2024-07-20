import './App.css';
import Backtotop from './common/Backtotop';
import FooterSection from './componets/FooterSection';
import GridSection from './componets/GridSection';
import Herosection from './componets/Herosection';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <GridSection/>
      <Backtotop/>
      <FooterSection/>
    </div>
  );
}

export default App;

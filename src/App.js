import './App.css';
import {Header} from './components/Header'
import {Navbar} from './components/Navbar'
import  {Stats} from './components/Stats'
import {Feature} from './components/Feature'
import {Pricing} from './components/Pricing'
import {Steps} from './components/Steps'
import {Footer} from './components/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Stats />
    <Feature />
    <Steps />
    <Pricing />
    <Footer />
    </>
  );
}

export default App;

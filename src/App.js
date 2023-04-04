import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Ciudades from './components/Ciudades';
//import Sur1 from './img/Sur1';


//import PrimerComponente from './components/PrimerComponente';
import Card from './components/Card';

function App() {
  return (
    <>

    <Navbar/>

    <Routes>

      <Route exact path='/Contacto' Component={Contacto}/>
      <Route exact path='/Nosotros' Component={Nosotros}/>
      <Route exact path='/Ciudades' Component={Ciudades}/>

    </Routes>

    <Card/>

    </>
  );
}

export default App;

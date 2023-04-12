import './App.css';


import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Ciudades from './components/Ciudades';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';



function App() {
  return (
    <>

    <Navbar/>

    <Routes>


      <Route exact path='/Nosotros' Component={Nosotros}/>
      <Route exact path='/Ciudades' Component={Ciudades}/>
      <Route exact path='/Contacto' Component={Contacto}/>

    </Routes>

    <Footer/>
    </>
  );
}

export default App;

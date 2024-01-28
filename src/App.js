
import './App.css';
import { HashRouter ,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Mobile from './Mobile';
import User from './User';
import Tablet from './Tablet';
import Productdetail from './Productdetail';
import Smartmobile from './Smartmobile';
import Errorpage from './Errorpage';
import Filterproduct from './Filterproduct';

function App() {
  return (
    <div className="w-full ">
      <HashRouter >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/mobile/:id" element={<Mobile/>} />
        <Route path="/user" element={<User/>} />
        <Route path='/tablet' element={<Tablet/>} />
        <Route path='/smartphone' element={<Smartmobile/>} />
        <Route path='/itemdetail/:id' element={<Productdetail/>}/>
        <Route path='/filter' element={<Filterproduct/>}/>
        <Route path='*' element={<Errorpage/>}/>
      </Routes>
      <Footer/>
      </HashRouter >
   
    </div>
  );
}

export default App;

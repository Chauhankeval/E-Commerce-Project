import React from 'react';
import {BrowserRouter as Router ,Route , Routes} from 'react-router-dom'
// import pages 
import Home from './pages/Home'
import ProducDetails from './pages/ProductDetails'
// impoet componets 
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return <div className='overflow-hidden'>

    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProducDetails/>}/>
        <Route path='/' element={<Home/>}/>

       
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  </div>;
};

export default App;

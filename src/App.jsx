import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Services from './Routes/Services';
import FormPage from './Routes/formationPage'
import ContactR from './Routes/ContactR';





function App() {
  return (
    <> 
    <Router >
       <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/services' element={< Services />} />
         <Route path='/formation' element={< FormPage />} />
         <Route path='/contact' element={<ContactR />} />
       </Routes>
    </Router>
      
    </>
  );
}

export default App;

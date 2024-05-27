import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Services from './Routes/Services';
import FormPage from './Routes/formationPage'





function App() {
  return (
    <> 
    <Router >
       <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/services' element={< Services />} />
         <Route path='/formation' element={< FormPage />} />
       </Routes>
    </Router>
      
    </>
  );
}

export default App;

import './App.css';

import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Homes from './Components/Body/Home/Homes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/Body/About/About';
import Myskills from './Components/Body/Myskills/Myskills';


function App() {
  return (  
    <BrowserRouter>
        <Header />

       <Switch >

         <Route exact path="/">
             <Homes />
         </Route>
     
         <Route  path="/about">
             <About />
         </Route>
          
              
         <Route  path="/skills">
             <Myskills />
         </Route>
          
      </Switch >
      <Footer />
  </BrowserRouter>
      

  );
}

export default App;

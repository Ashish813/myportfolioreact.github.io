import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { About,Experience,Education,Hero,Contact,Navbar,Tech,Works,StarsCanvas } from './components';

const App=()=>{
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div> 
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Education/>
      <div className='relative z-0 z'>
        <Contact/> 
        <StarsCanvas/>
      </div>

    </div>
  );
}

export default App;

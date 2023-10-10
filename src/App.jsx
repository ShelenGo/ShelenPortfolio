import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Contact, Cca, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* <Routes>
            <Route path="/home" element={<Hero/>}/>
            <Route path="/project" element={<Works/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes> */}
          <Hero />
        </div>
        <Works />
        <Tech />
        <Cca/>
          <Contact />
          <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
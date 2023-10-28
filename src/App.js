import { Route, HashRouter, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Main from './Main';
import Website from './Website';
import Spinner from 'react-bootstrap/Spinner';
import Offer from './Offer';
import Realisation from './Realisation';
import Kaouka from './Kaouka';
import CV from './CV';
import Team from './Team';
import Contact from './Contact';
// import Formation from './Formation';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          // wait for socket ready before show Menu main window
          <Suspense fallback={<Spinner />}>
             <Main/>
          </Suspense>}
        />
        <Route path="/Website" element={<Website />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Realisation" element={<Realisation />} />
        <Route path="/Kaouka" element={<Kaouka />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/Formation" element={<Formation />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;

import { Route, HashRouter, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Main from './Main';
import Spinner from 'react-bootstrap/Spinner';
import Offer from './Offer';
import Realisation from './Realisation';
import Team from './Team';
import Contact from './Contact';

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
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Realisation" element={<Realisation />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

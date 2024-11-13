import { Route, HashRouter, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './Main';
import Website from './Website';
import Spinner from 'react-bootstrap/Spinner';
import Offer from './Offer';
import Realisation from './Realisation';
import Kaouka from './Kaouka';
import Kaouka_app_apple from './Kaouka_app_apple';
import Kaouka_app_android from './Kaouka_app_android';
import GithubInvoice from './Github-Invoice';
import CV from './CV';
import Team from './Team';
import Contact from './Contact';
import Formation from './Formation';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<Spinner />}>
              <Main />
            </Suspense>}
          />
          <Route path="/Website" element={<Website />} />
          <Route path="/Offer" element={<Offer />} />
          <Route path="/Realisation" element={<Realisation />} />
          <Route path="/Kaouka" element={<Kaouka />} />
          <Route path="/Kaouka_app_apple" element={<Kaouka_app_apple />} />
          <Route path="/Kaouka_app_android" element={<Kaouka_app_android />} />
          <Route path="/GithubInvoice" element={<GithubInvoice />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Formation" element={<Formation />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;

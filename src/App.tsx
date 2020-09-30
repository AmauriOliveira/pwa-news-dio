/* eslint-disable no-use-before-define */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.css';

const App: React.FunctionComponent = () => (
  <main>
    <section>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </section>
  </main>
);

export default App;

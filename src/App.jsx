import { useState, Fragment } from 'react';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';

import { CORE_CONCEPTS, EXAMPLES } from './data';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;

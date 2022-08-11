import React from 'react';
import Homepage from './pages/Home';
import { StoreProvider } from './utils/globalstate';


function App() {

  return (
    <StoreProvider>
    <div>

      <Homepage/>
    </div>
    </StoreProvider>
  );
}

export default App;

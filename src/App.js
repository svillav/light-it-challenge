import React, { useState } from 'react';
import { Navbar, Sidebar, Main } from './components';

function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-row w-full h-full'>
        <Sidebar isOpen={isOpen} setOpen={setOpen} /> 
        <Main setOpen={setOpen} />
      </div>
    </div>
  );
}

export default App;

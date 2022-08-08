import { Navbar, Sidebar, Main } from './components';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-row w-full h-full'>
        <Sidebar /> 
        <Main />
      </div>
    </div>
  );
}

export default App;

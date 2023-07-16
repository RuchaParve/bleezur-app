import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profiles from './components/Profiles';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Form />} />
          <Route path="/Profiles" exact element={<Profiles />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profiles from './components/Profiles';
import ProfilesData from './components/ProfilesData';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Form />} />
          <Route path="/Profiles" exact element={<Profiles />} />
          <Route path="/Profile/:id" exact element={<ProfilesData />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

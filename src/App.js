import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import RegistrationForm from './components/Form/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem'}}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

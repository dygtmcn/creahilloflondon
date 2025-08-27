import { Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import InProgress from './components/InProgress';

function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '9vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<InProgress />} />
          <Route path="/in-progress" element={<InProgress />} />
          <Route path="*" element={<InProgress />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
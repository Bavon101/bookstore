import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Books from './components/pages/Books';
import Categories from './components/pages/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;

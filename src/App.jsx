import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header} from './components';
import {Main} from './pages';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

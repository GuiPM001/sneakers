import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections' />
        <Route path='/men' />
        <Route path='/women' />
        <Route path='/contact' />
      </Routes>
    </BrowserRouter>
  )
}
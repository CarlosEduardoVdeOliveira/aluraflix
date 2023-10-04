import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageBase from './pages/pageBase'
import Home from './pages/Home/Home'


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageBase />}></Route>
          <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
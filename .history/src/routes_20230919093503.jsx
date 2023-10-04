import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PageBase from 'pages/pageBase'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageBase />}>
          <Home />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
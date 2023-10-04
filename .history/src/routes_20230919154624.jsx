import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageBase from './pages/pageBase'
import Home from './pages/Home/Home'
import { ThemeProvider } from '@mui/material'


export default function AppRoutes() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<PageBase />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  )
}
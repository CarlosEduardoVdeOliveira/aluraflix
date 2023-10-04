import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {PageBase} from './pages/pageBase'
import {Home} from './pages/Home'
import { ThemeProvider } from '@mui/material'
import { theme } from './customColors'
import {RegisterVideo} from './pages/RegisterVideo'
import {RegisterCategory} from './pages/RegisterCategory'
import { CategoryContextProvider } from './contexts/cotextCategory'


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<PageBase />}>
            <Route index element={<Home />}></Route>
            <Route path='register-video' element={<RegisterVideo />}></Route>
            <CategoryContextProvider>
              <Route path='register-category' element={<RegisterCategory />}></Route>
            </CategoryContextProvider>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
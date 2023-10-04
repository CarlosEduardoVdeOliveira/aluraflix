import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import {PageBase} from './pages/pageBase'
import {Home} from './pages/Home'
import { ThemeProvider } from '@mui/material'
import { theme } from './customColors'
import {RegisterVideo} from './pages/RegisterVideo'
import {RegisterCategory} from './pages/RegisterCategory'
import { UpdateCategory } from './pages/UpdateCategory'


export const AppRoutes = () => {
  let {id} = useParams()
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<PageBase />}>
            <Route index element={<Home />}></Route>
            <Route path='register-video' element={<RegisterVideo />}></Route>
            <Route path='register-category' element={<RegisterCategory />}></Route>
            <Route path='update-category' element={<UpdateCategory id={id} />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
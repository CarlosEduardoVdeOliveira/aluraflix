import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppRoutes} from './routes'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './customColors'
import { CategoryContextProvider } from './contexts/cotextCategory'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoryContextProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes key={0} />
      </ThemeProvider>
    </CategoryContextProvider>
  </React.StrictMode>,
)

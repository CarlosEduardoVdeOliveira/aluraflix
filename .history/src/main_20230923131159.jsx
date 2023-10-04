import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppRoutes} from './routes'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
)

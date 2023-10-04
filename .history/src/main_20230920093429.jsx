import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import './index.css'
import { Container } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container maxWidth="sm">
      <AppRoutes />
    </Container>
  </React.StrictMode>,
)

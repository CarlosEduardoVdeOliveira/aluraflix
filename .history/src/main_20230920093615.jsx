import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import './index.css'
import { Container } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container sx={{
          backgroundColor: 'primary.light',
          
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
      <AppRoutes />
    </Container>
  </React.StrictMode>,
)

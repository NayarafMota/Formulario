import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import UserProvider from './providers/UserProvider'
import AgeProvider from './providers/AgeProvider'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <UserProvider>
      <AgeProvider>
        <AppRoutes />
      </AgeProvider>
    </UserProvider>
  </React.StrictMode>
)
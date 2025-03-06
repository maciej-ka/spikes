import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from './lib/my-little-react-query/QueryClient.js'
import { QueryClientProvider } from './lib/my-little-react-query/QueryClientProvider.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)

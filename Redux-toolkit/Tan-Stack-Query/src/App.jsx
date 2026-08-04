import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ShopPage from './pages/ShopPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient} >
      <ShopPage/>
    </QueryClientProvider>
  )
}

export default App
// 'use client'

// import React from 'react'
// import { QueryClientProvider } from '@tanstack/react-query'
// import { queryClient } from '@/lib/react-query'

// const QueryProvider = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   )
// }

// export default QueryProvider

'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useState } from 'react'

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider

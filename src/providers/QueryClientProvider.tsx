// 'use client'

// import React from 'react'
// import { QueryClientProvider } from '@tanstack/react-query'

// const QueryProvider = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   )
// }

// export default QueryProvider

'use client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// import { queryClient } from '@/lib/react-query'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useState } from 'react'

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 90 * 1000 /* 90 seconds */,
            refetchInterval: 90 * 1000 /* 90 seconds */,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider

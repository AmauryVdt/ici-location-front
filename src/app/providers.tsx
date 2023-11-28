// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f7fafc',
      500: '#718096',
      900: '#171923',
    },
    lime: {
      50: '#f2ffde',
     100: '#defcb2',
     200: '#caf884',
     300: '#b5f554',
     400: '#a1f226',
     500: '#88d90d',
     600: '#69a905',
     700: '#4a7801',
     800: '#2b4800',
     900: '#0b1900',
    },
    black: {
      50: '#e0e0e0',
      100: '#b3b3b3',
      200: '#808080',
      300: '#4d4d4d',
      400: '#262626',
      500: '#1a1a1a',
      600: '#131313',
      700: '#0d0d0d',
      800: '#080808',
      900: '#030303',
    }
  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
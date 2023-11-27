'use client'
import '@/styles/globals.css'
import { Providers } from './providers'
import { Flex } from '@chakra-ui/react'
import { ClerkProvider, UserButton } from '@clerk/nextjs'
import { Footer } from '@/components/footer'
import { Main } from '@/components/main'
import { Navbar } from '@/components/navbar'
import { Header } from '@/components/header'


export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  
  return (
    <Providers>
      <html lang="en">
      <Flex direction="column" flex="1">
      <Navbar />
      <Main>
        {children}
      </Main>
      <Footer />
      </Flex>
      </html>
    </Providers>
  )
}
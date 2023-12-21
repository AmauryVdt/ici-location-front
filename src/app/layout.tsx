'use client'
import '@/styles/globals.css'
import { Providers } from './providers'
import { Flex } from '@chakra-ui/react'
import { Footer } from '@/components/footer'
import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/navbar'

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if (true || pathname !== '/auth/sign-in' && pathname !== '/auth/sign-up')
    return (
      <html>
        <body>
          <Providers>
            <Flex direction="column" flex="1">
              <Navbar isSearchBarDisplayed={true} />
              <Flex as="main" role="main" direction="column" flex="1" py="100px" px="30px">
                {children}
              </Flex>
              <Footer />
            </Flex>
          </Providers>
        </body>
      </html>
  )
  else {
    return (
      <html>
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    )
  }
}
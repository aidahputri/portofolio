import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ChipButtonContextProvider } from '@/context'
import { Toaster } from 'react-hot-toast'
import { LoadingContextProvider } from '@/context/LoadingContext'
import AppLayout from '@/components/elements/AppLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aidah Novallia Putri',
  description: `Explore Aidah's extensive portfolio showcasing expertise in web development, UI/UX design, system analysis, and data analysis. Discover projects and skills that highlight a commitment to excellence in technology`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <LoadingContextProvider>
          <ChipButtonContextProvider>
            <AppLayout>{children}</AppLayout>
          </ChipButtonContextProvider>
          <Toaster />
        </LoadingContextProvider>
      </body>
    </html>
  )
}

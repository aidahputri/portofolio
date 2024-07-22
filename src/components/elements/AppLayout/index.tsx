'use client'

import React, { useEffect } from 'react'
import { Navbar, PageLayout, Footer, Loading } from '@/components'
import { useLoadingContext } from '@/context/LoadingContext'

const AppContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, setIsLoading } = useLoadingContext()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [setIsLoading])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Navbar />
      <PageLayout>{children}</PageLayout>
      <Footer />
    </>
  )
}

export default AppContent

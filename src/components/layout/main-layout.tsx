import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Box from '@mui/material/Box'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout

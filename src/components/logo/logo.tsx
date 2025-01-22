import { Box } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

interface Props {
  onClick?: () => void
}

const Logo: FC<Props> = ({ onClick }) => {
  return (
    <Box onClick={onClick}>
      <Image src="/images/logo.webp" width={150} height={29} alt="Logo" />
    </Box>
  )
}

export default Logo

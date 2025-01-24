import { Code } from '@/enums/Locales'
import useChangeLanguage from '@/hooks/useChangeLanguage'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import { IconButton } from '@mui/material'
import { FC } from 'react'

interface SliderArrowProps {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowProps> = (props) => {
  const { onClick, type, className } = props

  const { localeCode } = useChangeLanguage()

  const rightValues = {
    prev: {
      [Code.en]: '60px !important',
      [Code.ar]: '0 !important',
    },
    next: {
      [Code.en]: '0px !important',
      [Code.ar]: '60px !important',
    },
  }

  const right = rightValues[type]?.[localeCode]

  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-70px !important', md: '-28px !important' },
        left: 'unset !important',
        right,
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

export default SliderArrow

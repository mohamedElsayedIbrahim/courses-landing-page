import Box from '@mui/material/Box'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { navigations } from './navigation.data'

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Link key={destination} href={destination} passHref>
          <Box
            sx={{
              position: 'relative',
              color: 'text.disabled',
              cursor: 'pointer',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: { xs: 0, md: 3 },
              mb: { xs: 3, md: 0 },
              fontSize: { xs: '1.2rem', md: 'inherit' },
              ...(destination === '/' && {
                color: 'primary.main',
              }),

              '& > div': { display: 'none' },

              '&.current>div': { display: 'block' },

              '&:hover': {
                color: 'primary.main',
                '&>div': {
                  display: 'block',
                },
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                transform: 'rotate(3deg)',
                '& img': { width: 44, height: 'auto' },
              }}
            >
              <Image height={44} width={44} src="/images/headline-curve.svg" alt="Headline curve" />
            </Box>
            {label}
          </Box>
        </Link>
      ))}
    </Box>
  )
}

export default Navigation

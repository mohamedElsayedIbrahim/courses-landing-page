import useTranslate from '@/hooks/useTranslate'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  const translate = useTranslate()

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            {translate('home.newsLetter.headline')}
          </Typography>
          <Typography sx={{ mb: 6 }}>{translate('home.newsLetter.description')}</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder={translate('home.newsLetter.inputs.email')}
            />
            <Box>
              <StyledButton variant="contained" color="primary" size="large">
                {translate('home.newsLetter.buttons.subscribe')}
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter

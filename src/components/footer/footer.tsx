import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Box sx={{ mb: 2 }}>
                <Image src="/images/logo-white.png" width={150} height={29} alt="Logo" />
              </Box>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Coursespace is an online learning platform that has been operating since 2018 until now.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer

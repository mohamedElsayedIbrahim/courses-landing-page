import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import useTranslate from '@/hooks/useTranslate'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { FC } from 'react'

const Footer: FC = () => {
  const translate = useTranslate()

  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid2 container spacing={1}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Box sx={{ mb: 2 }}>
                <Image src="/images/logo-white.webp" width={150} height={29} alt="Logo" />
              </Box>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                {translate('layout.footer.overview.description')}
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <FooterNavigation />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}

export default Footer

import { StyledButton } from '@/components/styled-button'
import { locales } from '@/enums/Locales'
import useChangeLanguage from '@/hooks/useChangeLanguage'

import useTranslate from '@/hooks/useTranslate'
import { Translation } from '@/interfaces/translations'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { FC } from 'react'
import { Link as ScrollLink } from 'react-scroll'

interface Exp {
  label: Translation
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'home.hero.experience.students',
    value: '10K+',
  },
  {
    label: 'home.hero.experience.qualityCourse',
    value: '20+',
  },
  {
    label: 'home.hero.experience.experienceMentors',
    value: '10+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  const translate = useTranslate()

  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {translate(label)}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  const translate = useTranslate()
  const { setCurrentLocale } = useChangeLanguage()

  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    {translate('home.hero.headlinePart1')}{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                  {translate('home.hero.headlinePart2')}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path
                          fill="#060445"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#060445"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path
                          fill="#060445"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>{' '}
                  <br />
                  {translate('home.hero.headlinePart3')}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {translate('home.hero.description')}
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                {locales.map((locale) => (
                  <StyledButton
                    key={locale.code}
                    onClick={() => {
                      setCurrentLocale(locale)
                    }}
                    color="primary"
                    size="large"
                    variant="contained"
                  >
                    {locale.name}
                  </StyledButton>
                ))}
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained">
                    {translate('home.hero.buttons.getStarted')}
                  </StyledButton>
                </ScrollLink>
                <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="outlined" startIcon={<PlayArrowIcon />}>
                    {translate('home.hero.buttons.watchVideo')}
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 5 }} sx={{ position: 'relative' }}>
            {/* Certificate Badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 30,
                left: { xs: 0, md: -150 },
                boxShadow: 1,
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'flex-start',
                width: 280,
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  '& img': { width: '32px !important', height: 'auto' },
                }}
              >
                <Image src="/images/certificate.png" alt="Certificate icon" width={50} height={50} quality={97} />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{ color: 'secondary.main', fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}
                >
                  {translate('home.hero.certificate.title')}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>
                  {translate('home.hero.certificate.description')}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ lineHeight: 0 }}>
              <Image src="/images/home-hero.webp" width={480} height={490} alt="Hero img" />
            </Box>
          </Grid2>
        </Grid2>

        {/* Experience */}
        <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
          <Grid2 container spacing={2}>
            {exps.map((item) => (
              <Grid2 key={item.value} size={{ xs: 12, md: 4 }}>
                <ExpItem item={item} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero

import { useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { FC } from 'react'
import Slider, { Settings } from 'react-slick'

import { CourseCardItem } from '@/components/course'
import useTranslate from '@/hooks/useTranslate'
import SliderArrow from '../slider/slider-arrow'
import SliderDot from '../slider/slider-dot'
import { data } from './popular-course.data'

const HomePopularCourse: FC = () => {
  const translate = useTranslate()
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <SliderDot>{dots}</SliderDot>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    <Box
      id="popular-course"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                height: '100%',
                width: { xs: '100%', md: '90%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 48 } }}>
                {translate('home.popularCourses.headline')}
              </Typography>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 9 }}>
            <Slider {...sliderConfig}>
              {data.map((item) => (
                <CourseCardItem key={String(item.id)} item={item} />
              ))}
            </Slider>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}

export default HomePopularCourse

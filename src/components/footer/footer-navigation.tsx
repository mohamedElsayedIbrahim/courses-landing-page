import { FooterSectionTitle } from '@/components/footer'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import useTranslate from '@/hooks/useTranslate'
import type { Navigation } from '@/interfaces/navigation'
import { Translation } from '@/interfaces/translations'
import Grid2 from '@mui/material/Grid2'
import MuiLink from '@mui/material/Link'
import Link from 'next/link'
import { FC } from 'react'

const courseMenu: Array<Navigation> = [
  {
    label: 'layout.footer.navigation.designUiUx',
    path: '#',
  },
  {
    label: 'layout.footer.navigation.mobileDev',
    path: '#',
  },
  {
    label: 'layout.footer.navigation.machineLearning',
    path: '#',
  },
  {
    label: 'layout.footer.navigation.webDev',
    path: '#',
  },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'layout.footer.navigation.contactUs', path: '#' },
  { label: 'layout.footer.navigation.Privacy', path: '#' },
  { label: 'layout.footer.navigation.Term', path: '#' },
  { label: 'layout.footer.navigation.faq', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  const translate = useTranslate()

  return (
    <MuiLink
      component={Link}
      href={path}
      underline="hover"
      sx={{
        display: 'block',
        mb: 1,
        color: 'primary.contrastText',
      }}
    >
      {translate(label as Translation)}
    </MuiLink>
  )
}

const FooterNavigation: FC = () => {
  const translate = useTranslate()

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <FooterSectionTitle title={translate('layout.footer.headlines.course')} />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
        ))}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <FooterSectionTitle title={translate('layout.footer.headlines.menu')} />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <FooterSectionTitle title={translate('layout.footer.headlines.about')} />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid2>
    </Grid2>
  )
}

export default FooterNavigation

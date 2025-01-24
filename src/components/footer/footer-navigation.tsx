import { FooterSectionTitle } from '@/components/footer'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import type { Navigation } from '@/interfaces/navigation'
import Grid2 from '@mui/material/Grid2'
import MuiLink from '@mui/material/Link'
import Link from 'next/link'
import { FC } from 'react'

const courseMenu: Array<Navigation> = [
  {
    label: 'UI/UX Design',
    path: '#',
  },
  {
    label: 'Mobile Development',
    path: '#',
  },
  {
    label: 'Machine Learning',
    path: '#',
  },
  {
    label: 'Web Development',
    path: '#',
  },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '#' },
  { label: 'Privacy & Policy', path: '#' },
  { label: 'Term & Condition', path: '#' },
  { label: 'FAQ', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
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
      {label}
    </MuiLink>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <FooterSectionTitle title="Course" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
        ))}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid2>
    </Grid2>
  )
}

export default FooterNavigation

import { Translation } from '@/interfaces/translations'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import { ReactNode } from 'react'

interface Data {
  title: Translation
  description: Translation
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'home.feature.cards.card1.title',
    description: 'home.feature.cards.card1.description',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'home.feature.cards.card2.title',
    description: 'home.feature.cards.card2.description',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'home.feature.cards.card3.title',
    description: 'home.feature.cards.card3.description',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'home.feature.cards.card4.title',
    description: 'home.feature.cards.card4.description',
    icon: <ContactSupportIcon />,
  },
]

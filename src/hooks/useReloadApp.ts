import { useRouter } from 'next/router'

const useReloadApp: () => () => void = () => {
  const router = useRouter()

  const reloadApp: () => void = () => {
    router.reload()
  }

  return reloadApp
}

export default useReloadApp

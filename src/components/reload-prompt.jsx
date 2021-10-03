import { useRegisterSW } from 'virtual:pwa-register/react'

export default function ReloadPrompt() {

  const {
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log('SW Registered: ' + r)
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    },
  })

}

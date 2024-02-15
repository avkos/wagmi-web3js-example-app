import { http, createConfig } from 'wagmi'
import { zkSync } from 'wagmi/chains'

export const config = createConfig({
  chains: [zkSync],
  transports: {
    [zkSync.id]: http(),
  },
  ssr: false,
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

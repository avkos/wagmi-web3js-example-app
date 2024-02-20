import {http, createConfig} from 'wagmi'
import {mainnet} from 'wagmi/chains'

export const config = createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: http(),
    },
    ssr: true,
})

declare module 'wagmi' {
    interface Register {
        config: typeof config
    }
}

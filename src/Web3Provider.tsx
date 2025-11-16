import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

// Type assertion for Vite env variables
declare global {
  interface ImportMetaEnv {
    readonly VITE_PROJECT_ID: string
  }
}

const projectId = import.meta.env.VITE_PROJECT_ID
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set in .env file')
}

const config = getDefaultConfig({
  appName: 'React Vite Dapp Starter Kit',
  projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base],
})

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Web3Provider

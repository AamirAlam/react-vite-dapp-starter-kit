import { ConnectButton } from '@rainbow-me/rainbowkit'

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center ">
        <div className="mb-8">
          <ConnectButton />
        </div>
        <h1 className="text-xl ">
          Production-ready and test-driven development kit using Vite + React +
          TypeScript
        </h1>
      </div>
    </div>
  )
}

export default Home

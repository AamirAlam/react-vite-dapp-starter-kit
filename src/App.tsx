import './App.css'
import Web3Provider from './Web3Provider'
import Home from './Home'

function App() {
  return (
    <Web3Provider>
      <Home />
    </Web3Provider>
  )
}

export default App

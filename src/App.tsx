import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getCount } from './lib/utils'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div data-testid="app">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Production-ready and test-driven development kit using Vite + React + TypeScript</h1>
      <div className="card">
        <button data-testid="counter-button" onClick={() => setCount(getCount(count))}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

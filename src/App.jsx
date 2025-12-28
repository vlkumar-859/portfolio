
import './App.css'
import Portfolio from './components/Portfolio/Portfolio'
import Claude from './components/Claude/Claude'
import { Analytics } from '@vercel/analytics/react'

function App() {

  return (
    <>
      <Portfolio></Portfolio>
      {/* <Claude /> */}
      <Analytics />
    </>
  )
}

export default App

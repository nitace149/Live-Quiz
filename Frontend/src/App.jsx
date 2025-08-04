import { useState } from 'react'
import './App.css'
import Join from './Components/Join'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Join />

    </>
  )
}

export default App

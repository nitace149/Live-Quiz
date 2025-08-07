import { useState } from 'react'
import './App.css'
import Join from './Pages/Join'
import EnterName from './Pages/EnterName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Join /> */}
      <EnterName />
    </>
  )
}

export default App

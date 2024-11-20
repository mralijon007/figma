import { useState } from 'react'
import './App.css'
import Table from './companent/table/table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Table/>
    </>
  )
}

export default App

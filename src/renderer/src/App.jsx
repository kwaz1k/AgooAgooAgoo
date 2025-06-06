import { useEffect } from 'react'
import { Link } from 'react-router'
import Tables from './Tables'

function App() {
  useEffect(() => {
    (async (data="test") => await window.api.foo(data))()
  }, [])


  return (
    <>
      <Tables />
      <Link to='create'>
        <button>Создание нового партнера</button>
      </Link>
    </>
  )
}

export default App


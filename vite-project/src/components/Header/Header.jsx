import logo from '/vite.svg'
import { useState } from 'react'
import './Header.css'

export default function Header() {
    const [ now, setNow ] = useState(new Date());
    setInterval(() => setNow(new Date()), 1000)

    return (
        
      <header>
        <img src={logo} alt="Result" />
      <h3>Result</h3>
      {/* <span>Time now: { now.toLocaleTimeString() }</span> */}
    </header>
    )
  }
  
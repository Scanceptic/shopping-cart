import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'

function Shopping() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Navbar />
      <h1>Shopping Cart</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This is the shopping page of the app - add products to your basket and checkout when ready.
        </p>
        <p>
          There are links to the home page and the shopping cart page above.
        </p>
      </div>
    </>
  )
}

export default Shopping

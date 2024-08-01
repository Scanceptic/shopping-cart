import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Navbar />
      <div id="content">
        <h1>Shopping Cart</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            This is the home page of the app - look at some interesting info and images then head over to the shop.
          </p>
          <p>
            There are links to the home page and the shopping cart page above.
          </p>
        </div>  
      </div>
      < Footer />
    </>
  )
}

export default App


import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {

  return (
    <>
      < Navbar />
      <div id="content">
        <h1>Shopping Cart</h1>
        <div className="card">
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

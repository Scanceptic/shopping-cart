
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function Shopping() {

  return (
    <>
      < Navbar />
      <div id="content">
        <h1>Shopping Cart</h1>
        <div className="card">
          <p>
            This is the shopping page of the app - add products to your basket and checkout when ready.
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

export default Shopping

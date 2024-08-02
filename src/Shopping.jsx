
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function Shopping() {

  return (
    <>
      < Navbar />
      <div className="content shopping">
        <h1>Shopping</h1>
        <div id="shopping-browser">
          <div className="card">
            <p>
              This is the shopping page of the app - add products to your basket and checkout when ready.
            </p>
            <p>
              There are links to the home page and the shopping cart page above.
            </p>
          </div>
        </div>
      </div>
      < Footer />
    </>
  )
}

export default Shopping

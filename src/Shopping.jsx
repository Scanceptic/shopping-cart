
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Shopping = () => {
  return (
    <>
      < Navbar />
      <div className="content shopping">
        <div className="heading">
          <h1>Shopping</h1>
          <p>
            This is the shopping page of the app - add products to your basket and checkout when ready.
          </p>
          <p>
            There are links to the home page and the shopping cart page above.
          </p>
        </div>
        <div id="shopping-browser">
        </div>
      </div>
      < Footer />
    </>
  )
}

export default Shopping

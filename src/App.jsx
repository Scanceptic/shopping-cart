
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import typewriter from "./assets/typewriter.jpg";

function App() {

  return (
    <>
      < Navbar />
      <div className="content home">
        <div className ="heading">
          <h1>Home</h1>
          <p>
            This is the home page of the app - look at some interesting info and images then head over to the shop.
          </p>
          <p>
            There are links to the home page and the shopping cart page above.
          </p>
        </div>
        <div className='card'>
          <img src={typewriter} alt="Typewriter"/>
          <p className="attribution">Photo by <a href="https://unsplash.com/@florianklauer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Florian Klauer</a> on <a href="https://unsplash.com/photos/black-fayorit-typewriter-with-printer-paper-mk7D-4UCfmg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </p>
        </div>
        <div className="card">
          
        </div>
        <div className='card'>
          <img src={typewriter} alt="Typewriter"/>
          <p className="attribution">Photo by <a href="https://unsplash.com/@florianklauer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Florian Klauer</a> on <a href="https://unsplash.com/photos/black-fayorit-typewriter-with-printer-paper-mk7D-4UCfmg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </p>
        </div>
        <div className='card'>
          <p>This shop has provided excellent quality products to over 10,000 satisfied customers this year alone!</p>
        </div>
        <div className='card'>
          <img src={typewriter} alt="Typewriter"/>
          <p className="attribution">Photo by <a href="https://unsplash.com/@florianklauer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Florian Klauer</a> on <a href="https://unsplash.com/photos/black-fayorit-typewriter-with-printer-paper-mk7D-4UCfmg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </p>
        </div>
        <div className='card'>
          <p>Join the growing list of success stories by purchasing one of our custom-made typewriters today!</p>
        </div>
      </div>
      < Footer />
    </>
  )
}

export default App

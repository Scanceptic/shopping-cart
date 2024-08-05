import { Link } from "react-router-dom"
import Basket from "./Basket"

const Navbar = () => {
    return (
    <>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="../shopping">
          Shopping
        </Link>
        <Basket 
        />
      </nav>
    </>
)
}

export default Navbar
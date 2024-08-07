import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Basket from "./Basket";

const Navbar = ({ basketItems }) => {
  return (
    <>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="../shopping">
          Shopping
        </Link>
        <Basket basketItems={basketItems} 
        />
      </nav>
    </>
  )
}

Navbar.propTypes = {
  basketItems: PropTypes.array.isRequired,
};

export default Navbar
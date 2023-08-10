import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.CartReducer.cartValues.length);
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice);
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="d-inline p-2 navbar-nav mx-auto">
          <span className="btn btn-dark">Cart Items: {cartCount}</span> &nbsp;
          <span className="btn btn-dark">Total Price: ${totalPrice}</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

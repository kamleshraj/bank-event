import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./redux/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>YOUR BAG</h2>
          <h6>is currenlty empty</h6>
        </header>
      </section>
    );
  }
  return (
    <div className="p-5">
      <section className="cart">
        <header>
          <h2>YOUR BAG</h2>
        </header>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </section>
      <footer>
        <hr />
        <div className="cart-total d-flex justify-content-between">
          <h5>Total</h5>
          <div>$ {total.toFixed(2)}</div>
        </div>
        <div className="text-center">
          {" "}
          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CartContainer;

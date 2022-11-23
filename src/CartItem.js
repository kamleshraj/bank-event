import { ChevronDown, ChevronUp } from "./icons";
import { removeItem, increase, decrease } from "./redux/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="d-flex justify-content-between">
      <div className="d-flex">
        <img src={img} alt="title" />
        <div>
          <h5>{title}</h5>
          <h4>${price}</h4>
          <button
            className="btn btn-outline-transparent"
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            remove
          </button>
        </div>
      </div>
      <div className="cart-count">
        <h5 onClick={() => dispatch(increase({ id }))}>
          <ChevronUp />
        </h5>
        <p>{amount}</p>
        <h5
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </h5>
      </div>
    </article>
  );
};
export default CartItem;

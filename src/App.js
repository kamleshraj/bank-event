import "./styles.css";
import { useEffect } from "react";
import Navbar from "./Navbar";
import CartContainer from "./cartContainer";

import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, apicartData } from "./redux/cartSlice";

export default function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(apicartData());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

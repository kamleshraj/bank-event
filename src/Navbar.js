import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => state);
  console.log(data);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {" "}
          <h1>Redux toolkit</h1>
        </a>
        <div>
          <h3 className="text-success">Cart:{data.cart.amount}</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

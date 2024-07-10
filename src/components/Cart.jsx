import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../cartSlice";

const Cart = () => {
  return (
    <div className="p-4">
      <h1 className="text-center	text-xl">Cart</h1>
      <CartItems />
      <TotalAmt />
      <div className="flex flex-col justify-center items-center ">
        <ConditionalLink />
        {/* <NavLink
          to="/"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 hover:scale-105 transition"
        >
          Back to Shopping
        </NavLink> */}
      </div>
    </div>
  );
};

function ConditionalLink() {
  const items = useSelector((state) => state.cart.cartItems); // Updated state selector
  const hasItems = items.length > 0;
  return (
    <NavLink
      to={hasItems ? "/payment" : "/cart"}
      className="bg-red-500 text-white px-4 py-2 rounded-xl hover
        hover:bg-red-600 flex gap-2"
    >
      {hasItems ? "Proceed to payment" : "Add item to proceed"}
    </NavLink>
  );
}

export { Cart, CartItems, TotalAmt };

function CartItems() {
  const items = useSelector((state) => state.cart.cartItems); // Updated state selector
  return (
    <div className="Cart-wrapper grid grid-cols-1 gap-4">
      {items.map((item) => (
        <Items item={item} key={item.name} />
      ))}
    </div>
  );
}

function Items({ item }) {
  const dispatch = useDispatch();

  const handleUpdatesub = () => {
    dispatch(updateCart({ name: item.name, quantity: -1 }));
  };

  const handleUpdateadd = () => {
    dispatch(updateCart({ name: item.name, quantity: 1 }));
  };
  return (
    <div className="cart-item flex items-center bg-white shadow-md rounded-lg p-4">
      <img
        className="w-24 h-24 object-cover rounded mr-4"
        src={item.image}
        alt={item.name}
      />
      <div className="flex-1">
        <p className="shoe-name text-lg font-semibold">{item.name}</p>
        <div className="add-sub-btn flex items-center mt-2">
          <button
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition active:scale-95"
            onClick={handleUpdatesub}
          >
            -
          </button>
          <p className="mx-4">{item.quantity}</p>
          <button
            className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition active:scale-95"
            onClick={handleUpdateadd}
          >
            +
          </button>
        </div>
        <p className="price text-gray-600 mt-2">
          <span className="text-lg font-medium">₹</span>
          {item.price * item.quantity}.00
        </p>
      </div>
    </div>
  );
}

function TotalAmt() {
  const items = useSelector((state) => state.cart.cartItems); // Updated state selector
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex  justify-normal items-center gap-4 total-amt mt-8 p-4 bg-white shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-semibold">Total:</h1>
      <h2 className="text-xl mt-1  font-medium text-gray-800  ">₹{total}.00</h2>
    </div>
  );
}

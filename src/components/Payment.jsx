import { NavLink } from "react-router-dom";
import { TotalAmt } from "./Cart";
import { useSelector } from "react-redux";

const PaymentPage = () => {
  const items = useSelector((state) => state.cart.cartItems); // Updated state selector
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-2 p-5 overflow-scroll h-screen	">
        {items.map((item) => (
          <Items item={item} key={item.name} />
        ))}
      </div>
      <div className=" flex flex-col  payment-options bg-white shadow-md rounded-lg p-4">
        <TotalAmt className="flex flex-row" />
        <NavLink
          to="/"
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover
        hover:bg-red-600 flex gap-2"
        >
          Back to shopping
        </NavLink>

        <h2 className="text-xl font-semibold mb-4">Payment Options</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="1234 5678 9123 4567"
            />
          </div>
          <div>
            <label className="block text-gray-700">Expiry Date</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-gray-700">CVV</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="123"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover
        hover:bg-red-600 flex gap-2"
            onClick={(e) => e.preventDefault()}
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
function Items({ item }) {
  return (
    <div className="cart-item flex items-center justify-between bg-white shadow-md rounded-lg pr-2 border">
      <img
        className="w-20 h-20 object-cover rounded mr-4"
        src={item.image}
        alt={item.name}
      />
      <div className="flex-1">
        <p className="shoe-name text-lg font-semibold">{item.name}</p>
      </div>
      <div className="flex items-center mx-4 text-sm">
        <p className="quantity p-1">{item.quantity}</p>
        <span className="mx-2">×</span>
        <p>₹ {item.price}.00</p>
      </div>
      <div className="total-price text-gray-600 ml-4">
        <span className="text-lg font-medium">₹</span>
        {item.price * item.quantity}.00
      </div>
    </div>
  );
}

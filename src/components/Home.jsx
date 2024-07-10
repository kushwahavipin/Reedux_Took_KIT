import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";
import { Cart } from "./Cart";
import iconCart from './assets/iconCart.png';
import imageProduct1 from './assets/1.png';
import imageProduct3 from './assets/3.png'; 
import imageProduct4 from './assets/4.png'; 
import imageProduct5 from './assets/5.png'; 
import imageProduct6 from './assets/6.png'; 
import imageProduct7 from './assets/7.png'; 
import imageProduct8 from './assets/8.png'; 

const nikeShoes = [
  {
    name: "Hertfoid Upholstered Chair",
    price: 1500,
    image:imageProduct1,
  },
  {
    name: "Abingdon Upholstered Chair Swivel",
    price: 1299,
    image:imageProduct8,
  },
  {
    name: "Jeses Minimore Modern Style Etta",
    price: 1600,
    image:imageProduct3,
  },
  {
    name: "JJeses Minimore Modern Style",
    price: 9000,
    image:imageProduct4,
    },
  {
    name: "Bolanle Upholstered Armchair",
    price: 1050,
    image:imageProduct5,
    },
  {
    name: "Jaqueze Upholstered Armchair",
    price: 1000,
    image:imageProduct6  },
  {
    name: "Leston Wide Upholstered Fabric",
    price: 2100,
    image:imageProduct7,
    },
  {
    name: "Stephanny 27.5 Wide Tufted",
    price: 1100,
    image:imageProduct7  },
  
];

const Home = () => {
  return (
    <div className="home-container bg-zinc-200 grid grid-cols-1 lg:grid-cols-5 gap-4 p-4">
      <div className="shoe-list col-span-1 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {nikeShoes.map((shoe) => (
          <Shoes shoe={shoe} key={shoe.name} />
        ))}
      </div>
      <div className="cart-container col-span-1 lg:col-span-1 border">
        <Cart />
      </div>
    </div>
  );
};

export default Home;

function Shoes({ shoe }) {
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addToCart(shoe));
  };

  return (
    <div className="shoes bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      
      <img
        className="w-full h-54 object-cover"
        src={shoe.image}
        alt={shoe.name}
      />
      <h3 className="text-xl font-semibold text-gray-800 p-4">{shoe.name}</h3>
      <div className="flex justify-between items-center p-1">
        <p>
          <span className="text-2xl font-medium">$</span> {shoe.price}/-
        </p>
        <button className='bg-red-500 text-white px-4 py-2 rounded-xl hover
        hover:bg-red-600 flex gap-2' onClick={handleAddCart}> <img src={iconCart} alt="Cart" className='w-5' />Add to Cart</button>
        
      </div>
    </div>
  );
}

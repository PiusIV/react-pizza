import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import reactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className=" mx-auto bg-gray-800 text-yellow-400 h-72 font-sans rounded-b-lg">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="text-blue-400 mx-auto text-center py-10 font-serif sticky top-0 h-20 bg-gray-800 justify-middle z-10">
      <h1>Fast React Pie Pizza</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  const numPizzas = pizzas.length;

  return (
    <main className="grid gap-12 justify-items-center">
      <h2 className="text-center uppercase pt-9 text-2xl font-serif">
        Our Menu
      </h2>
      {numPizzas > 0 ? (
        <>
          <p className="w-1/2 h-18 text-center pb-8">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-6 bg-white container">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className="flex gap-6 justify-center text-sm p-4 align-middle cursor-pointer">
      <img
        src={pizzaObj.photoName}
        alt={pizzaObj.name}
        className="w-32 h-28 bg-center"
      />
      <div className="flex gap-2 flex-col">
        <h3 className="uppercase text-lg">{pizzaObj.name}</h3>

        <p className="font-mono italic">{pizzaObj.ingredients}</p>

        <span className=" text-gray-800">
          {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours;
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="h-20 pt-6 mx-auto bg-gray-800">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p className="text-center">
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div>
      <p>
        We're open for Business from {openHour}:00 to {closeHour}:00. Come visit
        us or Order online.
      </p>
      <button>Order</button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

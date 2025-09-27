import React, { useReducer} from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from './CartContext';

import './FoodCard.css';

import salad from './Resources/salad.jpeg';
import cake from './Resources/cake.webp';
import coffee from './Resources/coffee.jpeg';
import sweets from './Resources/sweets.jpg';
import orange from './Resources/orange.jpg';
import friedmomos from './Resources/friedmomos.jpg';
import pastry from './Resources/pastry.jpg';
import cupcake from './Resources/cupcake.jpg';
import potato from './Resources/Potato.jpg';
import kachori from './Resources/kachori.jpg';
import kadichawal from './Resources/kadichawal.jpg';
import dalmakhni from './Resources/dalmakhni.jpg';
import vegthali from './Resources/vegthali.jpg';
import siddu from './Resources/siddu.jpg';
import saag from './Resources/saag.jpg';
import sandwichh from './Resources/sandwichh.jpg';
import roll from './Resources/roll.jpg';
import kheers from './Resources/kheers.jpg';
import springrolls from './Resources/springrolls.jpg';
import grilledsandwich from './Resources/grilledsandwich.jpg';
import pizza1 from './Resources/pizza1.jpg';
import samosa1 from './Resources/samosa1.jpg';
import pavbhaji from './Resources/pavbhaji.webp';
import panipuri from './Resources/panipuri.jpeg';
import pasta from './Resources/pasta.jpg';
import chaat from './Resources/chaat.jpg';
import noodles from './Resources/noodles.jpg';
import burger from './Resources/burger.webp';
import momos from './Resources/momos.jpeg';
import dosa from './Resources/dosa.jpeg';

const foodItems = [
  { key: "pizza1", name: "Pizza1", price: 12, img: pizza1, description: "Pizza is a delicious, cheesy delight that brings people together with every slice." },
  { key: "pavbhaji", name: "Pav Bhaji", price: 20, img: pavbhaji, description: "Pav Bhaji is a spicy buttery street food favorite that packs bold flavors into every bite." },
  { key: "samosa1", name: "Samosa", price: 15, img: samosa1, description: "Samosa is a crispy, golden pastry filled with spiced potatoes and peas." },
  { key: "salad", name: "Salad", price: 24, img: salad, description: "Salad is a refreshing mix of crisp veggies, vibrant colors, and wholesome goodness in every bite." },
  { key: "cake", name: "Cake", price: 13, img: cake, description: "Cake is a soft, sweet celebration of flavor that brings joy to every occasion." },
  { key: "coffee", name: "Coffee", price: 20, img: coffee, description: "Coffee is a bold, aromatic brew that energizes your senses and kickstarts your day." },
  { key: "sweets", name: "Sweets", price: 19, img: sweets, description: "Sweets are delightful treats that add a touch of happiness to every moment." },
  { key: "panipuri", name: "Pani Puri", price: 23, img: panipuri, description: "Pani Puri is a burst of tangy, spicy flavors in a crispy hollow shell—India’s favorite street snack!" },
  { key: "orange", name: "Juice", price: 17, img: orange, description: "Orange Juice is a fresh, zesty drink packed with vitamin C and sunshine in every sip." },
  { key: "pasta", name: "Pasta", price: 14, img: pasta, description: "Pasta is a versatile Italian favorite, bringing comforting flavors with every twirl and bite." },
  { key: "chaat", name: "Chaat", price: 18, img: chaat, description: "Chaat is a flavorful Indian street food that combines sweet, spicy, tangy, and crunchy in every bite." },
  { key: "noodles", name: "Noodles", price: 25, img: noodles, description: "Noodles are a quick, tasty dish loved worldwide for their satisfying texture and endless flavor combos." },
  { key: "burger", name: "Burger", price: 20, img: burger, description: "Burger is a juicy, satisfying sandwich stacked with savory fillings and bold flavors." },
  { key: "momos", name: "Momos", price: 22, img: momos, description: "Momos are steamed dumplings bursting with flavorful fillings, a beloved snack from the Himalayas." },
  { key: "friedmomos", name: "Fried Momos", price: 18, img: friedmomos, description: "Fried Momos are crispy, golden dumplings with juicy, spiced fillings — a crunchy twist on a classic favorite." },
  { key: "pastry", name: "Pastry", price: 15, img: pastry, description: "Pastry is a flaky, buttery delight that melts in your mouth with every bite." },
  { key: "cupcake", name: "Cupcake", price: 12, img: cupcake, description: "Cupcake is a mini cake with a big burst of flavor, perfect for sweet little celebrations." },
  { key: "potato", name: "Chilli Potato", price: 16, img: potato, description: "Chilli Potato is a spicy, crispy Indo-Chinese favorite that delivers bold flavor in every bite." },
  { key: "kachori", name: "Kachori", price: 20, img: kachori, description: "Kachori is a deep-fried, flaky snack filled with spicy lentils or potatoes — a true taste of Indian street food." },
  { key: "kadichawal", name: "Kadi Chawal", price: 22, img: kadichawal, description: "Kadhi Chawal sirf khana nahi, maa ke haathon ka pyaar hota hai." },
  { key: "dalmakhni", name: "Dal Makhni", price: 20, img: dalmakhni, description: "A creamy delight from the heart of Punjab, Dal Makhni is comfort served in a bowl." },
  { key: "vegthali", name: "Veg Thali", price: 27, img: vegthali, description: "A Veg Thali is a symphony of Indian flavors, all on one plate." },
  { key: "siddu", name: "Siddu", price: 17, img: siddu, description: "Siddu is more than food, it is a bite of Himachals heritage." },
  { key: "saag", name: "Saag", price: 22, img: saag, description: "Saag and Makki di Roti  the pride of Punjabs fields and kitchens." },
  { key: "sandwichh", name: "Sandwich", price: 14, img: sandwichh, description: "A sandwich  simple, stacked, and always satisfying." },
  { key: "roll", name: "Roll", price: 13, img: roll, description: "Every roll tells a story  of flavor, crunch, and satisfaction." },
  { key: "dosa", name: "Dosa", price: 15, img: dosa, description: "Crispy, golden, and endlessly loved – Dosa is South India’s culinary crown." },
  { key: "kheer", name: "Kheer", price: 18, img: kheers, description: "Kheer – the Indian dessert that brings hearts and homes together." },
  { key: "springrolls", name: "Spring Roll", price: 19, img: springrolls, description: "A spring roll is a light, rolled snack typically filled with vegetables and wrapped in a delicate, crispy shell." },
  { key: "grilledsandwich", name: "GrilledSandwich", price: 20, img: grilledsandwich, description: "A spring roll is a light, rolled snack typically filled with vegetables and wrapped in a delicate, crispy shell." },
];

const initialState = foodItems.reduce((acc, item) => {
  acc[item.key] = 0;
  return acc;
}, {});

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, [action.item]: state[action.item] + 1 };
    case "DECREMENT":
      return { ...state, [action.item]: Math.max(0, state[action.item] - 1) };
    default:
      return state;
  }
};
export default function FoodCard() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { dispatch: cartDispatch } = useCart();

  return (
    <div className="food-section-wrapper">
      <div id='fooditems'>FOOD ITEMS</div>
      <div className="cards">
        {foodItems.map(item => (
          <div className="card" key={item.key}>
            <img src={item.img} alt={item.name} />
            <div className="heading-rating">
              <h3>{item.name}</h3>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <br />
            <span>{item.description}</span>
            <br />
            <span id="sign">${item.price}</span>
            <br />
            <div id="button">
              <button className="btn" onClick={() => dispatch({ type: "DECREMENT", item: item.key })}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <span>{state[item.key] || 0}</span>
              <button className="btn" onClick={() => dispatch({ type: "INCREMENT", item: item.key })}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="order-button" style={{ marginTop: "10px" }}>
              <button
  className="btn order-now"
  onClick={() =>
    cartDispatch({
      type: "ADD_TO_CART",
      payload: item,
    })
  }
>
  Add To Cart
</button>
            </div>
          </div>
        ))}
      </div>
      <br />
      <NavLink
  to="/cards"
  className="more-cards-link"
>
  More cards
</NavLink>

    </div>
  );
}

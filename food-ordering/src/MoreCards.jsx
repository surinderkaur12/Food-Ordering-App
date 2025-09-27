import React, { useReducer } from 'react';
import './App.css';
import { useCart } from './CartContext';
import funnelcake from './Resources/funnelcake.jpg';
import poha from './Resources/poha.jpg';
import onionfritters  from './Resources/onionfritters.jpg';
import aloofritters from './Resources/aloofritters.jpg';
import sagavada from './Resources/sagavada.jpg';
import soyamasala from './Resources/soyamasala.jpg';
import puttu from './Resources/puttu.jpg';
import meduvada from './Resources/meduvada.jpg';
import idli from './Resources/idli.jpg';
import rasmalai from './Resources/rasmalai.jpg';
import redpasta from './Resources/redpasta.jpg';
import manchurian1 from './Resources/manchurian1.jpg';
import maggie from './Resources/maggie.jpg';
import sahipaneer from './Resources/sahipaneer.jpg';
import cornpizza from "./Resources/cornpizza.jpg";
import capsicumpizza from "./Resources/capsicumpizza.jpg";
import onionpizza from "./Resources/onionpizza.jpg";
import paneerpizza from "./Resources/paneerpizza.jpg";
import pepperonipizza from "./Resources/pepperonipizza.jpg";
import tomatopizza from "./Resources/tomatopizza.jpg";
import paneertikka from "./Resources/paneertikka.jpg";
import paneerburger from "./Resources/paneerburger.jpg";
import alootikki from "./Resources/alootikki.jpg";
import cheeseburger from "./Resources/cheeseburger.jpg";
import redvelvet from "./Resources/redvelvet.jpg";
import blueberry from "./Resources/blueberry.jpg";
import chocolate from "./Resources/chocolate.jpg";
import vanilla from "./Resources/vanilla.jpg";
import strawberry from "./Resources/strawberry.jpg";
import coconut from "./Resources/coconut.jpg";
import caramel from "./Resources/caramel.jpg";
import pineapple from "./Resources/pineapple.jpg";
import chocolatecake from "./Resources/chocolatecake.jpg";
import carrot from "./Resources/carrot.jpg";
import confetti from "./Resources/confetti.jpg";
import cheese from "./Resources/cheese.jpg";
import strawberrycake from "./Resources/strawberrycake.jpg";
import blackcake from "./Resources/blackcake.webp";
import fruitcake from "./Resources/fruitcake.jpg";
import caramelcake from "./Resources/caramelcake.jpg";
import butterscotch from "./Resources/butterscotch.jpg";
import coconutcake from "./Resources/coconutcake.jpg";
import tomatosoup from "./Resources/tomatosoup.webp";
import potatowedges from "./Resources/potatowedges.webp";
import chillipaneer from "./Resources/chillipaneer.jpg";
import dhokla from "./Resources/dhokla.jpeg";
import mushroom from "./Resources/mushroom.jpg";
import golibajje from "./Resources/golibajje.webp";
import sabudana from "./Resources/sabudana.webp";
import cutlet from "./Resources/cutlet.jpg";
import rava from "./Resources/rava.jpg";
import batata from "./Resources/batata.jpg";
import chila from "./Resources/chila.jpg";
import bajra from "./Resources/bajra.jpg";
import appam from "./Resources/appam.jpg";
import dalbati from "./Resources/dalbati.jpg";
import palak from "./Resources/palak.jpg";



const foodItems = [
 
  { key: "funnelcake", name: "Funnel Cake", price: 13, img: funnelcake, description: "Funnel cake is a crispy, deep-fried treat made by pouring batter through a funnel into hot oil, often topped." },
  { key: "poha", name: "Poha", price: 16, img: poha, description: "Poha is a light and fluffy Indian breakfast dish made from flattened rice, sautéed with spices, onions, and mustard seeds." },
  { key: "poha", name: "Poha", price: 16, img: poha, description: "Poha is a light and fluffy Indian breakfast dish made from flattened rice, sautéed with spices, onions, and mustard seeds." },
  { key: "palak", name: "Palak Paneer", price: 20, img: palak, description: "Palak paneer is a creamy spinach curry with soft cubes of Indian cottage cheese." },
   { key: "sagavada", name: "Saga Vada", price: 18, img: sagavada, description: "Saggavada is a crispy Indian snack made with leafy greens and gram flour batter." },
  { key: "soyamasala", name: "Soya Masala", price: 13, img: soyamasala, description: "Soya Masala is a spicy, flavorful Indian dish made with marinated soya chunks cooked in rich masala gravy." },
  { key: "puttu", name: "Puttu", price: 14, img: puttu, description: "Puttu is a steamed South Indian breakfast dish made from rice flour and grated coconut." },
  { key: "meduvada", name: "Medu vada", price: 20, img: meduvada, description: "Medu vada is a crispy, savory South Indian doughnut made from spiced urad dal batter." },
  { key: "idli", name: "Idli", price: 16, img: idli, description: "Idli is a soft, fluffy steamed rice cake, popular in South Indian cuisine." },
  { key: "dalbati", name: "Dal Bati", price: 13, img: dalbati, description: "Dal bati is a traditional Rajasthani dish of spiced lentils served with baked wheat balls." },
  { key: "appam", name: "Appam", price: 12, img: appam, description: "Appam is a soft, lacy South Indian pancake made from fermented rice batter." },
  { key: "bajra", name: "Bajra khichdi", price:15,img:bajra, description: "Bajra khichdi is a wholesome, comforting dish made with bajra millet and lentils." },
  { key: "chila", name: "chila", price: 16, img:chila , description: "Chila is a savory Indian pancake made from gram flour and spices." },
  { key: "batata", name: "Batata vada", price:20,img:batata, description: "Batata vada are a snack made of spiced potato balls." },
  { key: "rava", name: "Rava Laddu", price: 10, img:rava , description: "Rava laddu is a South Indian sweet made with semolina, powdered sugar, nuts and ghee. " },
  { key: "cutlet", name: "Cutlet", price: 17, img: cutlet, description: "Cutlet is a crispy, savory patty made from mashed veggies or meat." },
  { key: "sabudana", name: "Sabudana Vada", price:22, img:sabudana, description: "Sabudana Vada is a crispy, crunchy snack made from tapioca pearls and spices." },
  { key: "golibajje", name: "Goli Baje", price: 16, img:golibajje , description: "Goli baje is a popular mangalorean snack made with flour, yogurt, spices & herb" },
  { key: "mushroom", name: "MushroomTikka", price:18, img:mushroom , description: "Tandoori Mushroom Tikka is smoky, spicy, and marinated to perfection." },      
  { key: "dhokla", name: "Dhokla", price: 16, img: dhokla, description: "Dhokla is a soft, fluffy Gujarati snack with a tangy, savory flavor." },
  { key: "chillipaneer", name: "chilli Paneer", price:20, img:chillipaneer,  description: "Chilli M. Paneer is a spicy, tangy Indo-Chinese dish with crispy paneer cubes." },
  { key: "potatowedges", name: "Potato wedges", price: 16, img:potatowedges , description: "Potato wedges are crispy on the outside, soft inside, and perfectly seasoned." },
  { key: "tomatosoup", name: "Tomato Soup", price:12, img:tomatosoup, description: "Tomato soup is warm, smooth, and rich with tangy tomato flavor." },
  { key: "coconutcake", name:"Coconut Cake", price: 16, img: coconutcake, description: "Coconut cake is light, fluffy, and filled with sweet coconut flavor." },
  { key: "butterscotch", name: "Butterscotch", price: 18, img: butterscotch, description: "Butterscotch cake is moist, sweet, and layered with creamy butterscotch flavor." },
  { key: "caramelcake", name: "Caramel Cake", price: 16, img: caramelcake, description: "Caramel cake is soft, buttery, and topped with rich caramel frosting." },
  { key: "fruitcake", name: "Fruit Cake", price: 15, img: fruitcake, description: "Fruit cake is dense, moist, and packed with dried fruits and nuts." },
  { key: "blackcake", name: "Black forest", price: 16, img: blackcake, description: "Black Forest cake is rich, chocolaty, and layered with cherries and cream." },
  { key: "strawberrycake", name: "StrawberryCake", price: 12, img: strawberrycake, description: "Strawberry cake is soft, fruity, and bursting with berry flavor." },
  { key: "cheese", name: "Cheese Cake", price: 16, img: cheese, description: "Confetti cake is sweet, fluffy, and filled with colorful sprinkles." },
  { key: "confetti", name: "Confetti Cake", price: 10, img: confetti, description: "Confetti cake is sweet, fluffy, and filled with colorful sprinkles." },
  { key: "carrot", name: "Carrot cake", price: 16, img: carrot, description: "Carrot cake is moist, spiced, and topped with creamy frosting." },
  { key: "chocolatecake", name: "Chocolate Cake", price: 13, img: chocolatecake, description: "Chocolate cake is rich, moist, and delightfully chocolaty." },
  { key: "pineapple", name: "Pineapple cake", price: 15, img: pineapple, description: "Pineapple ice cream is tangy, tropical, and refreshingly sweet." },
  { key: "caramel", name: "Salted Caramel", price: 17, img: caramel, description: "Salted caramel ice cream is sweet, creamy, and lightly salty." },
  { key: "coconut", name: "coconut", price: 16, img: coconut, description: "Coconut ice cream is a rich, tropical dessert with a smooth texture and a naturally sweet, nutty flavor." },
  { key: "strawberry", name: "Strawberry", price: 14, img: strawberry, description: "Strawberry ice cream is a sweet, creamy treat bursting with the fresh flavor of ripe strawberries." },
  { key: "vanilla", name: "vanilla", price: 17, img: vanilla, description: "Vanilla Ice Cream is a classic, smooth, and creamy dessert flavored with real vanilla beans." },
  { key: "chocolate", name: "Chocolate ", price: 15, img: chocolate, description: " Chocolate Ice Cream is a creamy dessert made with real cocoa or chocolate flavor in every bite." },
  { key: "blueberry", name: "Blueberry", price: 15, img: blueberry, description: "Blueberry Ice Cream is a smooth, refreshing treat bursting with sweet and tangy blueberry flavors." },
  { key: "redvelvet", name: "Red Velvet", price: 20, img: redvelvet, description: " Red Velvet Ice Cream is a creamy, rich dessert with swirls of red velvet cake." },
  { key: "poha", name: "Poha", price: 16, img: poha, description: "Poha is a light and fluffy Indian breakfast dish made from flattened rice,onions, and mustard seeds" },
  { key: "cheeseburger", name: "cheese Burger", price: 17, img: cheeseburger, description: "Cheese Burger is a juicy burger with a melted slice of cheese, fresh veggies, served in a toasted bun." },
  { key: "alootikki", name: "Aloo tikki ", price: 20, img: alootikki, description: "Aloo Tikki Burger is a tasty sandwich with a crispy spiced potato patty all tucked inside a soft bun." },
  { key: "paneerburger", name: "paneer Burger", price: 15, img: paneerburger, description: "Paneer burger is a delicious fusion of a soft bun filled with spicy grilled paneer, fresh veggies." },
  { key: "paneertikka", name: "Paneer Tikka", price: 16, img: paneertikka, description:"Paneer tikka is marinated paneer cubes grilled to smoky perfection, bursting with rich spices." },
  { key: "aloofritters", name: "aloo Fritters", price: 10, img: aloofritters, description: "Aloo fritters are crispy potato slices dipped in spiced batter and fried till golden—comfort food at its finest." },
  { key: "onionfritters", name: "onion Fritters", price: 17, img: onionfritters, description: "Onion fritters are a crunchy street-style indulgence, bursting with bold spices and deep-fried to golden perfection.." },
  { key: "tomatopizza", name: "Tomato pizza", price: 12, img: tomatopizza, description: "Tomato pizza is topped with juicy, ripe tomatoes, giving it a fresh and tangy taste." },
  { key: "pepperonipizza", name: "Pepperoni Pizza", price: 13, img: pepperonipizza, description: "Pepperoni pizza features spicy, savory pepperoni slices that add a bold, classic flavor." },
  { key: "paneerpizza", name: "Paneer Pizza", price: 14, img: paneerpizza, description: "Paneer pizza is topped with soft, spiced paneer cubes, giving it a deliciously creamy and savory twist." },
  { key: "cornpizza", name: "corn pizza", price: 15, img: cornpizza, description: "Corn pizza is a delicious pizza topped with sweet corn, cheese, and fresh veggies for a tasty twist." },
  { key: "capsicumpizza", name: "Capsicum pizza", price: 16, img: capsicumpizza, description: "Capsicum pizza is topped with fresh, crunchy bell peppers, adding a sweet and slightly tangy flavor." },
  { key: "onionpizza", name: "Onion Pizza", price: 13, img: onionpizza, description: "Onion pizza features a flavorful topping of caramelized or fresh onions with melted cheese and herbs." },
  { key: "sahipaneer", name: "Sahi paneer", price: 16, img: sahipaneer, description: "Sahi Paneer is a creamy, flavorful paneer curry cooked with rich spices and cream." },
  { key: "maggie", name: "Maggie", price: 15, img: maggie, description: "Maggi is a quick and tasty instant noodle snack loved for its flavorful masala and ease of preparation." },
  { key: "manchurian1", name: "Manchurian", price: 12, img: manchurian1, description: "Manchurian is a spicy Indo-Chinese dish made with fried veggie or meat balls tossed in a flavorful sauce." },
  { key: "redpasta", name: "Red Pasta", price: 13, img: redpasta, description: "Red pasta is a flavorful dish made with a rich tomato-based sauce, herbs, and your choice of pasta, offering a perfect balance of tangy and savory taste." },
  { key: "rasmalai", name: "Rasmalai", price: 18, img: rasmalai, description: "Rasmalai is a rich and creamy Indian dessert made of soft paneer balls soaked in sweet, cardamom-flavored milk." },
 { key: "funnelcake", name: "Funnel Cake", price: 13, img: funnelcake, description: "Funnel cake is a crispy, deep-fried treat made by pouring batter through a funnel into hot oil, often topped." },

];

// Initial cart state
const initialState = foodItems.reduce((acc, item) => {
  acc[item.key] = 0;
  return acc;
}, {});

// Reducer
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

const Cards = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
   const { dispatch: cartDispatch } = useCart();

  return (
    <>
    <br/><br/><br/>
    
    
    <div className='cards'>
      {foodItems.map(item => (
        <div className='card' key={item.key}>
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
          <div id='button'>
            <button className="btn" onClick={() => dispatch({ type: 'DECREMENT', item: item.key })}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <span>{state[item.key]}</span>
            <button className="btn" onClick={() => dispatch({ type: 'INCREMENT', item: item.key })}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
            <div className="order-button" style={{ marginTop: '10px' }}>
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
        
  </>
  );
};

export default Cards;

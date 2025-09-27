import React from 'react';
import './FoodGallery.css';



import shake from './Resources/shake.webp';
import burger from './Resources/burger.webp';
import noodles from './Resources/noodles.jpg';
import momos from './Resources/momos.jpeg';
import mithai from './Resources/mithai.jpeg';
import dosa from './Resources/dosa.jpeg';
import coldcoffee from './Resources/coldcoffee.jpg';
import pizza from './Resources/pizza.jpg';
import pasta from './Resources/pasta.jpg';
import vadapav from './Resources/vadapav.jpg';
import pavbhaji from './Resources/pavbhaji.webp';
import panipuri from './Resources/panipuri.jpeg';
import chaat from './Resources/chaat.jpg';
import badamshake from './Resources/badamshake.jpg';
import bananashake from './Resources/bananashake.jpg';
import grimaceshake from './Resources/grimaceshake.jpg';
import mangoshake from './Resources/mangoshake.jpeg';
import oreoshake from './Resources/oreoshake.webp';
import fruit from './Resources/fruit.jpeg';
import dhokla from './Resources/dhokla.jpeg';
import paratha from './Resources/paratha.jpeg';
import sandwich from './Resources/sandwich.jpeg';
import chillipotato from './Resources/chillipotato.jpg';
import paneer from './Resources/paneer.jpeg';
import vegsalad from './Resources/vegsalad.png';
import cholebhature from './Resources/cholebhature.png';
import dalchawal from './Resources/dalchawal.jpg';
import biryani from './Resources/biryani.jpeg';
import idli from './Resources/idli.jpeg';
import jamun from './Resources/jamun.webp';
import rasmalai from './Resources/rasmalai.webp';
import kheer from './Resources/kheer.jpg';
import kajukatli from './Resources/kajukatli.gif';
import ladoo from './Resources/ladoo.jpg';
import khoya from './Resources/khoya.webp';

function FoodGallary() {
  return (
    <>
    
     <div className='container'>
    < div className='explore'>EXPLORE OUR FOOD</div>
    <h2>Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes.Food exploration provides countless opportunities to expand our palates, learn about other cultures, and challenge our taste buds — whether it's trying a new dish at a local restaurant, enjoying authentic cuisine while traveling in a different country, or even creating a recipe with ingredients you've never used before.</h2>

    <img src={shake} id ='drinks'/>
    <img src={badamshake} id='drinks'/>
    <img src={bananashake} id='drinks'/>
    <img src={grimaceshake} id='drinks'/>
    <img src={mangoshake} id='drinks'/>
    <img src={oreoshake} id='drinks'/>
    <img src={coldcoffee} id='drinks'/>
    <img src={burger} id ='drinks'/>
    <img src={noodles} id='drinks'/>
    <img src={momos} id='drinks'/>
    <img src={pizza} id ='drinks'/>
    <img src={pasta} id ='drinks'/>
    <img src={panipuri} id ='drinks'/> 
    <img src={chaat} id ='drinks'/> 
    <img src ={sandwich} id='drinks'/> 
    <img src={vadapav} id ='drinks'/> 
    <img src={pavbhaji} id ='drinks'/> 
    <img src={chillipotato} id ='drinks'/> 
    <img src={paneer} id ='drinks'/> 
    <img src={vegsalad} id='drinks'/>
    <img src ={fruit} id='drinks'/>
    <img src ={idli} id='drinks'/>
    <img src={dosa} id='drinks'/>
    <img src ={dhokla} id='drinks'/>
    <img src ={paratha} id='drinks'/>
    <img src ={cholebhature} id='drinks'/>
    <img src ={dalchawal} id='drinks'/>
    <img src ={biryani} id='drinks'/> 
    <img src={mithai} id='drinks'/>
    <img src={jamun} id='drinks'/>
    <img src={kheer} id='drinks'/>
    <img src={rasmalai} id='drinks'/>
    <img src={kajukatli} id='drinks'/>
    <img src={ladoo} id='drinks'/>
    <img src={khoya} id='drinks'/>
 
  
   </div>
   <div id='hr'><hr/></div>  
   </>
  )
}

export default FoodGallary;
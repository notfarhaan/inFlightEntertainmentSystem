import React, { useState, useEffect } from 'react'

//Components
import Weather from '../components/Weather'
import MiniSlider from '../components/MiniSlider'
import ToDoWidget from '../components/ToDoWidget' 

//CSS
import '../css/Slideshow.css'
import '../css/Weather.css'


//Snacks
 import Sandwich from '../images/chicken and stuffing sadwich.png'
 import Pringles from '../images/pringles1.jpg'
 import Pasta from '../images/pasta.png'
 import DairyMilk from '../images/dairymilk.png'


//Drinks
 import CokeCan from '../images/coke.png'
 import Oj from '../images/oj.png'
 import Water from '../images/water.png'
 import Tea from '../images/tea coffee.png'
 import Coffee from '../images/tea coffee.png'


//Accessories 
 import Blanket from '../images/blanket.png'
 import Earphones from '../images/earphones.png'
 import Eyemask from '../images/eyemask.png'
 import Pillow from '../images/pillow.png'

// Alchohol 
 import Heineken from '../images/heineken.png'
 import Budweiser from '../images/budweiser.png'
 import Wine from '../images/red wine.png'
 import Whiskey from '../images/whiskey.png'


function Home() {


const [timedPopUp, setTimedPopUp] = useState(false);



useEffect(() => {
  setTimeout(() => {
    setTimedPopUp(true);
  }, 500);
}, []);




 const products = [

   {
     image: CokeCan,
     name: 'Soda',
     type: 'drinks'
   },
   {
     image: Oj,
     name: 'Orange Juice',
     type: 'drinks'
   },
   {
     image: Water,
     name: 'Water',
     type: 'drinks'
   },
   {
     image: Tea,
     name: 'Tea',
     type: 'drinks'
  },
   {
     image: Coffee,
     name: 'Coffee',
     type: 'drinks'
   },
   {
     image: Sandwich,
     name: 'Chicken & Stuffin Sandwich',
     type: 'snacks'
   },
   {
     image: Pasta,
     name: 'Spinach and Ricotta Pasta',
     type: 'snacks'
   },
   {
     image: Pringles,
     name: 'Pringles',
     type: 'snacks'
   },
   {
     image: DairyMilk,
     name: 'Dairy Milk',
     type: 'snacks'
   },
    {
      image: Earphones,
      name: 'Earphones',
      type: 'accessories'
    },
    {
      image: Blanket,
      name: 'Blanket',
      type: 'accessories'
    },
    {
      image: Eyemask,
      name: 'Eyemask',
      type: 'accessories'
    },
    {
      image: Pillow,
      name: 'Pillow',
      type: 'accessories'
    },
    {
      image: Heineken,
      name: 'Heineken',
      type: 'alchohol'
    },
    {
      image: Budweiser,
      name: 'Budweiser',
      type: 'alchohol'
    },
    {
      image: Wine,
      name: 'Wine',
      type: 'alchohol'
    },
    {
      image: Whiskey,
      name: 'Whiskey',
      type: 'alchohol'
    }
 ]


    return (
      
      <div className='container'>
        
        <div className="main-section-one">
          <Weather />
          <ToDoWidget />
        </div>

        <div className="main-section-two">
            <div className="genre">
              <h3 className='food-title'>Food, Drinks & Accessories</h3>
            </div>

             <MiniSlider items={products}/> 

            
        </div>
        
      
      </div>



    );
  }

  export default Home
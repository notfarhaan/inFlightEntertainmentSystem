import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Sandwich from '../images/chicken and stuffing sadwich.png';
import Pringles from '../images/pringles1.jpg';
import Pasta from '../images/pasta.png';
import DairyMilk from '../images/dairymilk.png';
import CokeCan from '../images/coke.png';
import Oj from '../images/oj.png';
import Water from '../images/water.png';
import Tea from '../images/tea coffee.png';
import Coffee from '../images/tea coffee.png';
import Whiskey from '../images/whiskey.png';

const Orders = () => {
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [food, setFood] = useState([]);
  const [total, setTotal] = useState('');  

  useEffect(() => {
    if (location.state && location.state.username) {
      setUsername(location.state.username);
      fetchFood(location.state.username);
    }
  }, [location]);

  const fetchFood = async (username) => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/${username}`);
      const data = await response.json();

      if (data.food && data.food.length > 0) {
        setFood(data.food);
        if (data.total) {
          setTotal(data.total); 
        }
      } else {
        setFood([]);
      }
    } catch (error) {
      console.error('Error fetching food data:', error);
      setFood([]);
    }
  };

  const productImages = {
    'Soda': CokeCan,
    'Orange Juice': Oj,
    'Water': Water,
    'Tea': Tea,
    'Pasta': Pasta,
    'Coffee': Coffee,
    'Chicken & Stuffin Sandwich': Sandwich,
    'Spinach and Ricotta Pasta': Pasta,
    'Pringles': Pringles,
    'Dairy Milk': DairyMilk,
    'Whiskey': Whiskey,
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome, {username}!</h1>
      <h2 style={styles.subheading}>Your Pre-Orders</h2>

      <div style={styles.foodContainer}>
        {food.length > 0 ? (
          food.map((item, index) => (
            <div key={index} style={styles.foodItem}>
              <img src={productImages[item]} alt={item} style={styles.foodImage} />
              <p style={styles.foodName}>{item}</p>
            </div>
          ))
        ) : (
          <p style={styles.noData}>No food data available</p>
        )}
      </div>

      {/* Display total at the center of the page */}
      {total && (
        <div style={styles.totalContainer}>
          <h3 style={styles.totalText}>Total: {total}</h3>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'center',  
    flexDirection: 'column',
    paddingLeft: '40px',
    paddingRight: '40px',
    height: '100vh',  
    overflowY: 'auto',  
    position: 'relative',  
  },
  heading: {
    marginTop: '70px',
    textAlign: 'left',
    fontSize: '48px',
    color: '#fff',  
    fontWeight: '700',
    marginBottom: '10px',
    letterSpacing: '2px',
  },
  subheading: {
    textAlign: 'left',
    fontSize: '26px',
    marginTop: '10px',
    fontWeight: '600',
    color: '#fff',  
    marginBottom: '20px',
  },
  foodContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',  
    marginBottom: '50px',  
  },
  foodItem: {
    textAlign: 'center',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    borderRadius: '10px',
    width: '250px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  foodImage: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  foodName: {
    fontSize: '18px',
    color: '#fff',  
    fontWeight: '500',
  },
  noData: {
    color: '#fff',  
    fontSize: '18px',
    marginTop: '20px',
  },
  totalContainer: {
    marginTop: '30px',
    textAlign: 'center',
    backgroundColor: '#444',  
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    position: 'absolute', 
    bottom: '20px',  
  },
  totalText: {
    fontSize: '22px',
    color: '#fff',  
    fontWeight: '700',
  },
};

export default Orders;

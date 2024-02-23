import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './snacks.module.css'
const url = 'https://elchocrud.pro/api/v1/mypizza/snacks';

const Snacks = () => {
  const [foods, setFoods] = useState([]);

  const getFoods = async () => {
    const response = await axios.get(url)
    setFoods(response.data);
  
  }
   


  useEffect(() => {
    getFoods();

  }, []);


  return (
    <div>
      {foods.map((el) => {
          return <div className={styles.container}>
            <div className={styles.box}>
              <img className={styles.img} src={el.image} alt="food" />
              <h3 className={styles.food}>{el.name}</h3>
              <p className={styles.ingredients}>{el.ingredients}</p>
              <h4 className={styles.price}>{el.price} С</h4>
            </div>
      </div>
        })}
      
    </div>

  )

}

export default Snacks
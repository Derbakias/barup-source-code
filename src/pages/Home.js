import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import CocktailMin from '../components/CocktailMin';
import CocktailFull from '../pages/CocktailFull';
import {DataContext } from '../DataProvide';

const Home = () => {
  const {data, showFull, active, showFullCocktail, stock, changeStock} = useContext(DataContext);
  // conditional rendering
  if(showFull){
    return (
      
      < CocktailFull active={active} showFullCocktail={showFullCocktail} changeStock={changeStock}/>
      )
    } else {
      return (
        <div className='page'>
          <Navbar />
          {data.map((cocktail, index) => {
            return (
              <CocktailMin key={index} data={data[index]} stock={stock} showFullCocktail={showFullCocktail} changeStock={changeStock}/>
            )
          })}
        </div>
      )
    }
}

export default Home

import React, { useContext } from 'react';
import {DataContext } from '../DataProvide';

const CocktailMin = props => {
  const {photo, title, ingredients} = props.data;
  const { stock } = useContext(DataContext);
  const showFullCocktail = props.showFullCocktail;

  const findMissing = () => {
    let missing = []
    for(let i=0; i < ingredients.length; i++) {
      for(let j=0; j < stock.length; j++) {
        if(ingredients[i].ingredient.toLowerCase() === stock[j].name.toLowerCase() && stock[j].inStock === false){
          missing.push(stock[j].name)
        }
      }  
    }
    return missing.length
  }

  return (
    <div className="cocktail-minimal">
      <div className="icon">
        <img src={photo} alt={title}/>
      </div>
      <div className="info">
        <h2 className="title" onClick={showFullCocktail}>{title}</h2>
        <p>{findMissing()} {findMissing() > 1 ? 'ingredients' : 'ingredient'} missing</p>
      </div>
    </div>
  )
}

export default CocktailMin

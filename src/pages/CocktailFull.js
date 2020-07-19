import React, { useContext } from 'react';
import {DataContext } from '../DataProvide';


const CocktailFull = props => {
  const {stock} = useContext(DataContext);
  const showFullCocktail = props.showFullCocktail;
  const active = props.active;

  const checkStock = () => {
    return (active.ingredients.map((item, index) => (
      <div key={index} className="ingredient-minimal">
        <div className="icon">
          <img src={item.photo} alt={item.ingredient}/>
        </div>
        <div className="info">
          <h2 className="title">{item.ingredient}</h2>
          <p className="measure">{item.measure}{item.measure >= 5 && `ml`}</p>
        </div>
        <div className="checkbox">
          {stock.map((stockitem, index) => {
            if(stockitem.name === item.ingredient) {
              if(stockitem.inStock) {
                return <i key={index} className="fas fa-check-circle in-stock"></i>
              } else {
                return <i key={index} className="fas fa-ban no-stock"></i>
              }
            } else {
              return ''
            }
          })}
        </div>
      </div>
    )))
  }

  return (
    <div className='cocktail-full fadein'>
      <nav>
        <div className='arrow' onClick={showFullCocktail}><i className="fas fa-arrow-left"></i></div>
      </nav>
      <div className="cocktail-wrapper">
        <h3 className="title">{active.title}</h3>
        <img src={active.photo} alt={active.title}/>
      <p className="description">{active.descripton}</p>
      <div className='ingredients'>
        <div className="header">
          <h2>Ingredient</h2>
          <h2>Stock</h2>
        </div>
        {checkStock()}
        <div className="steps-wrapper">
          <h2>Instructions</h2>
          <p className='instructions' >{active.steps}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CocktailFull;

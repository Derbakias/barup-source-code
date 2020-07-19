import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import {DataContext } from '../DataProvide';

const Stock = () => {
  const {stock, changeStock, data} = useContext(DataContext);
  
  const getPhoto = (item) => {
    for(let i=0; i < data.length; i++) {
      for(let j=0; j < data[i].ingredients.length; j++) {
        if((data[i].ingredients[j].ingredient).toLowerCase() === item.toLowerCase()) {
          return data[i].ingredients[j].photo;
        }
      }
    }
  }

  return (
    <div className='page'>
      <Navbar />
      <div className="stock-wrapper page">
        <div className='ingredients'>
          <div className="header">
            <h2>Ingredient</h2>
            <h2>Stock</h2>
          </div>
          {stock.map((item, index) => {
            return (
              <div key={index} className="ingredient-minimal">
                <div className="icon">
                  <img src={getPhoto(item.name)} alt={item.name}/>
                </div>
                <div className="info">
                  <h2 className="title">{item.name}</h2>
                </div>
                <div className="checkbox">
                  <label htmlFor="checkbox" className='checkbox-label'></label>
                  <input onChange={changeStock} type="checkbox" id="checkbox" checked={item.inStock ? true : false} data-name={item.name} />
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default Stock



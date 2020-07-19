import React, { useState, createContext, useEffect } from 'react';
import assets from './Assets';

const DataContext = createContext();

const DataProvide = (props) => {
  const [data, setData] = useState([
    {
      title: 'manhattan',
      photo: assets.ctl.manhattan,
      descripton: 'The Manhattan was the most famous cocktail in the world shortly after it was invented in New York City’s Manhattan Club, some time around 1880 (as the story goes). Over the years, the whiskey classic has dipped in and out of fashion before finding its footing as one of the cornerstones of the craft cocktail renaissance.',
      ingredients: [
        {
          ingredient: 'Bourbon Whiskey',
          measure: '50',
          photo: assets.ing.bourbonWhiskey
        },
        {
          ingredient: 'Martini Rosso',
          measure: '20',
          photo: assets.ing.martiniRosso
        },
        {
          ingredient: 'Angostura Bitters',
          measure: '',
          photo: assets.ing.angostura
        }
      ],
      steps : 'Add all the ingredients into a mixing glass with ice, and stir until well-chilled. Strain into a chilled coupe. Garnish with a brandied cherry.'
  },
    {
      title: 'el presidente',
      photo: assets.ctl.elPresidente,
      descripton: 'Named after Cuban president Gerardo Machado, the El Presidente #1 is a drier version of the original and described as “the aristocrat of cocktails.” It was created by American bartender Eddie Woelke at Jockey Club.',
      ingredients: [
        {
          ingredient: 'Gold Rum',
          measure: '60',
          photo: assets.ing.goldRum
        },
        {
          ingredient: 'Martini Rosso',
          measure: '25',
          photo: assets.ing.martiniRosso
        },
        {
          ingredient: 'Angostura Bitters',
          measure: '50',
          photo: assets.ing.angostura
        },
        {
          ingredient: 'cherry',
          measure: '1',
          photo: assets.ing.cherry
        }
      ],
      steps : 'Add all the ingredients into a mixing glass with ice, and stir thoroughly. Strain into a chilled cocktail glass. Garnish with a preserved cherry.'
  },
    {
      title: 'Old Fashioned',
      photo: assets.ctl.oldFashioned,
      descripton: 'When you get right down to it, the Bourbon Old Fashioned is little more than a slug of whiskey, seasoned and sweetened. Yet for all of its suave simplicity, the drink remains as relevant today as it was when it first captured drinkers’ hearts 200 years ago.',
      ingredients: [
        {
          ingredient: 'Bourbon Whiskey',
          measure: '60',
          photo: assets.ing.bourbonWhiskey
        },
        {
          ingredient: 'Sugar Syrup',
          measure: '5',
          photo: assets.ing.sugarSyrup
        },
        {
          ingredient: 'Angostura Bitters',
          measure: '',
          photo: assets.ing.angostura
        },
        {
          ingredient: 'Orange Peel',
          measure: '',
          photo: assets.ing.orangePeel
        }
      ],
      steps : 'Add the sugar, bitters and water into a rocks glass, and stir until sugar is nearly dissolved. Fill the glass with large ice cubes, add the bourbon, and gently stir to combine. Express the oil of an orange peel over the glass, then drop in.'
  },
])

const [stock, setStock] =  useState([]);
const [showFull, setFull] = useState(false);
const [active, setActive] = useState();

const showFullCocktail = (e) => {
  setFull(prev => (!prev));
  data.forEach(cocktail => {
    if(cocktail.title.toLowerCase() ===  e.target.textContent.toLowerCase()) {
      setActive(cocktail)
    }
  });
}

const changeStock = (e) => {
  setStock([...stock].map((prev, index) => {
    if(prev.name === e.target.dataset.name) {
      return {...prev, inStock: !prev.inStock}
    }
    return prev
  }))
}

useEffect(() => {
  let temp = [];
    for(let i= 0; i < data.length; i++) {
      for(let j = 0; j < data[i].ingredients.length; j++) {
        temp.push({name: data[i].ingredients[j].ingredient, inStock: false});
      }
    }
    
    const filteredArr = temp.reduce((acc, current) => {
      const x = acc.find(item => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    setStock(prev => (filteredArr));
}, [data])
  return (
    <DataContext.Provider value={{data, setData, showFull, setFull, active, setActive, showFullCocktail, stock, setStock, changeStock}} >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvide;
export { DataContext }

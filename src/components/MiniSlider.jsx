import React, { useState } from 'react'



import '../css/MiniSlider.css'


function MiniSlider({items}) {


  const [filteredSnacks, setFilteredSnacks] = useState(items.slice(0,10))

  const filterByType = type => {
      setFilteredSnacks(
        items.filter(item => item.type === type)
        )
    }


    const types = Array.from(
      new Set(items.map(item => item.type))
    )


    return (

      <>
        <div className="selector">
          <select onChange={e => filterByType(e.target.value)}>
              <option className='option' value="" disabled default selected>
                  Shop
              </option>

              {types.map(type => {
              return <option className='option' key={type}>{type}</option>
              })}
          </select>
        </div>

        <div className="mini-media-scroller mini-snaps-inline">

            {filteredSnacks.map((item, index) => (
              
              
              <div className="mini-media-element">
                  <img src={item.image} alt='' />
                  <p className='item-name'>{item.name}</p>
              </div>

            ))}

        </div>
      </>
    )
}

export default MiniSlider
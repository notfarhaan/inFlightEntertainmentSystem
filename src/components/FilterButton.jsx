import React from 'react'

function FilterButton() {



  return (

    <>

        <label className='toggle' for='myToggle'>
            <p>TV SHOWS</p>
            <input className='toggle__input' name ="" type="checkbox" id='myToggle'/>
            <div className="toggle__fill">
            </div>
        </label>
    
    </>


  )
}



export default FilterButton
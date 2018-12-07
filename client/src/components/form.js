import React from 'react';

const CustomForm = (props) => {
  return (
    <form id="add-book">
      <div className='field'>
        <label>Book name:</label>
        <input type="text"/>
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input type="text"/>
      </div>
      <div className='field'>
        <label>Select Author:</label>
        <select>
            {props.authors}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default CustomForm;


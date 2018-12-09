import React from 'react';

const CustomForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} id="add-book">
      <div className='field'>
        <label>Book name:</label>
        <input name="name" onChange={props.onChange} type="text"/>
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input name="genre" onChange={props.onChange} type="text"/>
      </div>
      <div className='field'>
        <label>Select Author:</label>
        <select name="authorId" onChange={props.onChange}>
        <option disabled>Select an Author.</option>
            {props.authors}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default CustomForm;


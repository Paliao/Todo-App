import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
  const keyHandler = (event) => {
    if(event.key  === 'Enter') {
      event.ctrlKey ? props.handleSearch() : props.handleAdd()
    }
  }
  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10' > 
        <input type="description" className='form-control' 
          placeholder='Add a task'
          onChange={props.handleChange}
          value={props.description}
          onKeyUp={keyHandler}/>
      </Grid>
      
      <Grid cols='12 3 2'>
        <IconButton style='default' icon='close' onClick={props.handleClear}></IconButton >
        <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton >
        <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton >
      </Grid>
    </div>
  )
}
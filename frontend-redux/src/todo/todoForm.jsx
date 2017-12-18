import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription } from './todoActions'

const todoForm =  props => {
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
          onChange={props.changeDescription}
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

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps )(todoForm)
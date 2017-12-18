import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

class todoForm extends Component {
  constructor(props) {
    super(props)

    this.keyHandler = this.keyHandler.bind(this)
    
  }

  keyHandler(event) {
    if(event.key  === 'Enter') {
      event.ctrlKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if(event.key == 'Escape') {
      props.handleClear()
    }
  }

  componentWillMount() {
    this.props.search()
  }

  render() {
    return(
      <div role='form' className='todoForm'>
      <Grid cols='12 9 10' > 
        <input type="description" className='form-control' 
          placeholder='Add a task'
          onChange={this.props.changeDescription}
          value={this.props.description}
          onKeyUp={this.keyHandler}/>
      </Grid>
      
      <Grid cols='12 3 2'>
        <IconButton style='default' icon='close' onClick={this.props.handleClear}></IconButton >
        <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}></IconButton >
        <IconButton style='info' icon='search' onClick={this.props.handleSearch}></IconButton >
      </Grid>
    </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps )(todoForm)
import React from 'react'
import { connect } from 'react-redux'

const Message = ({message}) => (
  // <div className='message'>testing</div>
  message 
    ? <div className='message'>{message}</div>
    : null
)

export default connect(
  (state) => ({message: state.message})
)(Message)
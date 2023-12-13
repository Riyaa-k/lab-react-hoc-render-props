import React, { useState } from 'react'
import HocComponents from './HocComponents'

function LikePost(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Post {props.counter}</button>
    </div>
  )
}
export default HocComponents(LikePost);
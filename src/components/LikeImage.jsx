import React from 'react'
import HocComponents from './HocComponents'

 function LikeImage(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Image {props.counter}</button>
    </div>
  )
}
export default HocComponents(LikeImage);
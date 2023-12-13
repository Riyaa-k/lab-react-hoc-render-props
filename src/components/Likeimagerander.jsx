import React from 'react'


function Likeimagerander(props) {
  return (
    <div>
      <button onClick={props.handleLikeimage}>Like Image {props.handlecounter}</button>
    </div>
  )
}

export default Likeimagerander

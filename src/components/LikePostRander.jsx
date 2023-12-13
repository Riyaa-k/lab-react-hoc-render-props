import React from 'react'


function LikePostRander(props) {
  return (
    <div>
      <button onClick={props.handleLikeimage}>Like Postt {props.handlecounter}</button>
    </div>
  )
}

export default LikePostRander
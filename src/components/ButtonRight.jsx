import * as React from 'react'
import store from '../store'
import {newImage} from '../actions/images'

// handleClick = (image) =>{
//   console.log(image.id++)
// }

export default class ButtonRight extends React.PureComponent{


handleClick1 = () => {
  this.props.handleClick()
}


  render(){
    return (
      <div className = "button-right">
        <button onClick = {this.handleClick1}>Right</button>
      </div>
    )
  }
}
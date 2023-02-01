import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        var lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    //This syntax evaluate as javascript call
    //Agar phela argument false return karega and mai toh toh dusre ko ni dekhega
    // phir alert wala code execute ni hoga
    props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
  </div>
  )
}

export default Alert
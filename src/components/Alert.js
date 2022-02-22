import React from 'react'
import './Alert.css'
const Alert = (props) => {
    const cap = (word)=>{
        let lower = word.toLowerCase(word);
        return lower.charAt(0).toUpperCase()+lower.slice(1)+"! ";
    }

    return (
        <div className='setHeight'>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{cap(props.alert.type)}</strong>{props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert
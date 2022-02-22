import React, { useState } from 'react'
import PropTypes from 'prop-types';


const TextForm = (props) => {
    const [text, setText] = useState("");
    const handelUPClick = () =>  setText(text.toUpperCase())
    const handelOnChange = event => setText(event.target.value)

    const handelReClick = () => setText("")
    return (
        <>
            <label htmlFor="myBox" className={props.color?'text-dark fs-1 mb-2':'text-light fs-1 mb-2'} >{props.heading}</label>
            <textarea className="form-control fs-4" id="myBox" rows="8" value={text} onChange={handelOnChange}></textarea>
            <div className='mt-3 d-flex justify-content-between col-md-4'>
                <button className='btn btn-primary col-md-6' onClick={handelUPClick}>Convert to Uppercase</button>
                <button className='btn btn-danger col-md-5' onClick={handelReClick}>Reset</button>
            </div>
            <h1 className={props.color?'text-dark':'text-light'}>Your text summary</h1>
            <p className={props.color?'text-dark':'text-light'}>{text.length !==0?text.match(/(\w+)/g).length:0} Words and {text.replace(/\s/g,'').length} Characters</p>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};

export default TextForm
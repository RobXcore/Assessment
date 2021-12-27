import React from 'react';
import { useState, useRef } from 'react';
import '../Stylesheets/buttons.css'
import filter_alphabetic from '../Assets/filter_alphabetic.svg';
import filter_colors from '../Assets/filter_colors.svg';
import filter_sizes from '../Assets/filter_sizes.svg';

function Buttons(props) {
    const [reverse, setReverse] = useState(true)
    const btn1 = useRef();
    const btn2 = useRef();
    const btn3 = useRef();
    const submitButton = useRef();

    const toggleAlphabetic = () =>{
        setReverse(!reverse);
        reverse? props.setAlphabetic() : props.setAlphabeticReverse();
    }
        const toggleColor = () =>{
        setReverse(!reverse);
        reverse? props.setColor() : props.setColorReverse();
    }
        const toggleSize = () =>{
        setReverse(!reverse);
        reverse? props.setSize() : props.setSizeReverse();
    }

    const handler = () => {
        if (btn1.current.checked) {
            submitButton.current.onclick = toggleAlphabetic();
        } else if (btn2.current.checked) {
            submitButton.current.onclick = toggleColor();
        } else if (btn3.current.checked) {
            submitButton.current.onclick = toggleSize();
        }
    }
    return <>

            <input id="r1" ref={btn1} name="radio" type="radio" value="blah" />
            <label htmlFor="r1"><span></span></label>
            <input id="r2" ref={btn2} name="radio" type="radio" value="blah2" />
            <label htmlFor="r2"><span></span></label>
            <input id="r3" ref={btn3} name="radio" type="radio" value="blah3" />
            <label htmlFor="r3"><span></span></label>
            <input className='button' ref={submitButton} onClick={handler} type='' />
            <BtnDesign />


    </>
}

const BtnDesign = () => {
    return (
        <div>
            <img className='f-button des alpha' src={filter_alphabetic} alt="" />
            <img className='f-button des' src={filter_colors} alt="" />
            <img className='f-button des' src={filter_sizes} alt="" />
        </div>
    )


}

export default Buttons;

import React, { useState } from 'react';

const MarkdownInput = ({getInputValue, getInputTitleValue}) => {


    const inputChange = (e) => {
        let valueToReturn = e.target.value;
        getInputValue(valueToReturn)
    }

    const inputTitleChange = (e) => {
        let valueToTitleReturn = e.target.value;
        getInputTitleValue(valueToTitleReturn)
        console.log(valueToTitleReturn)
    }

    return (
        <div className='markdown-container'>
            <input type='text' className='title-input' placeholder='Titre' onChange={inputTitleChange}/>
            <textarea type="textarea" placeholder='Tape ta note' className='textarea' onChange={inputChange} />
        </div>
    );
};

export default MarkdownInput;
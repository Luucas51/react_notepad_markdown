import React, { useState } from 'react';

const MarkdownInput = ({getInputTitleValue, getInputValue, handleLocalStorageUpdated, inputTitleValue, inputValue, ...props}) => {


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');


    const inputChange = (e) => {
        let valueToReturn = e.target.value;
        getInputValue(valueToReturn)
        setContent(valueToReturn)
    }

    const inputTitleChange = (e) => {
        let valueToTitleReturn = e.target.value;
        getInputTitleValue(valueToTitleReturn)
        setTitle(valueToTitleReturn)
    }

    const handleSave = () => {
        localStorage.setItem(title, content)
        handleLocalStorageUpdated(1)
    }


    return (
        <div className='markdown-container'>
            <input type='text' className='title-input' placeholder='Titre' onChange={inputTitleChange} value={inputTitleValue} />
            <textarea type="textarea" placeholder='Tape ta note' className='textarea' onChange={inputChange} value={inputValue}/>
            <button className='btn-save' onClick={handleSave} >Save</button>
        </div>
    );
};

export default MarkdownInput;
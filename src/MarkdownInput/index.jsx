import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const MarkdownInput = (props) => {


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');


    const inputChange = (e) => {
        let valueToReturn = e.target.value;
        props.getInputValue(valueToReturn)
        setContent(valueToReturn)
    }

    const inputTitleChange = (e) => {
        let valueToTitleReturn = e.target.value;
        props.getInputTitleValue(valueToTitleReturn)
        setTitle(valueToTitleReturn)
    }

    const handleSave = () => {
        localStorage.setItem(title, content)
        localStorage.setItem(content, title)
        let getInfoContent = localStorage.getItem(title)
        let getInfoTitle = localStorage.getItem(content)
        console.log(getInfoTitle)
        console.log(getInfoContent)
    }

    return (
        <div className='markdown-container'>
            <input type='text' className='title-input' placeholder='Titre' onChange={inputTitleChange}/>
            <textarea type="textarea" placeholder='Tape ta note' className='textarea' onChange={inputChange} />
            <button className='btn-save' onClick={handleSave}>Save</button>
        </div>
    );
};

export default MarkdownInput;
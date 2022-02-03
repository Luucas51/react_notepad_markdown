import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import './styles/index.scss'

const App = () => {

    const [inputValue, setInputValue] = useState('')

    const getInputValue = (input) =>{
        setInputValue(input)
    }
    useEffect(()=>{
        console.log(inputValue)
    }, [inputValue])


    const [inputTitleValue, setInputTitleValue] = useState('');

    const getInputTitleValue = (input) => {
        setInputTitleValue(input)
    };
    useEffect(() =>{
        console.log(inputTitleValue)
    }, [inputTitleValue])

    return (
        <div className='main-container'>
            <NoteDisplay inputValue={inputValue} inputTitleValue={inputTitleValue}/>
            <MarkdownInput getInputValue={getInputValue} getInputTitleValue={getInputTitleValue}/>
        </div>
    );
};

reactDom.render(<App />, document.getElementById('root'));
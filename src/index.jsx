import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import './styles/index.scss'
import ViewEachNote from './ViewEachNote';

const App = () => {

    const [inputValue, setInputValue] = useState('')

    const getInputValue = (input) =>{
        setInputValue(input)
    }
    useEffect(()=>{

    }, [inputValue])


    const [inputTitleValue, setInputTitleValue] = useState('');

    const getInputTitleValue = (input) => {
        setInputTitleValue(input)
    };
    useEffect(() =>{
        // console.log(inputTitleValue)
    }, [inputTitleValue])

    return (
        <div className='main-container'>
            <div className="col-left">
                
                <ViewEachNote inputTitleValue={inputTitleValue} inputValue={inputValue}/>
            </div>
            <div className="col-right">
                <NoteDisplay inputValue={inputValue} inputTitleValue={inputTitleValue}/>
                <MarkdownInput getInputValue={getInputValue} getInputTitleValue={getInputTitleValue}/>
            </div>
        </div>
    );
};

reactDom.render(<App />, document.getElementById('root'));
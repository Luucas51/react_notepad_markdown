import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import './styles/index.scss'
import ViewEachNote from './components/ViewEachNote';

const App = () => {


    /////////////////////////////////////////////////////////////////////


    const [localStorageUpdated, setLocalStorageUpdated] = useState('');
    const handleLocalStorageUpdated = (callBackValue) => {
        setLocalStorageUpdated(localStorageUpdated + callBackValue)
    }



    /////////////////////////////////////////////////////////////////////

    const [localStorageRemove, setLocalStorageRemove] = useState('');
    const handleLocalStorageRemove = (callBackValue)=> {
        setLocalStorageRemove(localStorageRemove + callBackValue)
    }


    /////////////////////////////////////////////////////////////////////



    const [inputValue, setInputValue] = useState('')
    const getInputValue = (input) =>{
        setInputValue(input)
    }
    useEffect(()=>{

    }, [inputValue])


    /////////////////////////////////////////////////////////////////////


    const [inputTitleValue, setInputTitleValue] = useState('');
    const getInputTitleValue = (input) => {
        setInputTitleValue(input)
    };
    useEffect(() =>{
        // console.log(inputTitleValue)
    }, [inputTitleValue])


    ///////////////////////////////////////////////////////////////////


    const handleNewNote = () => {
        getInputTitleValue('');
        getInputValue('');
    }




    return (
        <div className='main-container'>
            <div className="col-left">
                <div className='view-each-note-btn'>
                    <button className="btn-new-note" onClick={handleNewNote}>Nouvelle note</button>
                </div>
                <ViewEachNote inputTitleValue={inputTitleValue} inputValue={inputValue} handleLocalStorageRemove={handleLocalStorageRemove}/>
            </div>
            <div className="col-right">
                <NoteDisplay  inputValue={inputValue} inputTitleValue={inputTitleValue}/>
                
                <MarkdownInput inputTitleValue={inputTitleValue} inputValue={inputValue} getInputValue={getInputValue} getInputTitleValue={getInputTitleValue} handleLocalStorageUpdated={handleLocalStorageUpdated}/>
            </div>
        </div>
    );
};

reactDom.render(<App />, document.getElementById('root'));
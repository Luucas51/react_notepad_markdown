import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = (props) => {

    const converter = new Showdown.Converter(props);
    
    const content = converter.makeHtml(props.inputValue)

    const contentTitle = converter.makeHtml(props.inputTitleValue)

    const createMarkDown = {__html: content}
    const createTitleMarkDown = {__html: contentTitle}
 

    return (
        <div className='note-display-container'>
            <h1 dangerouslySetInnerHTML={createTitleMarkDown}></h1>
            <div dangerouslySetInnerHTML={createMarkDown}></div> 
        </div>
    );
};

export default NoteDisplay;
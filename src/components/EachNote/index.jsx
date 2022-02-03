import React from 'react';

const EachNote = ({key, entryTitle, entryBody, handleLocalStorageRemove}) => {


    const removeNote = () => {
        localStorage.removeItem(entryTitle)
        handleLocalStorageRemove(1)
    }


    return (
        <div className='card-note'>
            <div className="title-each-note">{entryTitle}</div>
            <div className="content-each-note">{entryBody.split(' ').slice(0, 15).join('')}</div>
            <button className='remove-note-btn' onClick={removeNote}>Supprimer cette note</button>
        </div>
    );
};

export default EachNote;
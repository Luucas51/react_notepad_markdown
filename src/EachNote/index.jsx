import React from 'react';

const EachNote = ({key, entryTitle, entryBody}) => {


    console.log(entryTitle)
    console.log(entryBody)


    const removeNote = () => {
        localStorage.removeItem(entryTitle)
    }

    return (
        <div className='card-note'>
            <div className="title-each-note">{entryTitle}</div>
            <div className="content-each-note">{entryBody.split(' ').slice(0, 15).join('')}</div>
            <button onClick={removeNote}>Supprimer cette note</button>
        </div>
    );
};

export default EachNote; // split slice join
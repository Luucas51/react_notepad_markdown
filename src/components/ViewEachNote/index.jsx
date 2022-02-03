import React from 'react';
import EachNote from '../EachNote';

const ViewEachNote = ({inputValue, inputTitleValue, handleLocalStorageRemove}) => {


    const EntriesToDisplay = [];
    for (let i = 0; i < localStorage.length; i++) {
      EntriesToDisplay.push({key: localStorage.key(i), value: localStorage.getItem(localStorage.key(i))});
    }



    return (
        <>
            <div className='view-each-note-btn'>
            </div>
            <div className="each-note">
                {EntriesToDisplay.map((content, index) => {
                        return <EachNote key={index} entryTitle={content.key} entryBody={content.value} handleLocalStorageRemove={handleLocalStorageRemove} />
                })}
            </div>
        </>
    );
};

export default ViewEachNote;
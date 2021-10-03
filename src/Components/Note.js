import React from 'react';
import {MdDeleteForever} from "react-icons/md";

const Note = ({id,text,date , handleDeleteNote}) => {
    return (
        <div className="note" id={id}>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={()=> handleDeleteNote(id)} className="delete" size="1.7rem" />
            </div>
        </div>
    );
}

export default Note

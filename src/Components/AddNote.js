import React,{useState} from 'react'

const AddNote = ({ handleAddNote }) => {
    const[notetext,setNoteText]=useState('');
    const tailleText =200;
    const handleChange = (event) =>{
        if(tailleText - event.target.value.length >=0){
            setNoteText(event.target.value);
        }
           
    };
    const handleSaveClick =()=>{
        if(notetext.trim().length>0)
        {
            handleAddNote(notetext);
            setNoteText("");
        }
        
    };
 return(
        <div className="note new">
            <textarea rows='8' cols='10' placeholder="ècrivez quelque chose ....."
            value={notetext}
            onChange={handleChange}
            >

            </textarea>
            <div className="note-footer">
                    <small>{tailleText - notetext.length}  Remaining</small>
                    <button className="save" onClick={handleSaveClick}>Ajouter</button>
            </div>
        </div>
    )
}

export default AddNote

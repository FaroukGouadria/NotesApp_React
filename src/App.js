import React, {useState,useEffect} from "react";
import {nanoid}from "nanoid";
import NotesList from "./Components/NotesList"; 
import Serach from "./Components/Serach";
import Header from "./Components/Header";
function App() {
  const [notes , setNotes]=useState([]);

  const [searchText,setSearchText]=useState('');

  const[DarkMode,setDarkMode]=useState(false);

useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
  }
}, []);
  

  useEffect(() => {
      localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  }, [notes]);

 

  const addNote=(text)=>{
    const date=new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString(),
    }  
    const newNotes=[...notes,newNote];
    setNotes(newNotes) 
  };
const deleteNote = (id)=>{
 const newNotes =  notes.filter((note)=> note.id !== id);
 setNotes(newNotes);
}
  return (  
    <div className={`${DarkMode && 'dark-mode'}`}>
        <div className="container" >
     <Header handleToggleDarkMode={setDarkMode}  />
     <Serach handleSearchNote={setSearchText} /> 
     <NotesList
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))
      } 
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote}/>
     </div>
    </div>
   
  );
}

export default App;

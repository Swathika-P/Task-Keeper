import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // State to store the list of notes
  const [notes, setNotes] = useState([]);

  // Function to add a new note to the list
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  // Function to delete a note from the list
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {/* Render the Header component */}
      <Header />

      {/* Render the CreateArea component for adding new notes */}
      <CreateArea onAdd={addNote} />

      {/* Render each Note component for displaying notes */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default App;

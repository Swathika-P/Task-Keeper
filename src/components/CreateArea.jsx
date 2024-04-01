import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  // State to track if the note area is expanded
  const [isExpanded, setExpanded] = useState(false);

  // State to store the note's title and content
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Function to handle changes in the input fields
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  // Function to submit a new note
  function submitNote(event) {
    // Call the onAdd function passed from the parent component
    props.onAdd(note);

    // Clear the note's title and content
    setNote({
      title: "",
      content: "",
    });

    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
  }

  // Function to expand the note area when clicked
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* Render the title input field when the area is expanded */}
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        {/* Render the textarea for the note's content */}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1} // Adjust the number of rows based on the expansion state
        />
        {/* Render the submit button */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

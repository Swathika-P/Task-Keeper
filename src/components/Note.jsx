import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

// Note component to display a single note
function Note(props) {
  // Function to handle the click event on the delete button
  function handleClick() {
    // Call the onDelete function passed from the parent component with the note's id
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      {/* Display the note's title */}
      <h1>{props.title}</h1>

      {/* Display the note's content */}
      <p>{props.content}</p>

      {/* Button to delete the note */}
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;

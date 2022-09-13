import React from "react";

const Createnote = ({ updateText, saveNote, inputText }) => {
  const maxLength = 100;
  const counter = maxLength - inputText.length;

  return (
    <div className='note'>
      <textarea
        onChange={updateText}
        maxLength={100}
        placeholder='Type here...'
        value={inputText}
      ></textarea>
      <div className='note-footer'>
        <span>{counter}</span>
        <button onClick={saveNote}>Save note</button>
      </div>
    </div>
  );
};

export default Createnote;

import { useState } from "react";

import React from 'react'
import { v4 as uuid } from "uuid";


const Notes = () => {

const [notes, setNotes] = useState([]);
const [text, setText] = useState('')

const updateText = (e) => {
  setText(e.target.value)
}

const saveNote = () => {
  setNotes((preState) => [
    ...preState, {
      key: uuid(),
      id: uuid(),
      text: text,
    }
  ])
  setText('')
}

const deleteNote = (id) => {
  const filteredNotes = notes.filter((note) => {
    return note.id !== id
  });
  setNotes(filteredNotes)
}

  return (
    <div className="Notes">
      {notes.map((note) => (
        <Note deleteNote= {deleteNote} id={note.id} text={note.text} />
      ))}
      <Createnote updateText={updateText} saveNote={saveNote} inputText={text} />
    </div>
  )
}

export default Notes

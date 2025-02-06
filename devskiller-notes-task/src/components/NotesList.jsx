import React from 'react'

export const NotesList = ({selected, onSelect, ...props}) => {
    const { notes = [] } = props
    return <div className="list-group">
        { notes.map (note => (
          <div key={note.id} data-testid="note-item" className={`list-group-item ${note.id === selected?.id ? "active" : ""}`} onClick={() => onSelect(note)}>Active note example</div>
        )) }
    </div>
}

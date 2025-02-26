import React, { useState } from 'react'

export const NoteForm = ({onSubmit, onChange, note}) => {
    // const { note = { title: '', text: '' } } = props
    const [title, setTitle] = useState(note.title)
    const [text, setText] = useState(note.text)

    return <form onSubmit={() => onSubmit({ title, text })}>
        <div className="form-group">
            <label>Title:</label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                data-testid="input-title"
                name="title"
            />
        </div>
        <div className="form-group">
            <label>Note:</label>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-control"
                data-testid="input-text"
                name="text"
            />
        </div>
        <div className="form-group">
            <input
                type="button"
                data-testid="cancel-note"
                className="btn btn-default pull-right"
                value="Cancel"
            />
            <input
                type="submit"
                data-testid="save-note"
                className="btn btn-default pull-right"
                value="Save"
            />
        </div>
    </form>
}

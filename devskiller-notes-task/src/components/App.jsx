import React, { useState, useEffect } from 'react'

import { NotesList } from './NotesList'
import { NoteForm } from './NoteForm'

export const App = (props) => {
    const { service } = props
    const [notes, setNotes] = useState([])
    const [selected, setSelected] = useState(null)


    // (!) Get notes from service
    useEffect(async () => setNotes(await service.getNotes()), [service])

    // Select new empty note
    function newNote(){

    }

    // Set note as selected
    function onSelect(note){

    }

    // Save note to service
    function onSubmit(note){
        const i = notes.findIndex(x => x.id === note.id)
        if (found) {
            service.update(notes => {
                const result = notes
                result[i] = note
                return result
            })
        }
        else {
            
        }
    }

    // Unselect note
    function onCancel(){
        setSelected(null)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>React notes</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <NotesList notes={[]} selected={selected} onSelect={setSelected} />
                </div>
                <div className="col-md-8">
                    <NoteForm onSubmit={onSubmit} />
                    <div><button id="new-note">New Note</button></div>
                </div>
            </div>
        </div>
    )
}

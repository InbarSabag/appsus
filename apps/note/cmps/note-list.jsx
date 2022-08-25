import { NotePreview } from '../cmps/note-preview.jsx'

export function NoteList({notes}) {

return <section className="note">
    <ul className="note-list">
    {
    notes.map(note =>
        <li className="note-preview" key={note.id} style={note.style}>
            <NotePreview note = {note}/>
        </li>)}
    </ul>
    </section>
}

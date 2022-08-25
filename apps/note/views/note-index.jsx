import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'
import { LoadingSpinner } from "../../../cmps/spinner.jsx";


export class NoteIndex extends React.Component {

    state = {
        notes: []
        }


    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        console.log('loadNotes');
        noteService.query()
            .then(notes => this.setState({ notes }))
    }

    render() {
        const { notes } = this.state
        if (!notes) return <LoadingSpinner/>
        return <section className="note-app">
            <h1>Note App</h1>
                <NoteList notes = {notes}/>
        </section>
    }
}

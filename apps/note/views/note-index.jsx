import { NotesFilter } from '../cmps/note-filter.jsx'
import { NoteCompose } from '../cmps/note-compose.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'
import { LoadingSpinner } from '../../../cmps/spinner.jsx'
import { NoteEdit } from '../cmps/note-edit.jsx'

const { Route, Switch } = ReactRouterDOM

export class NoteIndex extends React.Component {

    state = {
        notes: [],
        filterBy: null
    }


    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then(notes => this.setState({ notes }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadNotes)
        // showSuccessMsg('Filtered Notes')
    }


    render() {
        const { notes } = this.state
        if (!notes) return <LoadingSpinner />
        return <section className="note-app">
            <NoteCompose />
            <Route path="/note/edit/:noteId" component={NoteEdit} />
            <NotesFilter onSetFilter={this.onSetFilter} />
            <NoteList notes={notes} />
        </section>
    }
}



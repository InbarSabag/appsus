import { NoteEdit } from './note-edit.jsx'
import { noteService } from '../services/note.service.js'
const {withRouter} = ReactRouterDOM

export class _NoteCompose extends React.Component {

    state = {
        title: ''
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    createNote(type) {
        console.log('note type - ', type, 'note title -',this.state.title)
        noteService.createNote(type, this.state.title)
            .then((id) => {
                console.log(id,this)
                this.props.push.history(`/note/edit/:${id}`)
            })
    }

    handleChange = ({ target }) => {
        this.setState({ title: target.value })
    }

    onCreateNote = (type, ev) => {
        ev.preventDefault()
        this.createNote(type)
    }

    render() {
        return <div className="new-note">
            <form className="note-form">
                Add a New Note:

                <input type="text" placeholder="New Note Title" onChange={this.handleChange} />
                <button
                    className="fa fa-note"
                    onClick={(ev) => this.onCreateNote('note-txt', ev)}>
                    Text
                </button>
                <button
                    className="fa fa-image"
                    onClick={(ev) => this.onCreateNote('note-img', ev)}>
                </button>
                <button
                    className="fa fa-solid fa-youtube"
                    onClick={(ev) => this.onCreateNote('note-video', ev)}>
                </button>
                {/* <button className="fa-todo-list" onClick={(ev) =>this.onCreateNote('note-todos',ev)}>To-Do list</button> */}
            </form>
        </div>
    }
}


export const NoteCompose = withRouter (_NoteCompose)

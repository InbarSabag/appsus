import { NoteEdit } from './note-edit.jsx'

const { Link } = ReactRouterDOM

export class NoteCompose extends React.Component {

    state = {
        title: ''
    }

    createNote(type) {
        console.log('🚀 ~ NoteCompose ~ createNote ~ type', type)

        return
        <NoteEdit title={this.state.title} type={type} />
    }

    handleChange = ({ target }) => {
        this.setState({ title: target.value })
    }

    onCreateNote = (type, ev) => {
        console.log('🚀 ~ NoteCompose ~ type', type)
        ev.preventDefault()
        this.createNote(type)
    }

    render() {
        return <div className="new-note">
            <form className="note-form">
                Add a New Note:

                <input
                    type="text"
                    placeholder="New Note Title"
                    onChange={this.handleChange}
                />

                <button
                    className="fa fa-note"
                    onClick={(ev) => this.onCreateNote('note-txt', ev)}>Text
                </button>

                <button className="fa fa-image"
                    onClick={(ev) => this.onCreateNote('note-img', ev)}>

                </button>

                <Link className="fa fa-solid fa-youtube" to="/note/edit">

                </Link>
                {/* <button className="fa-todo-list" onClick={(ev) =>this.onCreateNote('note-todos',ev)}>To-Do list</button> */}
            </form>
        </div>
    }
}


import { noteService } from '../services/note.service.js'

export class NoteEdit extends React.Component {

    state = {
        note: {
            id: '',
            isPinned: false,
            type: '',
            title: '',
            info: '',
            style: ''
        }
    }

    componentDidMount() {
        this.loadNote()
    }

    loadNote = () => {
        const { noteId } = this.props.match.params
        if (!noteId) return
        noteService.getById(noteId)
            .then((note) => this.setState({ note: note }))
    }

    onSaveCar = (ev) => {
        ev.preventDefault()
        noteService.save(this.state.note)
            .then(() => {
                this.props.history.push('/note')
            })
    }

    handleInfoChange = ({ target }) => {
        console.log('🚀 ~ NoteEdit ~ target', target)
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            note: { ...prevState.note, info: { [field]: value } }
        }))
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            note: {
                ...prevState.note,
                [field]: value
            }
        }), () => { })
    }


    DynamicCmp = () => {
        switch (this.state.note.type) {
            case 'note-txt':
                return <NoteTxt {...state} />
            case 'note-img':
                return <NoteImg {...state} />
            case 'note-video':
                return <NoteVideo {...state} />
            // case 'note-todos':
            //     return <NoteTodos {...this.state}/>
        }
    }


    render() {
        const { note } = this.state
        return <section className="edit-note">
            <h2>Edit Note</h2>
            <div className="type select">
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    placeholder="Note Title"
                    onChange={this.handleChange} />
                <button
                    className="fa fa-note"
                    name="type"
                    value="note-txt"
                    onClick={this.handleChange}>
                    Txt
                </button>
                <button
                    className="fa fa-image"
                    name="type"
                    value="note-img"
                    onClick={this.handleChange}>
                </button>
                <button
                    className="fa fa-solid fa-youtube"
                    name="type"
                    value="note-video"
                    onClick={this.handleChange}>
                </button>
                {/* <button className="fa-todo-list"
                onClick={this.onSelectType('note-todos')}>
                To-Do list
                </button> */}
            </div>
            {/* <div className="note-form">
                <this.DynamicCmp />
            </div> */}
        </section>
    }
}



export class NoteTxt extends React.Component {
    render() {
        console.log('🚀 ~ NoteTxt ~ render ~ info', this.props)
        // const { info } = this.state.note
        // let txt = info.txt || ''
        // return <form className="txt-form" onSubmit={this.onSaveNote}>
        //     <textarea
        //         name="txt"
        //         value={txt}
        //         placeholder="Enter your information here"
        //         rows="5"
        //         cols="50"
        //         onChange={this.handleInfoChange}>
        //         {txt}
        //     </textarea>
        //     <button className="btn-save">Save</button>
        // </form>
    }
}

export class NoteImg extends React.Component {
    render() {
        const { info } = this.state.note
        let url = info.url || ''
        return <form className="img-form" onSubmit={this.onSaveNote}>
            <input
                type="url"
                name="url"
                value={url}
                placeholder="Enter image URL"
                onChange={this.handleInfoChange} />
            <button className="btn-save">Save</button>
        </form>
    }
}

export class NoteVideo extends React.Component {
    render() {
        const { info } = this.state.note
        let url = info.url || ''
        return <form className="video-form" onSubmit={this.onSaveNote}>
            <input
                type="url"
                name="url"
                value={url}
                placeholder="Enter video URL"
                onChange={this.handleInfoChange} />
            <button className="btn-save">Save</button>
        </form>
    }
}

// export class NoteTodos extends React.Component {
//     render() {

//     }

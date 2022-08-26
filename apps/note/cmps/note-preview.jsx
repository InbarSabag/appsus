
const { Link } = ReactRouterDOM

// export function NotePreview ({note}) {
export class NotePreview extends React.Component {
    // state={
    //     noteType: this.props.note.type
    // }

    // componentDidMount(){
    //     console.log(this)
    // }

    DynamicCmp = (props) => {
        switch (props.type) {
            case 'note-txt':
                return <NoteTxt{...props} />
            case 'note-img':
                return <NoteImg{...props} />
            case 'note-todos':
                return <NoteTodos{...props} />
            case 'note-video':
                return <NoteVideo{...props} />
        }
    }

    render() {
        const { note } = this.props
        return <article >
            <Link to={"/note/" + note.id}>
                <div className="note-head">{note.title}</div>
                <div className="note-content">
                    <this.DynamicCmp
                        info={note.info}
                        type={note.type}
                    />
                </div>
                <div className="note-bottom">Edit</div>
            </Link>
        </article >

    }
}

export class NoteTxt extends React.Component {
    render() {
        const { info } = this.props
        return <p>{info.txt}</p>
    }
}

export class NoteImg extends React.Component {
    render() {
        const { info } = this.props
        return <img src={info.url} />
    }
}

export class NoteVideo extends React.Component {
    render() {
        const { info } = this.props
        return <iframe
            width="560"
            height="315"
            src={info.url + "autoplay=1&mute=1"} >
        </iframe>
    }
}

export class NoteTodos extends React.Component {
    render() {
        const { todos } = this.props.info
        return <ul>
            {todos.map(todo =>
                <li key={todo.txt}>{todo.txt}</li>
            )}
        </ul>
    }
}
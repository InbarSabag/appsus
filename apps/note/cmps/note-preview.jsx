
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
        console.log('🚀 ~ NotePreview ~ render ~ note', note)
        return <article >
            <Link to={"/notes/" + note.id}>
                <h2>{note.title}</h2>
                <this.DynamicCmp
                    info={note.info}
                    type={note.type}
                />
            </Link>
        </article >

    }
}

export class NoteTxt extends React.Component {
    render() {
        const { info } = this.props
        console.log("note Txt" + info.txt)
        return <p>{info.txt}</p>
    }
}

export class NoteImg extends React.Component {
    render() {
        const { info } = this.props
        console.log("note Img" + info.url)
        return <img src={info.url} />
    }
}

export class NoteVideo extends React.Component {
    render() {
        const { info } = this.props
        console.log("note video" + info.url)
        return <iframe
            width="560"
            height="315"
            src={info.url} >
        </iframe>
    }
}

export class NoteTodos extends React.Component {
    render() {
        const { todos } = this.props.info
        console.log("note TODO" + todos)
        return <ul>
            {todos.map(todo =>
                <li key={todo.txt}>{todo.txt}</li>
            )}
        </ul>
    }
}
// someInputRef = React.createRef()
// // In render method:
// <input ref={this.someInputRef} type="text" />
// // In componentDidMount:

export class MailCompose extends React.Component {
    state = {

    }
    onGoBack = () => {
        this.props.history.push('/mail/index')
    }

    // componentDidMount() {
    //     this.someInputRef.current.focus()
    // }
    render() {
        return <form onSubmit={event => preventDefault(event)}
            className="flex column mail-compose">
            <div className="flex space-between compose-header">
                <span>New Message</span>
                <span className="btn"
                    onClick={console.log('close')}>X</span>
            </div>
            <input
                placeholder="To"
                name="compose-input"
                type="text" />
            <input
                placeholder="Subject"
                name="compose-input"
                type="text" />
            <input
                name="compose-body"
                type="textarea" />

            <div className="flex from-btns-container">
                <div className="btn btn-send">
                    Send
                </div>
            </div>
        </form>
    }
}

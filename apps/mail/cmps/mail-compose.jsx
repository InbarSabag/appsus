export function MailCompose() {
    return <section className="flex column mail-compose">
        <input type="text" />
        <p>Lorem ipsum dolor sit amet.</p>
    </section>
}

// someInputRef = React.createRef()
// // In render method:
// <input ref={this.someInputRef} type="text" />
// // In componentDidMount:
// this.someInputRef.current.focus()
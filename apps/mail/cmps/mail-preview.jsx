const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    // state = {
    //     status: null,
    //     filterBy: null,
    // }
    const readClass = mail.isRead ? 'read' : 'unread'

    return <section className={`${readClass} mail-preview flex space-between`} >
        <div>
            <span className='btns-checkbox'>
                <input
                    type="checkbox"
                    name="selected-mail"
                    id="selected-mail"
                />
            </span>
            <span> star </span>
            <span>{mail.from}</span>
        </div>

        <div>
            <Link to={"/mail/" + mail.id}>
                <span>{mail.subject}</span>
                <span className='mail-preview-body'> - {mail.body}</span>
            </Link>
        </div>
        <div>{showTime(mail.sentAt)}</div>
    </section>
}

function showTime(sentAt) {
    const diff = Date.now() - sentAt;
    const day = 24 * 60 * 60 * 1000
    const date = new Date(sentAt)
    if (diff < day) return `${date.getHours()}:${date.getMinutes()}`
    else return `${date.getDate()} ${date.toLocaleString('en', { month: 'short' })}`
}


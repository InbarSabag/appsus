const { Link } = ReactRouterDOM

export function MailPreview({mail}) {
    const { id, from, isRead, subject, body, sentAt } = mail
    const readClass = isRead ? 'read' : 'unread'

    return <section className={`${readClass} mail-preview`} >
        <Link to={"/mail/" + id}>
            <div>
                <span className='btns-checkbox'>
                    <input
                        type="checkbox"
                        name="selected-mail"
                        id="selected-mail"
                    />
                </span>
                <span> star </span>
                <span>{from}</span>

            </div>
            <div>
                <span>{subject}</span>
                <span className='mail-preview-body'> - {body}</span>
            </div>
            <div>{showTime(sentAt)}</div>
        </Link>
    </section>
}

function showTime(sentAt) {
    const diff = Date.now() - sentAt;
    const day = 24 * 60 * 60 * 1000
    const date = new Date(sentAt)
    if (diff < day) return `${date.getHours()}:${date.getMinutes()}`
    else return `${date.getDate()} ${date.toLocaleString('en', { month: 'short' })}`
}
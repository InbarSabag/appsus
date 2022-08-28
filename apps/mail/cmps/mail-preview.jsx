import { Rate } from '../../../cmps/rate.jsx'
const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    const readClass = mail.isRead ? 'read' : 'unread'
    
    return <section 
        className={`${readClass} flex space-between main-layout mail-preview`} >
        <div className="flex space-between"
        >
            <input className='btns-checkbox'
                type="checkbox"
                name="selected-mail"
                id="selected-mail"
            />

            <span> <Rate
                // onSetStar={onSetStar}
                mail={mail} />
            </span>

            <span>{mail.from}</span>
        </div>

        <div>
            <Link
                to={"/mail/inbox/" + mail.id}
                className="mail-content-container"
            >
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


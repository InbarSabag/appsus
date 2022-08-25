import { LongText } from '../../../cmps/Long-text.jsx'

export function MailPreview({ from, isRead, subject, body, sentAt }) {
    const readClass = isRead ? 'read' : 'unread'
    return <tr className={`${readClass} mail-preview`} >
        <td>
            <span className='btns-checkbox'>
                <input
                    type="checkbox"
                    name=""
                    id=""
                />
            </span>
            <span> star </span>
            <span>{from}</span>
        </td>
        <td>
            <span>{subject} </span>
            <span className='mail-preview-body'>- {body}</span>
        </td>
        <td>{showTime(sentAt)}</td>
    </tr>
}
function _handleLongTxt(mailBody) {
    return <LongText
        txt={mailBody}
        isLongTxtShown={mailBody.length > 10 ? true : false}
    />
}

function showTime(sentAt) {
    const diff = Date.now() - sentAt;
    const day = 24 * 60 * 60 * 1000
    const date = new Date(sentAt)
    if (diff < day) return `${date.getHours()}:${date.getMinutes()}`
    else return `${date.getDate()} ${date.toLocaleString('en', { month: 'short' })}`
}
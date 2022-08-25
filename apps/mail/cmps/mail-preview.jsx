import { LongText } from '../../../cmps/Long-text.jsx'

export function MailPreview({ from, isRead, subject, body, sentAt }) {
    const readClass = isRead ? 'read' : 'unread'
    return <tr className={`${readClass} mail-preview`} >
        <td>
            <span>
                <input
                    type="checkbox"
                    name=""
                    id=""
                />
            </span>
            <span> star </span>
        </td>
        <td>{from}</td>
        <td>{`${subject} - ${body}`}</td>
        <td>{showTime(sentAt)}</td>
    </tr>
}
function _handleLongTxt(mailBody) {
    console.log('mailBody.length > 10:', mailBody.length > 10)
    return <LongText
        txt={mailBody}
        isLongTxtShown={mailBody.length > 10 ? true : false}
        txtLimit={5}
    />
}

function showTime(sentAt) {
    const diff = Date.now() - sentAt;
    const day = 24 * 60 * 60 * 1000
    const date = new Date(sentAt)
    if (diff < day) return `${date.getHours()}:${date.getMinutes()}`
    else return `${date.getDate()} ${date.toLocaleString('en', { month: 'short' })}`
}
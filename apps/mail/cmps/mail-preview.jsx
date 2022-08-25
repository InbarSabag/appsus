export function MailPreview({ isRead, subject, body, sentAt }) {
    console.log('isRead:', isRead)
    const readClass = isRead ? 'read' : 'unread'
    return <tr className={`${readClass} mail-preview`} >
        <td><input type="checkbox" name="" id="" /></td>
        <td>{subject}</td>
        <td>{body}</td>
        <td>{showTime(sentAt)}</td>
    </tr>
}

function showTime(sentAt) {
    const diff = Date.now() - sentAt;
    const day = 24 * 60 * 60 * 1000
    const date = new Date(sentAt)
    if (diff < day) return `${date.getHours()}:${date.getMinutes()}`
    else return `${date.getDate()} ${date.toLocaleString('en', { month: 'short' })}`
}
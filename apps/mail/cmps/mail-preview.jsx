export function MailPreview({ isRead, subject, body, sentAt }) {
    const readClass = isRead ? 'read' : ''
    return ( <tr className="mail-preview">
            <td><input type="checkbox" name="" id="" /></td>
            <td>{subject}</td>
            <td>{body}</td>
            <td>{Date(sentAt)}</td>
        </tr>
    )
}
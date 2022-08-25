import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails }) {
    return <tbody className="mail-list">
        {mails.map(mail => <MailPreview
            key={mail.id}
            from={mail.from}
            isRead={mail.isRead}
            subject={mail.subject}
            body={mail.body}
            sentAt={mail.sentAt}
        />)}
    </tbody>
}
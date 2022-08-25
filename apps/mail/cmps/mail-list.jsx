import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails }) {
    console.log('mails[1]:', mails[1])
    return <tbody className="mail-list">
        {mails.map(mail => <MailPreview
            key={mail.id}
            isRead={mail.isRead}
            subject={mail.subject}
            body={mail.body}
            sentAt={mail.sentAt}
        />)}
    </tbody>
}
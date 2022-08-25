import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails }) {
    return <section className="mail-list">
        {mails.map(mail => <MailPreview
            mail={mail}
            key={mail.id}
        />)}
    </section>
}
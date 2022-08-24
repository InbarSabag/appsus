import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails }) {
    return <section className="mail-list">
        <div className="mail-container">
            {/* <pre>{JSON.stringify(mails, null, 2)}</pre> */}

            {mails.map(mail => <MailPreview
                key={mail.id}
                isReadClass={mail.isRead ? '' : 'unread-mail'}
                subject={mail.subject}
                body={mail.body}

            />)}
        </div>
    </section >
}
export function MailPreview({ isReadClass, subject, body, sentAt }) {
    return <section className="mail-preview">
        <div>{isReadClass}</div>
        |
        <div>{subject}</div>
        |
        <div>{body}</div>
        |
        <div>{Date(sentAt)}</div>
    </section>
}

function handleDate() {
    
}
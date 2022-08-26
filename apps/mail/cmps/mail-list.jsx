import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails, onRemoveMail }) {
    return <section className="mail-list column">
        {mails.map(mail => <MailPreview
            mail={mail}
            key={mail.id}
        />)}
    </section>
}

// export function MailList({ mails, onRemoveMail }) {
//     return <ul>
//         <li className="mail-list column">
//             {mails.map(mail => <MailPreview
//                 mail={mail}
//                 key={mail.id}
//             />)}
//         </li>
//     </ul>
// }
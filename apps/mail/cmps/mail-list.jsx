import { MailPreview } from './mail-preview.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'

export function MailList({ mails, onRemoveMail }) {
    return <ul>
        <li>
            {<MailFilter
                // filterBy={filterBy}
                // onSetFilter={onSetFilter}
            />}
        </li>

        <li className="mail-list column">
            {mails.map(mail => <MailPreview
                mail={mail}
                key={mail.id}
            />)}
        </li>
    </ul>
}
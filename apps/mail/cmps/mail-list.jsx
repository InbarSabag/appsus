import { MailPreview } from './mail-preview.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'

export function MailList({ mails, filterBy, onSetFilter, currFolder, onSetStar }) {
    return <section>
        {<MailFilter
            filterBy={filterBy}
            onSetFilter={onSetFilter}
        />}

        {mails.map(mail => <MailPreview
            folder={currFolder}
            onSetStar={onSetStar}
            mail={mail}
            key={mail.id}
        />)}
    </section>
}
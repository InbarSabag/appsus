import { MailPreview } from './mail-preview.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'

export function MailList({ mails, filterBy, onSetFilter, currFolder }) {
    return <section>
        {<MailFilter
            filterBy={filterBy}
            onSetFilter={onSetFilter}
        />}

        {mails.map(mail => <MailPreview
            folder={currFolder}
            mail={mail}
            key={mail.id}
        />)}
    </section>
}


// import { MailPreview } from './mail-preview.jsx'
// import { MailFilter } from '../cmps/mail-filter.jsx'
// import React from 'react'

// export function MailList({ mails, filterBy, onSetFilter }) {
//     const { status } = filterBy
//     console.log('status:', status)
//     return <React.Fragment>
//         {/* <li>
//             {<MailFilter
//                 filterBy={filterBy}
//                 onSetFilter={onSetFilter}
//             />}
//         </li> */}

//         <table>
//             {mails.map(mail => <MailPreview
//                 mail={mail}
//                 status={status}
//                 key={mail.id}
//                 onRemoveEmail={onRemoveEmail}
//                 setStar={setStar}
//                 onToggleIsRead={onToggleIsRead}
//             />)}
//         </table>

//     </React.Fragment>
// }
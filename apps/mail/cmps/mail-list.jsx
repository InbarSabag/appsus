import { MailPreview } from './mail-preview.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'

export function MailList({ mails, filterBy,onSetFilter }) {
    return <ul>
        <li>
            {<MailFilter
                filterBy={filterBy}
                onSetFilter={onSetFilter}
            />}
        </li>

        
            {mails.map(mail => <MailPreview
                mail={mail}
                key={mail.id}
            />)}
    </ul>
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
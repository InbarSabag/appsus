const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    // state = {
    //     status: null,
    //     filterBy: null,
    // }

    const readClass = mail.isRead ? 'read' : 'unread'

    return <section className={`${readClass} flex space-between  mail-preview`} >
        <div>
            <input className='btns-checkbox'
                type="checkbox"
                name="selected-mail"
                id="selected-mail"
            />

            <span> star </span>

            <span>{mail.from}</span>
        </div>
        
        <div>
            <Link className="mail-content-container" to={"/mail/" + mail.id}>
                <span>{mail.subject}</span>
                <span className='mail-preview-body'> - {mail.body}</span>
            </Link>
        </div>

        <div>{showTime(mail.sentAt)}</div>
    </section>
}

function showTime(sentAt) {
    const diff = Date.now() - sentAt;
    const day = 24 * 60 * 60 * 1000
    const date = new Date(sentAt)
    if (diff < day) return `${date.getHours()}:${date.getMinutes()}`
    else return `${date.getDate()} ${date.toLocaleString('en', { month: 'short' })}`
}


// import { Rate } from '../../../cmps/rate.jsx'
// import { utilService } from '../../../services/util.service.js'

// export class EmailPreview extends React.Component {
//     state = {
//         isShown: false,
//     }

//     render() {
//         const { mail, status } = this.props
//         const { onRemoveEmail, onToggleIsRead, onSetStar } = this.props
//         const { isShown } = this.state
//         const readClass = mail.isRead ? 'read' : 'unread'
//         const sentAt = utilService.timeToDisplay(mail.sentAt)

//         return <tbody>
//             {/* < tr
//                 className={`${readClass} flex space-between  mail-preview`}
//                 onClick={() => { this.onShowEmail(mail.id) }} >

//                 <td>
//                     <input className='btns-checkbox'
//                         type="checkbox"
//                         name="selected-mail"
//                         id="selected-mail"
//                     />

//                     <span><Rate setStar={onSetStar} email={mail} /> </span>

//                     <span>{mail.from}</span>
//                 </td>

//                 <td>
//                     <Link
//                         className="mail-content-container"
//                         to={"/mail/" + mail.id}>
//                         <span>
//                             {mail.subject}
//                         </span>
//                         <span
//                             className='mail-preview-body'>
//                             - {mail.body}
//                         </span>
//                     </Link>
//                 </td>

//                 <td>{sentAt}</td>
//             </tr > */}
//         </tbody>
//     }
// }
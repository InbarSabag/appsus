import { mailService } from '../services/mail.service.js'
import { MailList } from '../cmps/mail-list.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailDetails } from "../cmps/mail-details.jsx"
import { MailCompose } from '../cmps/mail-compose.jsx'
import { LoadingSpinner } from "../../../cmps/spinner.jsx"


const { Route, Switch } = ReactRouterDOM

export class MailIndex extends React.Component {
    state = {
        mails: [],
        filterBy: {
            status: 'inbox'
        }
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query(this.state.filterBy)
            .then(mails => this.setState({ mails }))
    }

    onSetFilter = (filterBy) => {
        this.setState(prevState =>
            ({ ...prevState, filterBy }), () => {
                this.loadMails()
            }
        )
    }

    render() {
        const { mails, filterBy } = this.state
        const { onSetFilter } = this

        if (!mails) return <LoadingSpinner />
        return <div className="flex mail-index">

            <MailFolderList />
            <MailList
                onSetFilter={onSetFilter}
                filterBy={filterBy}
                mails={mails}
            />
            <Switch>
                <Route path="/mail/compose" component={MailCompose} />
                <Route path="/mail/:mailId" component={MailDetails} />
            </Switch>
            {/* <Route path="/mail/:mailId" component={MailDetails} /> */}


            {/* <Switch>
                    <Route path="/mail/sent" Component={ } />
                    <Route path="/mail/:mailId" Component={ } />
                    <Route path="/mail/inbox" Component={ } />
                    <Route path="/mail/drafts" Component={ } />
                    <Route path="/mail/trash" Component={ } />
                    <Route path="/mail/compose" Component={ } />
                </Switch> */}
        </div>
    }
}

// import { mailService } from '../services/mail.service.js'
// import { MailList } from '../cmps/mail-list.jsx'
// import { MailFolderList } from '../cmps/mail-folder-list.jsx'
// import { MailDetails } from "../cmps/mail-details.jsx"
// import { MailCompose } from '../cmps/mail-compose.jsx'
// import { LoadingSpinner } from "../../../cmps/spinner.jsx"

// const { Route, Switch } = ReactRouterDOM

// export class MailIndex extends React.Component {
//     state = {
//         loggedInUser: null,
//         mails: [],
//         filterBy: {
//             status: 'inbox',
//         },
//     }

//     componentDidMount() {
//         console.log('componentDidMount');
//         // const { status } = this.props.match.params
//         // console.log('status:', status)
//         // this.setState((prevState) => ({
//         //     filterBy: {
//         //         ...prevState.filterBy,
//         //         status
//         //     }
//         // }), () => this.loadMails())
//         // this.loadUser()
//         this.loadMails()
//     }
//     componentDidUpdate(prevProps) {
//         if (prevProps.match.params.status !== this.props.match.params.status) {
//             const { status } = this.props.match.params
//             this.setState((prevState) => ({
//                 filterBy: {
//                     ...prevState.filterBy,
//                     status
//                 }
//             }), () => this.loadEmails())
//         }
//     }

//     loadMails = () => {
//         console.log('loadMails:', loadMails)
//         mailService.query(this.state.filterBy)
//             .then(mails => this.setState({ mails }))
//     }
//     // loadUser = () => {
//     //     console.log('loadUser:', loadUser)
//     //     mailService.getLoggedInUser()
//     //         .then(loggedInUser => {
//     //             this.setState({ loggedInUser })
//     //         })
//     // }

//     onSetFilter = (filterBy) => {
//         this.setState(prevState =>
//             ({ ...prevState, filterBy }), () => {
//                 this.loadMails()
//             }
//         )
//     }

//     onSetStar = (mailId) => {
//         mailService.setEmailStatus(mailId, 'starred')
//             .then(() => {
//                 const { mails } = this.state
//                 const emailIdx = mails.findIndex(mail => mail.id === mailId)
//                 mails[emailIdx].status = (mails[emailIdx].status === 'starred') ? null : 'starred'
//             })
//     }

//     render() {
//         // const {
//         //     onSetFilter,
//         //     onSetStar,
//         // } = this
//         const { mails, filterBy } = this.state
//         if (!mails) return <LoadingSpinner />
//         console.log('mails',mails);
//         return <section className="flex mail-index">
// <h1>mail-index</h1>
//             {/* <MailFolderList />
//             <MailList
//                 mails={mails}
//                 filterBy={filterBy}
//                 onSetFilter={onSetFilter}
//                 onSetStar={onSetStar}
//             />
//             <Switch>
//                 <Route exact path="/mail/compose" component={MailCompose} />
//                 <Route path="/mail/:mailId" component={MailDetails} />
//             </Switch> */}

//             {/* <Route path="/mail/:mailId" component={MailDetails} /> */}

//             {/* <Switch> or Func push to history
//                     <Route path="/mail/sent" Component={ } />
//                     <Route path="/mail/:mailId" Component={ } />
//                     <Route path="/mail/inbox" Component={ } />
//                     <Route path="/mail/drafts" Component={ } />
//                     <Route path="/mail/trash" Component={ } />
//                     <Route path="/mail/compose" Component={ } />
//                 </Switch> */}
//         </section>
//     }
// }
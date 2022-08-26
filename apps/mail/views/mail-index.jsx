import { mailService } from '../services/mail.service.js'
import { MailList } from '../cmps/mail-list.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailDetails } from "../cmps/mail-details.jsx"
import { LoadingSpinner } from "../../../cmps/spinner.jsx"

import { MailCompose } from '../cmps/mail-compose.jsx'

const { Route, Switch } = ReactRouterDOM

export class MailIndex extends React.Component {
    state = {
        mails: [],
        filterBy: null,
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
        return <section className="flex mail-index">

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


            <Route path="/mail/:status/:mailId" component={MailDetails} />


            {/* <Switch>
                    <Route path="/mail/sent" Component={ } />
                    <Route path="/mail/:mailId" Component={ } />
                    <Route path="/mail/inbox" Component={ } />
                    <Route path="/mail/drafts" Component={ } />
                    <Route path="/mail/trash" Component={ } />
                    <Route path="/mail/compose" Component={ } />
                </Switch> */}
        </section>
    }
}


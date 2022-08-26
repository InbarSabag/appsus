import { mailService } from '../services/mail.service.js'
import { MailList } from '../cmps/mail-list.jsx'
import { LoadingSpinner } from "../../../cmps/spinner.jsx"
import { FolderList } from '../cmps/mail-folder-list.jsx'
import { MailDetails } from "../cmps/mail-details.jsx"
import { MailFilter } from '../cmps/mail-filter.jsx'


const Router = ReactRouterDOM.HashRouter
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
        mailService.query()
            .then(mails => this.setState({ mails }))
    }

    onSetFilter = (filterBy) => {
        this.setState(prevState =>
            ({ ...prevState, filterBy }), () => {
                this.loadMails
            }
        )
    }



    render() {
        const { mails, filterBy } = this.state
        const { onSetFilter } = this

        if (!mails) return <LoadingSpinner />
        return <section className="flex main-layout mail-index">
                <FolderList />

                <Route path="/mail/:mailId" component={MailDetails} />

                <MailList mails={mails} />

                {<MailFilter
                    filterBy={filterBy}
                    onSetFilter={onSetFilter}
                />}
                
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

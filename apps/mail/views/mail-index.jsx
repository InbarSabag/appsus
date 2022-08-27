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
            txt: null,
            folder: 'inbox'
        },
    }

    onSetFilter = (filterBy) => {
        const { mails } = this.state
        const { txt } = filterBy
        if (!mails || !mails.length) mails = console.log('no mails')
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                'txt': txt
            }
        }), () => { this.loadMails(this.state.filterBy) })
        this.loadMails(this.state.filterBy)
    }

    componentDidMount() {
        console.log('MailIndex DidMount');
        this.loadMails()
    }

    componentDidUpdate(prevProps, prevState) {
        const { folder } = this.props.match.params.folder
        if (prevProps.match.params.folder !== this.props.match.params.folder) {
            this.setState((prevState) => ({
                filterBy: {
                    ...prevState.filterBy,
                    [folder]: value
                }
            }))
            this.loadMails(this.state.filterBy)
        }
    }

    loadMails = () => {
        mailService.query(this.state.filterBy)
            .then(mails => this.setState({ mails }))
    }

    render() {
        console.log('MailIndex render:')
        const { mails, filterBy } = this.state
        const { onSetFilter } = this

        if (!mails) return <LoadingSpinner />

        return <div className="flex mail-index">

            <MailFolderList />
            <MailList
                currFolder={this.props.match.params.folder}
                mails={mails}
                filterBy={filterBy}
                onSetFilter={onSetFilter}
            />
            <Switch>
                <Route path="/mail/compose" component={MailCompose} />
                {/* <Route path="/mail/:folder/:mailId" component={MailDetails} /> */}
            </Switch>

            {/* <Route path="/mail/:mailId" component={MailDetails} /> */}

        </div>
    }
}
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
        console.log('onSetFilter');
        console.log('this.state:', this.state)
        const { mails } = this.state
        console.log('mails:', mails)
        const { txt } = filterBy

        if (!mails || !mails.length) mails = console.log('no mails');
        this.loadMails(this.state.filterBy)
    }

    componentDidMount() {
        console.log('MailIndex DidMount');
        this.loadMails()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     // const { folder } = this.state.filterBy.folder ↓ papram

    //     if (prevProps.match.params.folder !== this.props.match.params.folder) {
    //         // this.setState((prevState) => ({
    //         //     filterBy: {
    //         //         ...prevState.filterBy,
    //         //         [folder]: value
    //         //     }
    //         // }))



    //         this.loadMails(this.state.filterBy)
    //     }

    // }

    loadMails = () => {
        mailService.query()
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
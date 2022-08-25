import { mailService } from '../services/mail.service.js'
import { MailList } from '../cmps/mail-list.jsx'
import { LoadingSpinner } from "../../../cmps/spinner.jsx"
import { MailFilter } from '../cmps/mail-filter.jsx'
import { FolderList } from '../cmps/mail-folder-list.jsx'

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
            ({ ...prevState, filterBy }), this.loadMails)
    }

    render() {
        const { mails, filterBy } = this.state
        const { onSetFilter } = this
        if (!mails) return <LoadingSpinner />
        return <section className="mail-index flex">
            <FolderList
                filterBy={filterBy}
                onSetFilter={onSetFilter}
             />
            <MailFilter
                filterBy={filterBy}
                onSetFilter={onSetFilter}
            />
            <MailList
                mails={mails}
            // onSetFilter={this.onSetFilter}
            />
        </section>
    }
}

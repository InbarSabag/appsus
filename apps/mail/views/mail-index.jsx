import { mailService } from '../services/mail.service.js'
import { MailList } from '../cmps/mail-list.jsx'
import { LoadingSpinner } from "../../../cmps/spinner.jsx";
import { MailFilter } from '../cmps/mail-filter.jsx'
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
        if (!mails || !mails.length) return <LoadingSpinner />
        return <section className="mail-index">
            <table className='mail-table'>
                <thead>
                    <MailFilter
                        filterBy={filterBy}
                        onSetFilter={onSetFilter}
                    />
                </thead>
                <MailList
                    mails={mails}
                // onSetFilter={this.onSetFilter}
                />
            </table>
        </section>
    }
}

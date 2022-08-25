import { mailService } from '../services/mail.service.js'
import { MailList } from '../cmps/mail-list.jsx'
import { LoadingSpinner } from "../../../cmps/spinner.jsx";
import { MailFilter } from '../cmps/mail-filter.jsx'
export class MailIndex extends React.Component {
    state = {
        mails: [],
    }

    componentDidMount() {
        this.loadMails()

    }

    loadMails = () => {
        mailService.query()
            .then(mails => this.setState({ mails }))
    }

    render() {
        const { mails } = this.state
        if (!mails || !mails.length) return <LoadingSpinner />
        return <section className="mail-index">
            <table>
                <thead>
                        <MailFilter />
                </thead>
                <MailList
                    mails={mails}
                />
            </table>
        </section>
    }
}

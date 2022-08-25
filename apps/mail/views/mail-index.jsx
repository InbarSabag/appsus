import { mailService } from '../services/mail.service.js'
import { MailList } from '../cmps/mail-list.jsx'
import { LoadingSpinner } from "../../../cmps/spinner.jsx";

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
        if (!mails|| !mails.length) return <LoadingSpinner />
        return <section className="mail-index">
            <MailList
                mails={mails}
            />
        </section>
    }
}

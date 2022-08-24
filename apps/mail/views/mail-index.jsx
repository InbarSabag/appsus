import { mailService } from '../services/mail.service.js'
// import { MailList } from '../cmps/mail-list.jsx'
import { LoadingSpinner } from "../../../cmps/spinner.jsx";

export class MailIndex extends React.Component {
    state = {
        mail: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {

        mailService.query(this.state.filterBy).then((mails) => {
            this.setState({ mails })
        })
    }

    render() {
        const { mails } = this.state
        if (!mails) return <LoadingSpinner />
        return <section className="mail-index">

            {/* <MailList
             mails = {mails}
            />
            <table>
                <thead></thead>
                <tbody>
                    <tr>

                    </tr>
                </tbody>
            </table> */}
        </section>
    }
}

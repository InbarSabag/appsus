import { mailService } from '../services/mail.service.js'
// import { MailList } from '../cmps/mail-list.jsx'

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
        console.log('mails:', mails)
        return <section className="mail-index">

        </section>
    }
}

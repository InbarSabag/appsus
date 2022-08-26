import { mailService } from "../services/mail.service.js"

export class MailDetails extends React.Component {
    state = {
        mail: null,
    }

    componentDidMount() {
        this.loadMail()
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps:', prevProps.match)
        if (prevProps.match.params.mailId !== this.props.match.params.mailId) {
            this.loadMail()
        }
    }
    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getById(mailId)
            .then((mail) => {
                if (!mail) return this.onGoBack()
                this.setState({ mail })
            })
    }
    onGoBack = () => {
        this.props.history.push('/mail')
    }
    onRemoveMail = () => {
        const { mail } = this.state
    }

    render() {
        return <section className="mail-details">


            {/* // <link to={`/mail/${nextMailId}`} */}
        </section>
    }
}
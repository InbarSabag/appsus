import { LoadingSpinner } from "../../../cmps/spinner.jsx"
import { mailService } from "../services/mail.service.js"

export class MailDetails extends React.Component {
    state = {
        mail: null,
    }

    componentDidMount() {
        this.loadMail()
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps:', prevProps)
        console.log('prevState:', prevState)
        if (prevProps.match.params.folder !== this.props.match.params.folder) {

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
        this.props.history.push('/mail/index')
    }

    render() {
        const { mail } = this.state
        if (!mail) return <LoadingSpinner/>
        return <section className="flex mail-details">
            <div className="mail-card">
                <h2>{mail.from}</h2>
                <h3>{mail.subject}</h3>
                <p>{mail.body}</p>
            </div>


            {/* // <link to={`/mail/${nextMailId}`} */}
        </section>
    }
}
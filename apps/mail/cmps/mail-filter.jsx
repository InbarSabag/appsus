export class MailFilter extends React.Component {
    state = {
        filterBy: {
            txt: '',
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState((prevState) =>
            ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    onSubmitFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
        this.cleanForm()
    }

    cleanForm = () => {
        this.setState({ filterBy: { txt: '', status: '' } })
    }

    render() {
        return <section className="mail-filter">
            <div className="flex space-between">

                <input
                    name="check-all"
                    type="checkbox"
                    id="check-all"
                />

                <input
                    name="search-mail"
                    type="search"
                    placeholder="Search Mail.."
                    id="search-mail"
                />

                <select
                    className="select-filter-mail"
                    name="status"
                    id="status"
                    onChange={this.handleChange}>
                    <option value="Inbox">Inbox</option>
                    <option value="unRead">UnRead</option>
                    <option value="read">Read</option>
                    <option value="sent">Sent</option>
                    <option value="draft">Draft</option>
                    <option value="favorite">Favorite</option>
                </select>
            </div>
        </section>
    }
}
export class MailFilter extends React.Component {
    state = {
        filterBy: {
            txt: '',
            status: ''
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
        return <tr className=" mail-filter">
            <th className="flex space-between">

                <input
                    type="checkbox"
                    name="check-all"
                    id="check-all"
                />
                <select
                    className="select-filter-search-mail"
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

                <input
                    type="search"
                    placeholder="Search Mail.."
                    name="search-mail"
                    id="search-mail"
                />
            </th>
        </tr>
    }
}
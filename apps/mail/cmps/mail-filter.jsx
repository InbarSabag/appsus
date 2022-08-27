export class MailFilter extends React.Component {
    state = {
        filterBy: {
            txt: '',
            folder: '',
        }
    }
componentDidMount(){
    console.log('MailFilter didMount')
}
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => { this.props.onSetFilter(this.state.filterBy) })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { txt } = this.state
        return (
            <section className="mail-filter">
                <div className="flex space-between">
                    <form onSubmit={this.onFilter}
                        id="mail-filter"
                        className="form-search-mail">
                        <input
                            name="check-all"
                            type="checkbox"
                            id="check-all"
                        />

                        <input
                            type="search"
                            placeholder="Search Mail..."
                            id="txt"
                            name="txt"
                            value={txt}
                            className="search-input"
                            onChange={this.handleChange}
                        />

                        <select
                            className="select-filter-mail"
                            name="status"
                            id="status"
                            onChange={this.handleChange}>

                            <option value="inbox">Inbox</option>
                            <option value="unread">UnRead</option>
                            <option value="read">Read</option>
                            <option value="sent">Sent</option>
                            <option value="draft">Draft</option>
                            <option value="favorite">Favorite</option>
                        </select>
                    </form>
                </div>
            </section>
        )
    }
}
export class MailFilter extends React.Component {
    state = {
        filterBy: {
            txt: '',
            status: '',
        }
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

    // onSetFilter = (filterBy) => {
    //     this.setState({ filterBy }, () => {
    //         this.loadMails()
    //     })
    // }

    render() {
        const { txt } = this.state
        return (
            <section className="mail-filter">
                <div className="flex space-between">
                    <form className="form">
                        <input
                            name="check-all"
                            type="checkbox"
                            id="check-all"
                        />

                        <input
                            type="text"
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
export class NotesFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            type: ''
        }
    }

    handleChange = ({ target }) => {
        console.log('🚀 ~ NotesFilter ~ target', target)
        
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }


    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { title, type } = this.state.filterBy


        return <section className="note-filter">
            <form className="filter-form" onSubmit={this.onFilter}>
                <input
                    type="text"
                    placeholder="Search note.."
                    id="by-title"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                />
                <select name="type" id="bt-type" 
                    value={type} onChange={this.handleChange}>
                    <option value="">Search by type..</option>
                    <option value="note-txt">Text</option>
                    <option value="note-img">Image</option>
                    <option value="note-todos">TO-DO list</option>
                    <option value="note-video">Video</option>
                </select>
            </form>
        </section>
    }
}

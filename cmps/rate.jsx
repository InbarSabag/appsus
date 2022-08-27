export class Rate extends React.Component {

    state = {
        hover: null
    }

    setRating = (emailId) => {
        const {setStar} = this.props
        setStar(emailId)

    }

    setHover = (idx) => {
        this.setState({hover: idx})
    }

    render() {
        const { hover } = this.state
        const {mail} = this.props
        const isStarred = (mail.isStar) ? true : false

        return <div className="star-rating">
            {[...Array(1)].map((star, idx) => {
                idx++
                return (
                    <button
                        type="button"
                        key={idx}
                        className={idx <= (hover || isStarred) ? "btn-rate on" : "btn-rate off"}
                        onClick={() => this.setRating(mail.id)}
                        onMouseEnter={() => this.setHover(idx)}
                        onMouseLeave={() => this.setHover(null)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    }
}
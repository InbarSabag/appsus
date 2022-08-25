const { Link } = ReactRouterDOM

export class FolderList extends React.Component {
    state = {

    }
    render() {
        return <section className="folder-list flex column">

            {/* <Link to="/mail/compose"> */}
                <div className="btn btn-compose">
                    compose
                </div>
            {/* </Link> */}

            <div className="btn btn-inbox">inbox</div>

            <div className="btn btn-sent">sent</div>
            <div className="btn btn-drafts">drafts</div>
            <div className="btn btn-trash">trash</div>
        </section>
    }
}
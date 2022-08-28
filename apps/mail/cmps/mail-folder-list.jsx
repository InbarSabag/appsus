const { NavLink } = ReactRouterDOM

export function MailFolderList() {

    return <section className="folder-list flex column">

        <NavLink
            to="/mail/compose"
            className="flex space-between"
        >
            <div className="btn btn-compose">
            </div>
            <span>compose</span>
        </NavLink>

        <NavLink to="/mail/inbox">
            <div className="btn btn-inbox">inbox</div>
        </NavLink>

        <NavLink to="/mail/sent">
            <div className="btn btn-sent">sent</div>
        </NavLink>

        <NavLink to="/mail/draft">
            <div className="btn btn-draft">draft</div>
        </NavLink>

        <NavLink to="/mail/trash">
            <div className="btn btn-trash">trash</div>
        </NavLink>
    </section>
}
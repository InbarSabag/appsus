export class FolderList extends React.Component {
    state = {

    }
    render() {
        return <section className="folder-list flex column">
            
            <div className="btn btn-compose">compose</div>
            <div className="btn btn-inbox">inbox</div>
            <div className="btn btn-sent">sent</div>
            <div className="btn btn-drafts">drafts</div>
            <div className="btn btn-trash">trash</div>
        </section>
    }
}
import { DynamicSearchInput } from '../cmps/dynamic-search-input.jsx'

const { Link, NavLink, withRouter } = ReactRouterDOM

export function _AppHeader() {
    return <header className="app-header">
        <Link to="/">
            <div className="logo">
                <img src="/assets/img/logo.png" alt=""/>
            </div>
        </Link>

        {/* <DynamicSearchInput/> */}
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail/inbox">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
export const AppHeader = withRouter(_AppHeader)

// ↓  on the header
{/* <NavLink to="">Mail</NavLink> */ }

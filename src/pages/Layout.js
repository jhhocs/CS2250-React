import { Outlet, Link} from "react-router-dom"

export default function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to = "">Home</Link>
                    </li>
                    <li>
                        <Link to = "api">API</Link>
                    </li>
                    <li>
                        <Link to = "tictactoe">TicTacToe</Link>
                    </li>

                </ul>
            </nav>
            <Outlet />
        </>
    )
}
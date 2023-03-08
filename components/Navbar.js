import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <Link href='/' className="name">
                Manager Portal
            </Link>
            <div className="routes">
                <Link href='/new/donations'>New Donation</Link>
                <Link href='/new/campaigns'>New Campaign</Link>
                <Link href='/outdated/donations'>Outdated</Link>
            </div>
            <div>
                Login
            </div>
        </nav>
    )
}
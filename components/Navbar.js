import Link from "next/link";
import { ChevronDown } from 'lucide-react';
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);

    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/login');
    }

    return (
        <nav className="navbar">
            <Link href='/' className='title'>
                Manager Portal
            </Link>
            <div className="right">
                <ul className="nav-links">
                    <li className="nav-item">
                        <div className='wrap'>
                            <div>New</div>
                            <ChevronDown size={20} />
                        </div>
                        <div className="dropdown">
                            <Link href="/new/donations">Donations</Link>
                            <Link href="/new/campaigns">Campaigns</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className='wrap'>
                            <div>Outdated</div>
                            <ChevronDown size={20} />
                        </div>
                        <div className="dropdown">
                            <Link href="/outdated/donations">Donations</Link>
                            <Link href="/outdated/campaigns">Campaigns</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        {user ?
                            <div onClick={handleLogout}>Logout</div>
                            :
                            <Link href="/login">Login</Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}
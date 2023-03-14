import '@/styles/globals.css'
// import Navbar from '@/components/Navbar'
import { useState } from 'react'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar>
        <Link href='/' className='title'>
          Manager Portal
        </Link>

        <NavItem text={'New'}>
          <DropdownMenu route={'new'}>
          </DropdownMenu>
        </NavItem>

        <NavItem text={'Outdated'}>
          <DropdownMenu route={'outdated'}>
          </DropdownMenu>
        </NavItem>

        <div className='login'>
          Login
        </div>
      </Navbar>
      <Component {...pageProps} />
    </>

  )
}

function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        {props.children}
      </ul>
    </nav>
  )
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item" onClick={() => setOpen(!open)}>
      {props.text}
      <IoIosArrowDown className='toggleicon' />

      {open && props.children}
    </li>
  )
}

function DropdownMenu(props) {

  function DropdownItem(props) {
    return (
      <Link href={props.link} className="menu-item">
        {props.children}
      </Link>
    )
  }

  return (
    <div className="dropdown">
      <DropdownItem link={`/${props.route}/donations`}>Donation</DropdownItem>
      <DropdownItem link={`/${props.route}/campaigns`}>Campaign</DropdownItem>
    </div>
  )
}

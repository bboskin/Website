import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  footing,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children}) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
           <Link to="/" className={navLinkText}>
            Home
           </Link>
          </li>
          <li className={navLinkItem}>
           <Link to="/about" className={navLinkText}>
            About
           </Link>
          </li>
          <li className={navLinkItem}>
           <Link to="/logic" className={navLinkText}>
            Research
           </Link>
          </li>
          <li className={navLinkItem}>
           <Link to="/music" className={navLinkText}>
            Music
           </Link>
          </li>
          <li className={navLinkItem}>
           <Link to="/collages" className={navLinkText}>
            Collages
           </Link>
          </li>
          <li className={navLinkItem}>
           <Link to="/baking" className={navLinkText}>
            Baking
           </Link>
          </li>
          <li className={navLinkItem}>
           <Link to="/random" className={navLinkText}>
            Random Stuff
           </Link>
          </li>
        </ul>
      </nav>
    <main>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
    <h2 className={footing}>TODO footing</h2>
    </div>
  )
}

export default Layout

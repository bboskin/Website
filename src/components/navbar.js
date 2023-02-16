import * as React from 'react'
import { Link } from 'gatsby'
import {
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const SiteNav = ({ pageTitle, children}) => {
  return (
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
  )
}

export default SiteNav

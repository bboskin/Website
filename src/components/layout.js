import * as React from 'react'
import { Link } from 'gatsby'
import SiteNav from './navbar'
import {
  container,
  heading,
  background,
} from './layout.module.css'

const Layout = ({ pageTitle, children}) => {
  return (
    <div className={background}>
    <div className={container}>
    <SiteNav> </SiteNav>
    <main>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
    <SiteNav> </SiteNav>
    </div>
    </div>
  )
}

export default Layout

import React from 'react'
import Filter from '../filter/Filter'
import LanguageSelector from '../languageSelector/LanguageSelector'

function Navigation() {
  return (
    <nav className='container mt-3' style={{minHeight:"5vh"}}>
        <span className='float-start'>
         <LanguageSelector/>
        </span>
        <span className='float-end'><Filter/></span>
    </nav>
  )
}

export default Navigation
import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function BT4({children}) {
  return (
	<div className='page'>
      <Header/>
      <Outlet/>
  </div>
  )
}

export default BT4
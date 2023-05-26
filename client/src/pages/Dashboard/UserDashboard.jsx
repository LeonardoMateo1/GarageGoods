import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import Logout from '../Logout'

const UserDashboard = () => {
  return (
    <div>
        <Nav/>
        <div className='flex items-center justify-center w-full h-screen '>
          <Logout/>
          <h1>Hello</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default UserDashboard
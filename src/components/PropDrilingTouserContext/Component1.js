import React, { useState } from 'react'
import Component2 from './Component2'

import { UserContext } from './UserContext'

const Component1 = () => {
    const [user,setUser] = useState({id:191,name:"Rohit"})
  return (
    <UserContext.Provider value={user}>
        <Component2/>
    </UserContext.Provider>
  )
}

export default Component1
import React,{useContext} from 'react'
import { UserContext } from './UserContext'

const Component4 = () => {
  const user = useContext(UserContext);
  return (
    <>
     <div>This is Component4</div>
     <p>{user.id}</p>
     <p>{user.name}</p>
    </>
  )
}

export default Component4

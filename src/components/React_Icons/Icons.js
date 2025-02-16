// https://react-icons.github.io/react-icons/

import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export const Icons = () => {
  return (
    <>
    <h2>React Icons</h2>
    <div>
        <span>
            <FaReact className='icon-react'/>
            <FaYoutube className='icon-youtube'/>
        </span>
    </div>
    </>
  )
}

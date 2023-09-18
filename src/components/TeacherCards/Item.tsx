import React from 'react'
import { ItemPropType } from "../../types"



export const Item = React.memo((props: ItemPropType) => {
  return (
    <ul>
      <li className='flex'>
        <h2 className='text-[#9B9B9B] text-[13px]'>{props.title}:</h2>
        <p className='text-[#444444] text-[13px] ml-[4px]'>{props.left}</p>
      </li>
      <li className='flex'>
        <h2 className='text-[#9B9B9B] text-[13px]'>{props.text}:</h2>
        <p className='text-[#444444] text-[13px] ml-[4px]'>{props.left1}</p>
      </li>
    </ul>
  )
})



import React from 'react'
import { Transale } from '../utils/Constants';


export default function SelectTransla() {
  return (
    <select  className='py-2 text-[#000000] text-[19px] font-light bg-[#ffffff] border-t-gray100   w-[110px]' name="Translate" id="1">
      {Transale.map((option) => {
        return (
          <React.Fragment key={option.id}>
            <option className=' border-none text-center rounded-2xl' value={option.value}>{option.text}</option>
          </React.Fragment>
        )
      })}
    </select>
  )
}
import React from 'react'
import { TeacherPropList } from '../../types'

export const List = React.memo((props: TeacherPropList) => {

    return (
        <>
            <ul className='flex items-center'>
                <li >
                    <img src={props.img} alt="logo" className='w-[100%] flex cursor-pointer' />
                </li>
                <li className='ml-[5px]'>
                    <h2 className='text-[#F48221] text-[16px] font-semibold cursor-pointer'>{props.name}</h2>
                    <pre className='text-[#444444] text-[10px] font-semibold'>{props.birthday}  ID.{props.id}</pre>
                </li>
            </ul>
        </>
    )
})

import React from 'react'
import { TeacherProp } from '../../types'
import { List } from './List'
import ReusableBtn from '../Common/CustemBtn/ReusableBtn'
import { trash, userImg, writing } from '../../assets/NavbarImgs'
import { Item } from "./Item"

const index = React.memo((props: TeacherProp) => {
  return (
    <div className="rounded-lg w-[500px] shadow-md h-[150px] p-[10px]">
      <span className='flex items-center justify-between'>
        <List img={userImg} birthday={props.birthday} id={props.id} name={props.name} />
        <span className='flex'>
          <ReusableBtn btnImg2={writing} btnStyle=" bg-[#DDD21F] text-[#FFFFFF] w-[44px] h-[44px]  rounded-[15px] flex items-center mr-[14px] justify-center" handleClick={undefined} />
          <ReusableBtn btnImg2={trash} btnStyle=" bg-[#FF6666] text-[#FFFFFF] w-[44px] h-[44px]  rounded-[15px] flex items-center justify-center" handleClick={undefined} />
        </span>

      </span>
      <span className='w-[100%] h-[1px] bg-[#EEEEEE] flex mt-[20px]'></span>
      <div className='flex items-center justify-between pt-[10px] pr-[50px]'>
        <Item title="Telefon" text="Tug'ulgan kun" left={props.phone} left1={props.birthday} />
        <Item title="Rol" text="Guruhlar soni" left={props.rol} left1={props.count} />
      </div>
    </div>
  )
})

export default index
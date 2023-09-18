import React from 'react'
import CustomNavlink from '../Common/CustomNavlink';
import { NavLinks } from '../../utils/Constants';

import { Main, Settings, Student, Teachers, Reports, Lid, Group, Economy, LogOut } from "../../assets/SideBarImg";
const logoImg = [Main, Settings, Student, Teachers, Reports, Lid, Group, Economy, LogOut]


const index = React.memo(() => {
  const StyleNavLInk = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "#fff" : " ",
      background: isActive ? "#F48221" : " "
    }
  }
  return (
    <aside className='pl-[10px] pr-[10px] border-r-[1px] w-[239px] h-[750px] border-r-[#EEEEEE]'>
      <div>
        <span className='text-center p-[10px] flex justify-center flex-col items-center '>
          <img className='w-[120px] mx-auto rounded-2xl border-yellow-500 ' src="https://icdn.lenta.ru/images/2019/03/28/15/20190328152050754/square_1280_c9267cff0a7e82514bb4eec9ecc0c8f7.jpg" alt="" />
          <h1 className='text-[#555555] text-[14px] py-2 font-medium'>Shohjahon Qodirov</h1>
          <p className='text-[#F48221] text-[12px] pb-3 font-medium'>CEO at iTech Academy</p>
          <span className='w-[90%]  flex h-[1px] bg-[#EEEEEE]'></span>
        </span>
        <span className='grid grid-col-1 pt-[5px] '>
          {NavLinks.map((val, i) => (
            <CustomNavlink
              key={val.id}
              style={StyleNavLInk}
              imgNavLink={logoImg[i]}
              text={val.link} toPath={val.path} textStyle={' text-[20px] text-center text-[#555] '}
              borderNavlinkStyle={'duration-300 whitespace-nowrap flex justify-start gap-2 items-center rounded-2xl py-1.5 mt-[9px] px-[20px]'}
            />
          ))}
        </span>
      </div>
    </aside>
  )
})

export default index;
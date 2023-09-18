// import ReusableBtn from '../Common/CustemBtn/ReusableBtn'
import { Outlet } from 'react-router-dom'
import { LidPageForSetting } from "../../utils/Constants"
import CustomNavlink from '../Common/CustomNavlink'
import {
  kurslllar,
  umumiy,
  xodimlar,
  writing,
  picture,
  home
} from '../../assets/common imges/index'

const arr = [
  kurslllar,
  umumiy,
  xodimlar,
  writing,
  picture,
  home
]


const ButtonSetting = () => {
  const StyleNavLInk = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "#fff" : " ",
      background: isActive ? "#F48221" : " "
    }
  }
  return (
    <>
      <div className="flex gap-[15px] flex-wrap ml-[30px]">
        {LidPageForSetting?.map((val: any, index: any) => (
          <CustomNavlink
            key={val?.id}
            style={StyleNavLInk}
            imgNavLink={arr[index]}
            text={val?.link} toPath={val.path} textStyle="px-[20px]  rounded-2xl font-semibold flex h-[44px] items-center justify-center rounded-[15px] text-[#fff]"
            borderNavlinkStyle={'duration-300 whitespace-nowrap flex justify-start items-center text-[17px] text-[#fff] bg-gray gap-[10px] rounded-2xl py-1.5 px-[10px]'}
          />
        ))}
        <Outlet />
      </div>
    </>
  )
}

export default ButtonSetting
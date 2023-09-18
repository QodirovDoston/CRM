import { Outlet } from 'react-router-dom'
import { plusRound } from '../../assets/NavbarImgs/index'
import { Word } from '../../utils/Constants'
import CustomNavlink from '../Common/CustomNavlink'

const MoliyaButton = () => {
  return (
    <div>
      <div className="flex gap-2 mt-1 ml-10  flex-wrap">
        {Word.map((val) => (
          <CustomNavlink key={val.id}
            imgNavLink={plusRound}
            text={val.link} toPath={val.path} textStyle=" px-8 rounded-2xl mt-5 text-white flex gap-2 h-[48px] items-center justify-center rounded-[15px] text-white"
            borderNavlinkStyle={'duration-300 duration-300  whitespace-nowrap	 flex justify-start gap-2 items-center  rounded-2xl py-1.5 mt-[9px] px-[20px]  text-[17px] text-white	 flex  gap-2 items-center bg-gray  rounded-2xl py-1.5 mt-[9px] px-[30px]'} />
            ))}
            <Outlet/>
      </div>
    </div>
  )
}

export default MoliyaButton
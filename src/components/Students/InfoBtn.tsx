import { useState } from 'react';
import triangle from "../../assets/triangle.svg"
const InfoBtn = ({ infoItemDelete, id, setUpdateStudentModal ,getIdStudents}: any) => {

    const [showOptions, setShowOptions] = useState(false)
    return (
        <>
            <button className="flex my-2 items-center  justify-center relative w-[102px] h-[30px] rounded-[22px]  border-[#F48221] border-[2px] " onClick={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)} >
                <h4 className='text-[#F48221] text-base w-[50%] border-[#F48221]  border-r-[2px] relative z-10 left-[-10px]'>Info</h4>
                <img src={triangle} alt="" />
            </button>
            {showOptions &&
                <ul className='w-[120px] h-[78px] py-[2px] ml-[-40px] mt-5 absolute top-2 z-[40] border-[#EEEEEE] border-[1px] bg-white rounded transition-all duration-500 shadow-2xl' onMouseOver={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
                    <li className='text-[16px] whitespace-nowrap rounded-[5px] px-[14px] py-[10px]  font-medium hover:bg-[#F48221] hover:text-[#FFFFFF] bg-[#FFFFFF] cursor-pointer' onClick={() => { setUpdateStudentModal(true) ,getIdStudents(id) }}>Tahrirlash</li>
                    <li className='text-[16px] whitespace-nowrap rounded-[5px] px-[14px] py-[10px]  font-medium hover:bg-[#F48221] hover:text-[#FFFFFF] bg-[#FFFFFF] cursor-pointer'>To’lov</li>
                    <li className='text-[15px] whitespace-nowrap rounded-[5px] px-[14px] py-[10px]  font-medium hover:bg-[#F48221] hover:text-[#FFFFFF] bg-[#FFFFFF] cursor-pointer' onClick={() => infoItemDelete(id)}>O’chirish</li>
                </ul>
            }
        </>
    );
}

export default InfoBtn;

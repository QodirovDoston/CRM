import React from 'react'
import { ReusableBtn } from '.';
import { trash } from '../../assets/NavbarImgs';

export const CustomModal = React.memo(() => {
  return (
    <div className=' w-[384px] mx-auto'>
      <div className='bg-white shadow-2xl px-4 pb-[64%] pt-[1%]  h-[100%]' >
        <h1 className='text-orange font-medium text-[17px] mx-auto my-[40px]'>Chiqimni kiritish</h1>
        <hr className="border-t-[2px] border-t-hrcolor w-full" />
        <div className=' mx-auto my-[30px]'>
          <div className=" justify-center ">
            <label className='text-black text-sm' htmlFor="">Nomi
            </label>
            <input type="text" className='  border-[1px] rounded-2xl pl-3 h-[40px] w-[340px]  border-b-[1px] border-b-[#444444]
                 font-sans text-sm font-normal text-[#444444]' placeholder="Abdujabbor Ibrohimov" />
            <label className='text-black text-sm' htmlFor="">Sana
            </label>
            <input type="text" className='  border-[1px] rounded-2xl pl-3 h-[40px] w-[340px] border-b-[1px] border-b-[#444444]
                 font-sans text-sm font-normal text-[#444444]' placeholder="Sanani tanlang"  />
            <label className='text-black text-sm' htmlFor="">Turkum
            </label>
            <input type="text" className='  border-[1px] rounded-2xl pl-3 h-[40px] w-[340px]  border-b-[1px] border-b-[#444444]
                 font-sans text-sm font-normal text-[#444444]' placeholder="" disabled />
            <label className='text-black text-sm' htmlFor="">Oluvchi
            </label>
            <input type="text" className='  border-[1px] rounded-2xl pl-3 h-[40px] w-[340px]  border-b-[1px] border-b-[#444444]
                 font-sans text-sm font-normal text-[#444444]' placeholder="" />
            <label className='text-black text-sm' htmlFor="">Summa
            </label>
            <input type="text" className='  border-[1px] rounded-2xl pl-3 h-[40px] w-[340px]  border-b-[1px] border-b-[#444444]
                 font-sans text-sm font-normal text-[#444444]' placeholder="" />
            <label className='text-black text-sm' htmlFor="">Turi
            </label>
            <input type="text" className='  border-[1px] rounded-2xl pl-3 h-[40px] w-[340px]  border-b-[1px] border-b-[#444444]
                 font-sans text-sm font-normal text-[#444444]' placeholder="Uzum Bank " disabled />
            <div className='flex justify-end'>
              <div className='flex justify-end'>
                <ReusableBtn
                  btnImg2={trash}
                  className=""
                  btnImgStyle="ml-[20px]"
                  btnImg2Style="ml-[20px]"
                  text="Saqlash"
                  // handleClick=""
                  btnStyle="p-[9px] bg-[#F48221] text-[#FFFFFF] flex gap-1  py-[11px] rounded-[15px] mt-[20px]"
                  textStyle="mx-auto text-[17px]"
                   handleClick={undefined}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
})


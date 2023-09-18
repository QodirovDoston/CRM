import ReturnIcon from '../../assets/return_icon.svg'
import { ReusableBtn } from '../Common'
import { GroupForsecti, GroupForbuttonsForTable, dateInputsData } from '../../utils/Constants'
import { GrupAdd } from '../../assets/NavbarImgs/index'
import { useEffect, useRef, useState } from "react"
import { useForm } from 'react-hook-form'
import { modalSelectData } from '../../utils/Constants'
import { HeaderDropDown } from './HeaderDropDown'

const imgArr1 = [ReturnIcon, GrupAdd]

const GroupHeader = () => {
    const [bool, setBool] = useState(false)
    const useClickOutside = (handler: any) => {
        const domNode: any = useRef();
        useEffect(() => {
            const mabeHandle = (event: { target: any; }) => {
                if (!domNode.current.contains(event.target)) {
                    handler()
                }
            };
            document.addEventListener("mousedown", mabeHandle)
            return () => {
                document.removeEventListener("mousedown", mabeHandle)
            }
        })
        return domNode
    }
    const domNode = useClickOutside(() => {
        setBool(false)
    })
    const { register, handleSubmit } = useForm();
    const clicked = (id: number) => {
        if (id === 1) {
            window.location.reload()
        } else {
            setBool(!bool)
        }
    }
    const submit = (data: any) => {
        console.log(data);
        setBool(!bool)
    }
    return (
        <main className='pb-5 pt-[30px]'>
            <div>
                <div className="flex items-center h-[45px]">
                    <div className='h-full flex items-center justify-between'>
                        {GroupForsecti.map((value, i) => {
                            return (
                                <HeaderDropDown key={i} spam={value.spam} options={value.options} />
                            )
                        })}
                    </div>
                    <div className="h-full w-full flex items-center justify-between">
                        {GroupForbuttonsForTable.map((value, ind) => {
                            return (
                                <ReusableBtn
                                    key={value.id}
                                    className=""
                                    btnImg2={imgArr1[ind]}
                                    btnImgStyle=""
                                    btnImg2Style={value.btnImg2}
                                    text={value.text}
                                    handleClick={() => clicked(value.id)}
                                    btnStyle={value.btnStyle}
                                    textStyle={value.textStyle}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div ref={domNode} className={bool ? "z-50 border-y-0 overflow-y-scroll absolute top-0 right-0 h-full transition-all duration-[.7s] overflow-x-hidden bg-[#fff] border-[#eee] border-[1px]" : "z-50 border-y-0 overflow-y-scroll absolute top-0 right-[-390px] h-full transition-all duration-[.7s] overflow-x-hidden bg-[#fff] border-[#eee] border-[1px]"}>
                <div className='w-[385px] bg-[#fff] h-full'>
                    <div className="py-[23px] px-[16px] flex justify-between">
                        <h3 className='text-[#F48221] text-[17px] font-bold'>Talaba qo'shish</h3>
                        <button className='fa-regular fa-circle-xmark text-[#F48221] text-[25px]' onClick={() => setBool(!bool)}></button>
                    </div>
                    <hr className='border-t-[1px] border-t-[#eee]' />
                    <form className='px-[25px] pb-[25px] mt-[23px] text-[#444] text-[14px]' onSubmit={handleSubmit(submit)}>
                        <div className="pb-[20px]">
                            <h3>Guruh nomi</h3>
                            <input required {...register("groupName")} type="text" placeholder="Frontend 05" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        {modalSelectData.map((item) => {
                            return (
                                <div key={item.id} className="pb-[20px]">
                                    <h3>{item.name}</h3>
                                    <select required {...register(item.reg)} placeholder="Sanani tanlang" className="selectOpt text-left border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px] flex items-center justify-between cursor-pointer bg-white">
                                        <option selected disabled hidden className="py-[3px] pl-[20px] hover:(bg-[#F48221] text-[#fff]) mx-[1px] cursor-pointer bg-white hover:bg-orange" value=""></option>
                                        {(item.other).map((item) => {
                                            return (
                                                <option key={item?.id} className="py-[3px] pl-[20px] hover:(bg-[#F48221] text-[#fff]) mx-[1px] cursor-pointer bg-white hover:bg-orange" value={item?.value}>{item?.value}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            )
                        })}
                        <div className="pb-[20px]">
                            <h3>Dars boshlanish vaqti</h3>
                            <input required {...register("startTime")} type="text" placeholder="" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        {dateInputsData.map((item) => {
                            return (
                                <div key={item.id} className="pb-[20px]">
                                    <h3>{item.val1}</h3>
                                    <input required {...register(item.reg)} type="text" placeholder="Sanani tanlang" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px] pl-[35px] dateInp" />
                                </div>
                            )
                        })}
                        <div className="pb-[30px]">
                            <h3>Izoh</h3>
                            <input required {...register("startTime")} type="text" placeholder="" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <button type='submit' className='py-[13px] px-[20px] inline-flex items-center justify-center rounded-[15px] bg-[#F48221] text-[#fff]'>
                            <i className="fa-regular fa-circle-check mr-[5px]"></i>
                            <p>Saqlash</p>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default GroupHeader
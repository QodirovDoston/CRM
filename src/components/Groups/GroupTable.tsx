import { dateInputsData, group, modalSelectData } from "../../utils/Constants"
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import Drowdown from "./drowdown";

const GroupTable = () => {
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
  const [bool, setBool] = useState<boolean>(false)
  const [id, getId] = useState<any>(null)
  const { register, handleSubmit } = useForm();
  const submit = (data: any) => {
    console.log(data);
    console.log(id);
    group.map((item) => {
      if (item.id === id) {
        item.Guruh = data.groupName
        item.Kurslar = data.course
        item.name = data.teacher
        item.Xonalar = data.room
      }
    })
    setBool(!bool)
  }
  return (
    <div>
      <table className="w-full">
        <thead className="text-orange">
          <tr className="text-left text-[16px] h-9">
            <td className="font-medium">Guruh</td>
            <td className="font-medium">Kurs</td>
            <td className="font-medium">Mentor</td>
            <td className="font-medium">O'tilgan</td>
            <td className="font-medium">Talabalar</td>
            <td className="font-medium">Xonalar</td>
            <td className="font-medium">Amallar</td>
          </tr>
        </thead>
        <tbody>
          {group.map((value) => {
            return (
              <tr key={value.id} className="border-b-2 border-b-hrcolor border-t-[2px] border-t-hrcolor text-[14px] text-black h-10 text-left">
                <div className="my-[6px]">
                  <td className="text-[14px] text-black">{value.Guruh}</td>
                  <div className="flex gap-2">
                    <button className="bg-[#009F8F80] text-[13px] text-black rounded-3xl px-2">Active</button>
                    <p className="text-[13px] text-black">23.01.2023<span className="text-orange">/</span>17:00</p>
                  </div>
                </div>
                <td>{value.Kurslar}</td>
                <td>{value.name}</td>
                <div>
                  <td>{value.otilgan} </td>
                  <p className="text-[10px] text-black">23.09.2023 gacha</p>
                </div>
                <td>{value.Talabalar}</td>
                <td>{value.Xonalar} </td>
                <td className="relative">
                  <Drowdown setBool={setBool} bool={bool} id={value.id} getId={getId} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div ref={domNode} className={bool ? "z-50 border-y-0 overflow-y-scroll absolute top-0 right-0 h-full transition-all duration-[.7s] overflow-x-hidden bg-[#fff] border-[#eee] border-[1px]" : "z-50 border-y-0 overflow-y-scroll absolute top-0 right-[-390px] h-full transition-all duration-[.7s] overflow-x-hidden bg-[#fff] border-[#eee] border-[1px]"}>
        <div className='w-[385px] bg-[#fff] h-full'>
          <div className="py-[23px] px-[16px] flex justify-between">
            <h3 className='text-[#F48221] text-[17px] font-bold'>Talaba tahrirlash</h3>
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
    </div>
  )
}

export default GroupTable
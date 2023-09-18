import { CiEdit } from 'react-icons/ci'
import { RiDeleteBinLine } from 'react-icons/ri'
import { /*studentFullInfo,*/ studentSelfInfo } from '../../utils/Constants'
import { useEffect, useRef, useState } from "react"
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { userImg } from "../../assets/NavbarImgs";
import { ByIdStudents } from '../../api/Students/apiStudents';

const StudentAboutCard = () => {
  const [cardValue, setCardValue] = useState<any>()

  const param = useParams()

  const getByStudent = async (id: any) => {
    const res = await ByIdStudents(id)
    setCardValue(res?.data.data)
  }

  useEffect(() => {
    getByStudent(param?.id)
  }, [])
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
  const [bool, setBool] = useState(false)
  const { register, handleSubmit } = useForm();
  const submit = (data: any) => {
    studentSelfInfo.studentName = data.fullName;
    studentSelfInfo.direction = data.option;
    studentSelfInfo.addDate = data.birthDate;
    setBool(!bool)
  }
  const active = [
    {
      id: 1,
      value: "Active",
    },
    {
      id: 2,
      value: "Not Active",
    }
  ]
  return (
    <>
      {cardValue &&
        <div className="w-full h-full relative overflow-hidden shadow py-[15px] px-[20px] rounded-[10px] hover:shadow-xl duration-500 border-[#FFFF88]">
          <div className="flex items-center justify-between pb-[10px] border-b-[#EEEEEE] border-b-[1px]">
            <div className="flex items-center gap-[10px]">
              <img src={userImg} className="w-[44px] h-[44px] rounded-[15px] border[#F48221]" />
              <div>
                <h1 className='text-[#F48221] text-base font-semibold'>{cardValue?.fullName}</h1>
                <div className="flex items-center gap-1">
                  <span className='text-[10px] bg-[#009F8F80] w-[40px] py-1 text-center rounded-[5px]'>active</span>
                  <span className='text-[10px] text-[#444444] font-normal'>{cardValue.addedDate.slice(0, 10)}</span>
                  <span className='text-[10px] text-[#444444] font-normal'>{cardValue.birthdayDate.slice(0, 10)}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <button onClick={() => setBool(!bool)} className="py-[8px] px-[10px] rounded-[10px] text-white text-2xl bg-[#DDD21F]">
                <CiEdit />
              </button>
              <button className="py-[8px] px-[10px] rounded-[10px] text-white text-2xl bg-[#FF6666]">
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
          <h3 className="text-[#9B9B9B] text-xs font-normal mt-[10px]">Telefon:
            <span className="text-[#F48221]">{cardValue.phoneNumber}</span>
          </h3>
          <h3 className="text-[#9B9B9B] text-xs font-normal mt-[10px]">Ota-ona telefoni:
            <span className="text-[#F48221]">{cardValue.phoneNumber}</span>
          </h3>
          <h3 className="text-[#9B9B9B] text-xs font-normal mt-[10px]">Manzil:
            <span className="text-[#444444]"> Olmoliq</span>
          </h3>
          <h3 className="text-[#9B9B9B] text-xs font-normal mt-[10px]">Talaba qo'shilgan:
            <span className="text-[#444444]"> {cardValue.addedDate.slice(0, 10)}</span>
          </h3>
          <h3 className="text-[#9B9B9B] text-xs font-normal mt-[10px]">Tag:
            <span className="text-[10px] text-[#444444] bg-[#FF666680] w-[40px] py-1 px-2 text-center rounded-[5px]">Grant</span>
          </h3>
        </div>
      }
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div ref={domNode} className={bool ? "absolute top-0 right-0 h-full transition-all duration-[.7s] overflow-x-hidden overflow-y-scroll bg-[#fff] border-[#eee] border-[1px]" : "absolute top-0 right-[-390px] h-full transition-all duration-[.7s] overflow-x-hidden overflow-y-scroll bg-[#fff] border-[#eee] border-[1px]"}>
        <div className='w-[385px] bg-[#fff] h-full'>
          <div className="py-[23px] px-[16px] flex justify-between">
            <h3 className='text-[#F48221] text-[17px] font-bold'>Talaba tahrirlash</h3>
            <button className='fa-regular fa-circle-xmark text-[#F48221] text-[25px]' onClick={() => setBool(!bool)}></button>
          </div>
          <hr className='border-t-[1px] border-t-[#eee]' />
          <form className='px-[25px] pb-[25px] mt-[23px] text-[#444] text-[14px]' onSubmit={handleSubmit(submit)}>
            <div className="pb-[20px]">
              <h3>Talaba nomi</h3>
              <input required {...register("fullName")} type="text" placeholder="Abdujabbor Ibrohimov" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
            </div>
            <div className="pb-[20px]">
              <h3>Tanlash</h3>
              <select required {...register("option")} placeholder="Sanani tanlang" className="text-left border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px] flex items-center justify-between cursor-pointer">
                {active?.map((item) => {
                  return (
                    <option key={item?.id} className="py-[3px] pl-[20px] hover:(bg-[#F48221] text-[#fff]) mx-[1px] cursor-pointer" value={item?.value}>{item?.value}</option>
                  )
                })}
              </select>
            </div>
            <div className="pb-[20px]">
              <h3>Tug'ilgan sana</h3>
              <input required {...register("birthDate")} type="date" placeholder="Abdujabbor Ibrohimov" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
            </div>
            <div className="pb-[20px]">
              <h3>Telefon</h3>
              <input required {...register("phoneNumber")} type="text" placeholder="+998 94 412 70 70" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
            </div>
            <div className="pb-[20px]">
              <h3>Ota-ona telefoni</h3>
              <input required {...register("phoneNumber")} type="text" placeholder="+998 94 412 70 70" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
            </div>
            <div className="pb-[20px]">
              <h3>Manzil</h3>
              <input required {...register("phoneNumber")} type="text" placeholder="Abdulla Qodiriy 7/14" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
            </div>
            <div className="pb-[20px]">
              <h3>Talaba qo'shilgan</h3>
              <input required {...register("phoneNumber")} type="text" placeholder="Abdulla Qodiriy 7/14" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
            </div>
            <button type='submit' className='py-[13px] px-[20px] inline-flex items-center justify-center rounded-[15px] bg-[#F48221] text-[#fff]'>
              <i className="fa-regular fa-circle-check mr-[5px]"></i>
              <p>Saqlash</p>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default StudentAboutCard
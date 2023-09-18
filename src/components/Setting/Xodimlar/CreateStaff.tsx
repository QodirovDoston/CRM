import React, { Key, useEffect, useState } from 'react'
import clsx from 'clsx'
import { root } from "../../../style"
import { getStaff, createStaff, deletestaff, updateStaff, StaffById } from '../../../api/Staff/apiStaff'
import { toast } from 'react-toastify'
import { foundation } from '../../../assets/NavbarImgs'
import GroupCard from '../../Common/GroupCard'

const index = React.memo(() => {
  const [fullName, setFullName] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [mentor, setMentor] = useState<any>()
  const [phone, setPhone] = useState<string>()
  const [addedDate, setAddedDate] = useState<string>("NOW()")
  const [birthdayDate, setBirthdayDate] = useState<string>("NOW()")
  const [bool, setBool] = useState<boolean>()
  const [file, setFile] = useState<string>(" ");
  const [type, setType] = useState<string>("create")
  const [userId, setIdUser] = useState<any>()

  const getAllMentors = async () => {
    const res: any = await getStaff("0", "100", "mentor", "page")
    setMentor(res?.data?.data)
  }

  const getByStaff = async (id: any) => {
    const res: any = await StaffById(id)
    setFullName(res?.data?.data?.fullName)
    setPassword(res?.data?.data?.password)
    setPhone(res?.data?.data?.phoneNumber)
  }
  const getFile = (e: any) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const uto = [""]
  const mentorDelete = (id: any) => {
    deletestaff(id).then((res: any) => {
      toast.success(res?.status, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }).catch((err: any) => {
      toast.error(err?.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
  }
  const updateStaffFunc = (e: any, id: any) => {
    e.preventDefault()
    setBool(!bool)
    const data = {
      addedDate: addedDate,
      birthdayDate: birthdayDate,
      extraDta: {
        "additionalProp1": {}
      },
      fullName: fullName,
      id: id,
      phoneNumber: phone,
      photo: "string",
      role: "mentor"
    }
    updateStaff(data).then((res: any) => {
      setTimeout(() => {
        window?.location?.reload();
      }, 2000)
      setType("edit")
      toast.success(res.status, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }).catch((err: any) => {
      toast.error(err.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
  }
  const handleClick = (type: any, id: any) => {
    getByStaff(id)
    setIdUser(id)
    setBool(!bool)
    setType(type)
  }
  const postStaffFunc = (e: any) => {
    e.preventDefault()
    const data = {
      addedDate: addedDate,
      birthdayDate: birthdayDate,
      extraData: {
        "additionalProp1": {}
      },
      fullName: fullName,
      password: password,
      phoneNumber: phone,
      photo: "string",
      role: "mentor"
    }
    createStaff(data).then((res: any) => {
      setTimeout(() => {
        window?.location?.reload();
      }, 2000)
      if (res.status === 201) {
        toast.success("Mentor muvoffaqiyatli qo'shildi", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setBool(!bool)
      }
    }).catch(() => {
      toast.error("Xatolik mavjud", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
  }
  
  useEffect(() => {
    getAllMentors()
  }, [])

  return (
    <>
      <div className='w-[1380px]'>
        <div className={clsx(" flex flex-wrap gap-10 justify-start ml-[-38px] overflow-y-scroll   h-[580px]  w-full  scrol", root.container)}>
          {mentor?.map((value: any) => {
            return (
              <GroupCard
                fullName={value?.fullName}
                img={foundation}
                phoneNumber={value?.phoneNumber}
                key={value?.id}
                sana={value?.birthdayDate.slice(0, 10)}
                students='12 ta'
                updathandle={() => handleClick("edit", value?.id)}
                deleteHanle={() => mentorDelete(value?.id)}
                description={value?.birthdayDate}
                phone_text="Telefon: "
                status_text="Tug'lgan kun:"
                price_text="Telefon:"
                duration_text="Davomiyligi:"
                learner_count_text="Rol:"
                lesson_duration_text="Guruhlari soni:"
                learner_count={value.role}
                Status_style="hidden"
                actve_style="hidden"
                brthday_style="flex items-center text-[14px] text-[#9B9B9B]"
                sana_style='text-[13px] rounded-[6px] p-[2px] mt-[2px] ml-[4px] cursor-pointer text-[#444444]'
                learner_style="text-black ml-[6px] bg-[#FF8466]  rounded-lg px-3 py-[1px] text-[13px] "
              />)
          })}
        </div>
        <div className="flex justify-end w-full items-center  mt-[30px]">
          <button className='text-[17px]   text-[#fff] font-semibold bg-[#F48221] rounded-[15px] px-[30px] py-[13px] mr-24' onClick={() => setBool(!bool)}>+  Hodim yaratish</button>
        </div>
        <div className={!bool ? "overflow-y-hidde h-[770px] hidden absolute right-[-400px] top-0 transition-all duration-[.7s] w-[385px] bg-[#fff]" : "h-[755px] absolute right-0 top-0 transition-all duration-[.7s] w-[385px] bg-[#fff]"} style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.15)" }}>
          <div className=" flex items-center justify-between pt-[13px] px-[25px]">
            {type === "create" ?
              <h2 className='text-[#F48221] text-[17px] font-semibold mb-0'>Hodim qo'shish</h2>
              : <h2 className='text-[#F48221] text-[17px] font-semibold mb-0'>Hodim tahrirlash</h2>
            }
            <button className='bg-[#F48221] fa-solid fa-xmark text-[#fff] w-[40px] h-[40px] flex items-center justify-center rounded-[5px]' onClick={() => setBool(!bool)}></button>
          </div>
          <hr className='border-t-[1px] border-t-[#eee] mb-[25px] mt-[13px]' />
          <form className='px-[25px] pb-[25px] text-[#444] text-[14px] h-full'>
            <div className="pb-[15px]">
              <h3>O'qituvchi nomi</h3>
              <input required type="text" value={fullName} onChange={(e: any) => setFullName(e?.target?.value)} placeholder="Abdujabbor Ibrohimov" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
            </div>
            <div className="pb-[15px]">
              <h3>Telefon raqami</h3>
              <input required type="text" value={phone} onChange={(e: any) => setPhone(e?.target?.value)} placeholder="+998" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
            </div>
            <label htmlFor="">
              Tug'ilgan sanasi
            </label>
            <input type="date" className='dateInp border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px] pl-[35px]' data-date="" data-date-format="DD MMMM YYYY" value={birthdayDate} onChange={(e: any) => setBirthdayDate(e?.target?.value)} placeholder="Tug'ulgan sanasi" />
            <label htmlFor="">
              Qo'shilgan sanasi
            </label>
            <input type="date" className='dateInp border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px] pl-[35px]' data-date="" data-date-format="DD MMMM YYYY" value={addedDate} onChange={(e: any) => setAddedDate(e?.target?.value)} placeholder="Qo'shilgan sanasi" />
            <div>
              <h3>Parol bering</h3>
              <input type="text" value={password} onChange={(e: any) => setPassword(e?.target?.value)} placeholder="Parol Bering" className="passInp border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px] pl-[35px]" />
            </div>
            <div className="mt-[20px]">
              <h3>Suratni yuklash</h3>
              <div className='flex justify-between mt-[10px]'>
                <div className='flex justify-between'>
                  {uto.map(([]: any, index: Key | null | undefined) => {
                    if (file == " ") {
                      return (
                        <div key={index} className='w-[44px] h-[44px] rounded-[15px] bg-[#F8F8F8] p-[10px] inline-flex items-center justify-center text-[16px] text-[#F48221] cursor-pointer'>
                          <i className="fa-regular fa-image"></i>
                        </div>
                      )
                    } else {
                      return (
                        <div key={index} className="w-[44px] h-[44px] rounded-[50em] overflow-hidden">
                          <img className='w-full h-full' src={file} />
                        </div>
                      )
                    }
                  })}
                </div>
                <div className="relative">
                  <input id="image" className='opacity-0 file-selector-button:cursor-pointer absolute top-0 right-0 w-[29px] h-[22px] cursor-pointer' type="file" onChange={(e) => getFile(e)} />
                  <label htmlFor="image" className='z-10 w-[44px] h-[44px] rounded-[15px] bg-[#F48221] p-[10px] inline-flex items-center justify-center text-[16px] text-[#fff] cursor-pointer'>
                    <i className="fa-solid fa-download"></i>
                  </label>
                </div>
              </div>
              <h3 className='mt-[10px] mb-[20px] text-[#8C8C8C] text-[11px] font-semibold'><span className='text-[#F48221]'>Eslatma:</span> Suratni asosiy qilish uchun uni tanlang.
                Yangi surat yuklaganingizda, surat bo'yi va eni 86 pixel
                bo'lishi lozim. Yangi surat yuklasangiz eski surat avtomatik
                o'chiriladi.</h3>
            </div>

            {type === "create" ?
              <button className='py-[10px]  px-[20px] inline-flex items-center justify-center rounded-[15px] bg-[#F48221] text-[#fff]' onClick={(e: any) => postStaffFunc(e)} >
                <i className="fa-regular fa-circle-check mr-[5px]"></i>
                <p>Saqlash</p>
              </button>
              : <button className='py-[10px]  px-[20px] inline-flex items-center justify-center rounded-[15px] bg-[#F48221] text-[#fff]' onClick={(e: any) => updateStaffFunc(e, userId)} >
                <i className="fa-regular fa-circle-check mr-[5px]"></i>
                <p>Saqlash</p>
              </button>
            }
          </form>
        </div>
      </div>
    </>
  )
})

export default index



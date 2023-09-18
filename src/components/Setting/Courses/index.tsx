import clsx from "clsx"
import { root } from "../../../style"
import React, { Key, useEffect, useState } from "react"
import { foundation } from "../../../assets/NavbarImgs"
import { coursePageById, deleteCourse, getCourses, postCourseApi, updateCoursePage } from "../../../api/courses/coursesApi"
import GroupCard from "../../Common/GroupCard"
import { toast } from "react-toastify"

const Courses = () => {
    const [bool, setBool] = useState<boolean>(false)
    const [file] = useState<string>(" ");
    const [course, setCourse] = useState<any>()
    const [coursename, setCourseName] = useState<any>()
    const [courseduration, setCourseDuration] = useState<any>()
    const [duration, setDuration] = useState<any>()
    const [type, setType] = useState<string>()
    const [idcourse, setIdCourse] = useState<any>()

    const postCourse = (e: any) => {
        e.preventDefault()
        let data = {
            description: "lorem ipsom",
            duration: duration,
            lesson_duration: courseduration,
            photo: "string",
            price: 0,
            status: true,
            title: coursename
        }
        postCourseApi(data).then((res: any) => {
            setTimeout(() => {
                window?.location?.reload();
            }, 2000)
            if (res?.status === 201) {
                toast.success("Kurs muvoffaqiyatli qo'shildi", {
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
    const getAllCourse = async () => {
        const res: any = await getCourses("0", "100")
        setCourse(res?.data?.data)
    }



    useEffect(() => {
        getAllCourse()
    }, [])
    const uto = [""]
    const mentorDelete = (id: any) => {
        deleteCourse(id).then((res: any) => {
            if (res.status === 200) {
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
    const getByCourse = async (id: any) => {
        const res: any = await coursePageById(id)
        setCourseName(res?.data?.data?.title)
        setCourseDuration(res?.data?.data?.lesson_duration)
        setDuration(res?.data?.data?.duration)
    }

    const handleClick = (id: any, type: any) => {
        setBool(!bool)
        setType(type)
        getByCourse(id)
        setIdCourse(id)
    }

    const openModal = () => {
        setBool(!bool)
        setType("create")
    }


    const updateCourses = (e: any) => {
        e.preventDefault()
        setType("edit")
        let data = {
            description: "string",
            duration: duration,
            id: idcourse,
            lesson_duration: courseduration,
            photo: "string",
            price: 0,
            status: true,
            title: coursename
        }
        updateCoursePage(data).then((res: any) => {
            if (res.status === 200) {
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
                setTimeout(() => {
                    window?.location?.reload();
                }, 2000)
            }
        }).catch(() => {
            toast.error("Error", {
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
    return (
        <>
            <div className='w-[1380px]'>
                <div className={clsx("flex flex-wrap gap-10 justify-start ml-[-38px]   w-full", root.container)}>
                    {course?.filter((el: any) => el !== idcourse)?.map((value: any) => {
                        return (
                            <React.Fragment key={value?.id}>
                                <GroupCard
                                    phone_text="Telefon: "
                                    status_text="Holat: "
                                    price_text="Narx:"
                                    duration_text="Davomiyligi: "
                                    learner_count_text="Talabalar soni: "
                                    lesson_duration_text="Davomiyligi: "
                                    description_text="Kurs davomiyligi 7 oy etib belgilangan"
                                    fullName={value?.title}
                                    img={foundation}
                                    phoneNumber={value?.price + "so'm"}
                                    key={value?.id}
                                    birthdayDate={value?.price}
                                    students={value?.lesson_duration}
                                    type={value?.type}
                                    role={value?.role}
                                    duration={value?.duration}
                                    learner_count={value?.learner_count}
                                    lesson_duration={value?.lesson_duration}
                                    price={value?.price}
                                    status={value?.status}
                                    title={value?.title}
                                    description={value?.description}
                                    updathandle={() => handleClick(value?.id, "edit")}
                                    deleteHanle={() => mentorDelete(value?.id)}
                                    Status_style="text-black"
                                    actve_style="hidden"
                                    brthday_style="flex items-center text-[14px] text-[#9B9B9B]"
                                    sana_style='text-[13px] px-[30px] py-[8px] rounded-[6px] bg-[#009F8F] p-[2px] mt-[2px] ml-[4px] cursor-pointer text-[#444444]'
                                    learner_style='ml-[3px] text-orange rounded-lg px-3 text-[13px]'
                                />
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className="flex justify-end"></div>
                <div className="" style={{ marginTop: "30px", marginBottom: "10px" }}>
                    <button className='text-[17px]   text-[#fff] font-semibold bg-[#F48221] rounded-[15px] px-[30px] py-[13px]' onClick={() => openModal()}>+ Kurs yaratish</button>
                </div>
                <div className={!bool ? "overflow-y-hidde  absolute right-[-400px] top-0 transition-all duration-[.7s] w-[385px] bg-[#fff]" : "h-[100%] absolute right-0 top-0 transition-all duration-[.7s] w-[385px] bg-[#fff]"} style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.15)" }}>
                    <div className=" flex items-center justify-between pt-[13px] px-[25px]">
                        <h2 className='text-[#F48221] text-[17px] font-semibold mb-0'>Mentor qo'shish</h2>
                        <button className='bg-[#F48221] fa-solid fa-xmark text-[#fff] w-[40px] h-[40px] flex items-center justify-center rounded-[5px]' onClick={() => setBool(!bool)}></button>
                    </div>
                    <hr className='border-t-[1px] border-t-[#eee] mb-[25px] mt-[13px]' />
                    <form className='px-[25px] pb-[25px] text-[#444] text-[14px] h-full'>
                        <div className="pb-[20px]">
                            <h3>Kurs nomi</h3>
                            <input required value={coursename} onChange={(e: any) => setCourseName(e.target.value)} type="text" placeholder="Foundation" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Kurs davomiyligi</h3>
                            <input required value={courseduration} onChange={(e: any) => setCourseDuration(e.target.value)} type="text" placeholder="8 oy" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Davomiyligi (daqiqa)</h3>
                            <input type="text" value={duration} onChange={(e: any) => setDuration(e.target.value)} placeholder="Daqiqada kiriting" className="dateInp border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Narx</h3>
                            <input type="text" placeholder="899 000 so'm" className="dateInp border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
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
                                                    {/* <img className='w-full h-full' src={file} /> */}
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="relative">
                                    <input id="image" className='opacity-0 file-selector-button:cursor-pointer absolute top-0 right-0 w-[29px] h-[22px] cursor-pointer' type="file" />
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
                            <button onClick={(e: any) => postCourse(e)} className='py-[10px]  px-[20px] inline-flex items-center justify-center rounded-[15px] bg-[#F48221] text-[#fff]'  >
                                <i className="fa-regular fa-circle-check mr-[5px]"></i>
                                <p>Saqlash</p>
                            </button>
                            : <button onClick={(e: any) => updateCourses(e)} className='py-[10px]  px-[20px] inline-flex items-center justify-center rounded-[15px] bg-[#F48221] text-[#fff]'  >
                                <i className="fa-regular fa-circle-check mr-[5px]"></i>
                                <p>Saqlash</p>
                            </button>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default Courses
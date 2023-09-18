import { JSXElementConstructor, Key, ReactElement, ReactNode, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { courses, icons, inp } from "../../utils/Constants";
import { Inputs } from "../../types";
import { createStudents } from '../../api/Students/apiStudents'
import { toast } from "react-toastify";

const ChiqimniKiritish = ({ setShow2, show2 }: any) => {

    const [showInp, setShowInp] = useState<Boolean>(false)
    const handleClik = (id: any) => {
        inp[id - 1].class = "pb-[20px]"
        setShowInp(!showInp)
    }
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
        try {
            const response = await createStudents(data);
            setTimeout(() => {
                window?.location?.reload();
            }, 500)
            toast.success(response.status, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error: any) {
            toast.error(error?.message, {
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
    }
    return (
        <>
            <div className='flex justify-start '>
                <div className='w-[485px]'>
                    <div className="py-[21px] pl-[16px] flex gap-32 px-5">
                        <h3 className='text-[#F48221] text-[17px] font-bold flex items-center'>Chiqimni kiritish</h3>
                        <button className='bg-[#F48221] fa-solid fa-xmark text-[#fff] w-[40px] h-[40px] flex items-center justify-center rounded-[5px]' onClick={() => setShow2(!show2)}></button>
                    </div>
                    <hr className="border-t-[2px] border-t-hrcolor" />
                    <form onSubmit={handleSubmit(onSubmit)} className='px-[25px] pb-[25px] mt-[23px] text-[#444] text-[14px]  2xl:h-[735px] xl:h-[717px]  overflow-y-scroll scrol'>
                        <div className="pb-[20px]">
                            <h3>Yomon inson ismi</h3>
                            <input required type="text" placeholder='Abdujabbor Ibrohimov' className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("fullName")} />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Telefon raqami</h3>
                            <input required type="text" placeholder="Telefon raqami" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("phoneNumber")} />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Tug'ilgan sanasi</h3>
                            <input type="date" data-date="" data-date-format="DD MMMM YYYY" placeholder="Sanani tanlang" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("birthdayDate")} />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Qo'shilgan sana</h3>
                            <input type="date" data-date="" data-date-format="DD MMMM YYYY" placeholder="Qo'shilgan sana" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("addedDate")} />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Role bering</h3>
                            <input required type="text" placeholder="Role bering" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("role")} />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Guruhga qo'shish</h3>
                            <select placeholder="Sanani tanlang" className="text-left border-[1px] border-[#444] bg-white w-full p-[10px] rounded-[15px] mt-[10px] flex items-center justify-between cursor-pointer">
                                {courses?.map((item: { id: Key | null | undefined; course: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => {
                                    return (
                                        <option key={item?.id} className="py-[3px] pl-[20px] hover:(bg-[#F48221] text-[#fff]) mx-[1px] cursor-pointer" {...register("group")} > {item?.course}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="pb-[20px]">
                            <h3>Izoh</h3>
                            <textarea placeholder="Comment..." required className='border-[1px] border-[#444] rounded-[15px] w-full h-[80px] mt-[10px] p-[10px]' {...register("comment")}></textarea>
                        </div>
                        <div className="pb-[20px]">
                            <h3>Parol bering</h3>
                            <input placeholder="Parol kiritish" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("password")} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        {inp.map((item: any) => {
                            return (
                                <div key={item.id} className={item.class}>
                                    <h3>{item.title}</h3>
                                    <input
                                        {...register(item.reg)}
                                        type={item.type}
                                        placeholder={item.plaholder}
                                        className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                                </div>
                            )
                        })}
                        <div className="pb-[20px]">
                            <h3>Qo'shing</h3>
                            <div className="flex items-center justify-start mt-[10px]">
                                {icons?.map((item: { id: number; i_class: string; }) => {
                                    return (
                                        <i onClick={() => { handleClik(item?.id) }}
                                            key={item?.id}
                                            className={item?.i_class + ' cursor-pointer flex justify-center items-center  w-[30px] h-[30px] border-[2px] border-[#F48221] text-[#F48221] text-[16px] rounded-[50em] mr-[5px]'}></i>
                                    )
                                })}
                            </div>
                        </div>
                        <button type='submit' className='py-[13px] mb-5 px-[20px] inline-flex items-center justify-center rounded-[15px] bg-[#F48221] text-[#fff]'>
                            <i className="fa-regular fa-circle-check mr-[5px]"></i>
                            <p>Saqlash</p>
                        </button>
                    </form>
                    <hr className="border-t-[2px] border-t-hrcolor mt-[10px]" />
                </div>
            </div>
        </>
    );
}

export default ChiqimniKiritish;
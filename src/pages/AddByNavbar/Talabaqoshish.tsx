// import { JSXElementConstructor, Key, ReactElement, ReactNode, useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { courses, icons, inp } from "../../utils/Constants";
// import { Inputs } from "../../types";
// import { createStudents } from '../../api/Students/apiStudents'
// import { toast } from "react-toastify";
// import moment from "moment";
import { downlode, picture } from "../../assets/NavbarImgs";
import { postImage } from "../../api/ImgUplode/apimgUplode";
import { useState } from "react";

const Talabaqoshish: React.FC<{ setShow: (show: boolean) => void; show: boolean }> = ({ setShow, show }) => {
        const [imageFile, setImageFile] = useState<any>();
        const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files) {
                var file = event.target.files[0];
                console.log(file);
                setImageFile(file);
            }
        }
        const handleSubmitImg = async () => {
            const formData = new FormData()
            formData.append('files', imageFile)
            try{
                const response = await postImage(formData);
                console.log(response.status);
            }catch(error: any){
                console.log(error);
            }
        };
    // const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    // const onSubmit: SubmitHandler<Inputs> = async (data: any) => {

    //     const body: any = JSON.stringify({
    //         addedDate: moment(data.addedDate).format("YYYY-MM-DDTHH:mm:ssZ"),
    //         birthdayDate: moment(data.birthdayDate).format("YYYY-MM-DDTHH:mm:ssZ"),
    //         extraData: {
    //             additionalProp1: {
    //                 qoshimchaTell: data?.qoshimchaTell,
    //                 id: data?.id,
    //                 otaOna: data?.otaOna,
    //                 gmail: data?.gmail,
    //                 username: data?.username,
    //                 map: data?.map,
    //                 pasport: data?.pasport,
    //                 tag: data?.tag,
    //                 CheagirmaNarx: data?.CheagirmaNarx,
    //             }
    //         },
    //         fullName: data.fullName,
    //         password: data.password,
    //         phoneNumber: data.phoneNumber,
    //         photo: imageFile,
    //         role: data.role
    //     })
    //     const jsdata = JSON.stringify(body)
    //     try {
    //         const datas = new FormData()
    //         Object.keys(jsdata).forEach((key: any) => {
    //             datas.append(key, jsdata[key])
    //         })
    //         const response = await createStudents(datas);
    //         console.log(response);
    //         setTimeout(() => {
    //             window?.location?.reload();
    //         }, 500)
    //         toast.success(response.status, {
    //             position: "top-center",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //         console.log(response);
    //     } catch (error: any) {
    //         // console.log(error);
    //         toast.error(error?.message, {
    //             position: "top-center",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //     }
    // }
    // const [showInp, setShowInp] = useState<Boolean>(false)
    // const handleClik = (id: any) => {
    //     inp[id - 1].class = "pb-[20px]"
    //     setShowInp(!showInp)
    // }
    return (
        <>
            <div className='flex justify-start'>
                <div className='w-[485px]'>
                    <div className="py-[18px] pl-[16px] flex gap-32 px-5">
                        <h3 className='text-[#F48221] text-[17px] font-bold flex items-center'>Talaba qo'shish</h3>
                        <button className='bg-[#F48221] fa-solid fa-xmark text-[#fff] w-[40px] h-[40px] flex items-center justify-center rounded-[5px]' onClick={() => setShow(!show)}></button>
                    </div>
                    <hr className="border-t-[2px] border-t-hrcolor" />
                    {/* <form onSubmit={handleSubmit(onSubmit)} className='px-[25px] pb-[25px] mt-[23px] text-[#444] text-[14px] 2xl:h-[767px] xl:h-[717px]  lg:h-[760px]  overflow-y-scroll scrol'>
                        <div className="pb-[20px]">
                            <h3>Talaba nomi</h3>
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
                        <div className="pl-[25px] ">
                            <h1 className="mb-[10px] font-normal text-[14px] text-[#444444]">
                                Suratni yuklash
                            </h1>
                            <div className="w-[334px] flex justify-between">
                                <button onClick={() => handleSubmitImg} className="w-[44px] h-[44px] bg-[#F8F8F8] rounded-[5px] flex justify-center items-center">
                                    <img src={picture} alt="" />
                                </button>
                                <button className="w-[44px] h-[44px] bg-[#F48221] rounded-[15px] flex justify-center items-center">
                                    <input type="file" onChange={handleSelectFile} />
                                    <img src={downlode} alt="" />
                                </button>
                            </div>
                            <p className="font-normal mt-[10px] leading-[15px] text-[11px] text-[#8C8C8C]">
                                <span className="text-[#F48221] font-medium">Eslatma:</span> Suratni
                                asosiy qilish uchun uni tanlang. <br />
                                Yangi surat yuklaganingizda, surat bo'yi va eni 86 pixel <br />
                                bo'lishi lozim. Yangi surat yuklasangiz eski surat avtomatik
                                o'chiriladi.
                            </p>
                        </div>
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
                    </form> */}
                    <div className="w-[334px] flex justify-between">
                        <button className="w-[44px] h-[44px] bg-[#F48221] rounded-[15px] flex justify-center items-center">
                            <input type="file" onChange={handleSelectFile} />
                            <img src={downlode} alt="" />
                        </button>
                        <button onClick={handleSubmitImg} className="w-[44px] h-[44px] bg-[#F8F8F8] rounded-[5px] flex justify-center items-center">
                            <img src={picture} alt="" />
                        </button>
                    </div>
                    <hr className="border-t-[2px] border-t-hrcolor mt-[10px]" />
                </div>
            </div>
        </>
    );
}

export default Talabaqoshish;
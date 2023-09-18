import { useForm } from 'react-hook-form';

const Talabatahrirlash = () => {
    const icons = [
        {
            id: 1,
            i_class: "fa-solid fa-phone"
        },
        {
            id: 2,
            i_class: "fa-solid fa-key"
        },
        {
            id: 3,
            i_class: "fa-solid fa-circle-user"
        },
        {
            id: 4,
            i_class: "fa-solid fa-envelope"
        },
        {
            id: 5,
            i_class: "fa-brands fa-telegram"
        },
        {
            id: 6,
            i_class: "fa-solid fa-location-dot"
        },
        {
            id: 7,
            i_class: "fa-solid fa-address-card"
        },
        {
            id: 8,
            i_class: "fa-solid fa-tag"
        },
        {
            id: 9,
            i_class: "fa-solid fa-arrow-trend-down"
        },
    ]
    const courses = [
        {
            id: 1,
            course: "Frontend 05"
        },
        {
            id: 2,
            course: "Foundation 02"
        },
    ]
    const { register, handleSubmit } = useForm();
    const submit = (data: any) => {
        console.log(data);
    }
    return (
        <>
            <div className='flex justify-start'>
                <div className='w-[385px]'>
                    <div className="py-[23px] pl-[16px]">
                        <h3 className='text-[#F48221] text-[17px] font-bold'>Talaba tahrirlash</h3>
                    </div>
                    <hr className='border-t-[1px] border-t-[#eee]' />
                    <form className='px-[25px] pb-[25px] mt-[23px] text-[#444] text-[14px] h-full' onSubmit={handleSubmit(submit)}>
                        <div className="pb-[20px]">
                            <h3>Talaba nomi</h3>
                            <input required type="text" placeholder="Abdujabbor Ibrohimov" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("fullName")} />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Telefon raqami</h3>
                            <input required type="text" placeholder="+998 94 412 70 70" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("phoneNumber")} />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Tug'ilgan sanasi</h3>
                            <input required type="date" placeholder="Sanani tanlang" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("birthDate")} />
                        </div>
                        <div className="pb-[20px] relative">
                            <h3>Guruhga qo'shish</h3>
                            <select required {...register("group")} placeholder="Sanani tanlang" className="text-left border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px] flex items-center justify-between cursor-pointer">
                                {courses?.map((item) => {
                                    return (
                                        <option key={item?.id} className="py-[3px] pl-[20px] hover:(bg-[#F48221] text-[#fff]) mx-[1px] cursor-pointer" value={item?.course}>{item?.course}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="pb-[20px]">
                            <h3>Izoh</h3>
                            <input required className='border-[1px] border-[#444] rounded-[15px] w-full h-[80px] mt-[10px] p-[10px]' {...register("comment")}></input>
                        </div>
                        <div className="pb-[20px]">
                            <h3>Parol bering</h3>
                            <input required type="password" placeholder="Parol kiritish" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("password")} />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Qo'shing</h3>
                            <div className="flex items-center justify-start mt-[10px]">
                                {icons?.map((item) => {
                                    return (
                                        <button key={item?.id} className={item?.i_class + ' w-[30px] h-[30px] border-[2px] border-[#F48221] text-[#F48221] text-[16px] rounded-[50em] mr-[5px]'}></button>
                                    )
                                })}
                            </div>
                        </div>
                        <button type='submit' className='py-[13px] px-[20px] inline-flex items-center justify-center rounded-[15px] bg-[#F48221] text-[#fff]'>
                            <i className="fa-regular fa-circle-check mr-[5px]"></i>
                            <p>Saqlash</p>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Talabatahrirlash;

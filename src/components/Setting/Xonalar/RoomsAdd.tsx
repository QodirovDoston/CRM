import { _merger } from "chart.js/helpers";
import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form";

const RoomsAdd = ({ bool2, setBool2 }: any) => {
    const { register, handleSubmit } = useForm();
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
        setBool2(false)
    })
    const NewDate: any = new Date();
    const day = NewDate.getDate().toString()
    const month = NewDate.getMonth().toString()
    const year = NewDate.getFullYear().toString()
    const submit = (data: any) => {
        data.date = `${day.length == 1 ? "0" + day : day}.${month.length == 1 ? "0" + month : month}.${year}`
        console.log(data);
        setBool2(!bool2)
    }
    const types = [
        {
            id: 1,
            value: "Frontend",
        },
        {
            id: 2,
            value: "Backend",
        },
        {
            id: 3,
            value: "DevOps",
        },
        {
            id: 4,
            value: "Quality Assurance",
        },
        {
            id: 5,
            value: "Project Manager",
        }
    ]
    return (
        <>
            <div ref={domNode} className={bool2 ? "absolute top-0 right-0 h-full transition-all duration-[.7s] overflow-x-hidden overflow-y-scroll bg-[#fff] border-[#eee] border-[1px]" : "absolute top-0 right-[-390px] h-full transition-all duration-[.7s] overflow-x-hidden overflow-y-scroll bg-[#fff] border-[#eee] border-[1px]"}>
                <div className='w-[385px] bg-[#fff] h-full'>
                    <div className="py-[23px] px-[16px] flex justify-between">
                        <h3 className='text-[#F48221] text-[17px] font-bold'>Xona yaratish</h3>
                        <button className='fa-regular fa-circle-xmark text-[#F48221] text-[25px]' onClick={() => setBool2(!bool2)}></button>
                    </div>
                    <hr className='border-t-[1px] border-t-[#eee]' />
                    <form className='px-[25px] pb-[25px] mt-[23px] text-[#444] text-[14px]' onSubmit={handleSubmit(submit)}>
                        <div className="pb-[20px]">
                            <h3>Xona nomi</h3>
                            <select required {...register("roomName")} placeholder="Sanani tanlang" className="text-left bg-[#fff] border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px] flex items-center justify-between cursor-pointer">
                                <option selected disabled hidden className="py-[3px] pl-[20px] hover:(bg-[#F48221] text-[#fff]) mx-[1px] cursor-pointer bg-white hover:bg-orange" value=""></option>
                                {types?.map((item) => {
                                    return (
                                        <option key={item?.id} className="py-[3px] pl-[20px] hover:(bg-[#F48221] text-[#fff]) mx-[1px] cursor-pointer" value={item?.value}>{item?.value}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="pb-[20px]">
                            <h3>Xona</h3>
                            <input required {...register("roomNumber")} type="number" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Ochilish vaqti</h3>
                            <input required {...register("openDate")} type="text" placeholder="Vaqtni tanlang" className="OpenCloseInp pl-[35px] border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Yopilish vaqti</h3>
                            <input required {...register("closeDate")} type="text" placeholder="Vaqtni tanlang" className="OpenCloseInp pl-[35px] border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Izohlar</h3>
                            <input required {...register("comment")} type="text" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
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

export default RoomsAdd
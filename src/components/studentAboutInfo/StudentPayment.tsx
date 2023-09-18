import { CiEdit } from 'react-icons/ci'
import { HiMiniPrinter } from 'react-icons/hi2'
import { VscError } from 'react-icons/vsc'
import { studentPaymentHistory, studentPaymentHistoryItem } from '../../utils/Constants'
import { useEffect, useRef, useState } from "react"
import { useForm } from 'react-hook-form';

export default function StudentPayment() {
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
    const [True, setTrue] = useState(false)
    const [getId, setGetId] = useState()
    const [bool, setBool] = useState(false)
    const { register, handleSubmit } = useForm();
    const submit = (data: any) => {
        studentPaymentHistory.map((item) => {
            if (item.id == getId) {
                item.lastPaymentDate = data.date;
                item.summa = data.amount;
                item.groupName = data.comment;
                item.studentName = data.fullName;
            }
        });
        setBool(!bool)
    }
    const deleteBtn = (id: any) => {
        delete studentPaymentHistory[id]
        setTimeout(() => {
            setTrue(!True)
        }, 100)
        setTimeout(() => {
            setTrue(!True)
        }, 1400)
    }
    return (
        <div>
            <div className="w-[710px] shadow py-[15px] px-[20px] rounded-[10px] hover:shadow-xl duration-500 border-[#FFFF88]">
                <div className="border-b-[1px] border-b-[#EEEEEE] pb-[10px]">
                    <h1 className='text-[#F48221] text-base font-semibold '>To'lovlar tarixi</h1>
                </div>
                <table className='w-[100%]'>
                    <thead className='text-left'>
                        <tr>
                            <th className="text-[#F48221] text-sm py-3">{studentPaymentHistoryItem.date}</th>
                            <th className="text-[#F48221] text-sm py-3">{studentPaymentHistoryItem.amount}</th>
                            <th className="text-[#F48221] text-sm py-3">{studentPaymentHistoryItem.comment}</th>
                            <th className="text-[#F48221] text-sm py-3">{studentPaymentHistoryItem.worker}</th>
                            <th className="text-[#F48221] text-sm py-3">{studentPaymentHistoryItem.deeds}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentPaymentHistory.map((item: any) => {
                            return (
                                <tr key={item.id}>
                                    <td><span className="text-[#444444] text-[13px]">{item.lastPaymentDate}</span></td>
                                    <td><span className="text-[#444444] text-[13px]">{item.summa}</span></td>
                                    <td><span className="text-[10px] text-[#444444] bg-[#009F8F80] w-[80px]  text-center rounded-[5px] p-[2px]">{item.groupName}</span></td>
                                    <td><span className="text-[#444444] text-[13px] pl-3">{item.studentName}</span></td>
                                    <td className='flex items-center gap-0.2 py-3'>
                                        <HiMiniPrinter className='text-[#009F8F80] hover:text-green-600 duration-200 text-2xl cursor-pointer' />
                                        <CiEdit className='text-[#F48221] hover:text-yellow-600 duration-200 text-2xl cursor-pointer' onClick={() => {
                                            setGetId(item.id)
                                            setBool(!bool)
                                        }} />
                                        <VscError className='text-2xl text-[red] cursor-pointer' onClick={() => deleteBtn(item.id)} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div ref={domNode} className={bool ? "absolute top-0 right-0 h-full transition-all duration-[.7s]" : "absolute top-0 right-[-390px] h-full transition-all duration-[.7s]"}>
                <div className='w-[385px] bg-[#fff] border-[#eee] h-full border-[1px]'>
                    <div className="py-[23px] px-[16px] flex justify-between">
                        <h3 className='text-[#F48221] text-[17px] font-bold'>To'lovni tahrirlash</h3>
                        <button className='fa-regular fa-circle-xmark text-[#F48221] text-[25px]' onClick={() => setBool(!bool)}></button>
                    </div>
                    <hr className='border-t-[1px] border-t-[#eee]' />
                    <form className='px-[25px] pb-[25px] mt-[23px] text-[#444] text-[14px]' onSubmit={handleSubmit(submit)}>
                        <div className="pb-[20px]">
                            <h3>Talaba nomi</h3>
                            <input required {...register("fullName")} type="text" placeholder="Abdujabbor Ibrohimov" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Miqdor</h3>
                            <input required {...register("amount")} type="text" placeholder="899 000" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Sana</h3>
                            <input required {...register("date")} type="date" placeholder="Abdujabbor Ibrohimov" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Izoh</h3>
                            <input required {...register("comment")} type="text" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <button type='submit' className='py-[13px] px-[20px] inline-flex items-center justify-center rounded-[15px] bg-[#F48221] text-[#fff]'>
                            <i className="fa-regular fa-circle-check mr-[5px]"></i>
                            <p>Saqlash</p>
                        </button>
                    </form>
                </div>
            </div>
            <div className={!True ? "hidden fixed top-[5%] left-[50%] bg-red p-[10px] rounded-[15px]" : "fixed top-[5%] left-[50%] bg-red p-[10px] rounded-[15px] hidden"}>
                <h1>deleted</h1>
            </div>
        </div>
    )
}

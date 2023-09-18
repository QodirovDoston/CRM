import { RiDeleteBinLine } from 'react-icons/ri'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { notesStudentAddition, sudentsNotes } from '../../utils/Constants'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ByIdStudents } from '../../api/Students/apiStudents'

export default function StudentNotes() {
    const [cardValue, setCardValue] = useState<any>()
    const param = useParams()
    const getByStudent = async (id: any) => {
        const res = await ByIdStudents(id)
        setCardValue(res?.data.data)
    }
    useEffect(() => {
        getByStudent(param?.id)
    }, [])

    return (
        <div className="w-[710px] mt-[10px] shadow py-[15px] px-[20px] rounded-[10px] hover:shadow-xl duration-500 border-[#FFFF88] ">
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className='text-[#F48221] text-base font-semibold '>Eslatma</h1>
                        <span className='text-[10px] bg-[#FF666680] w-[40px] py-1 px-1 text-center rounded-[5px] mr-[10] capitalize'>{notesStudentAddition.studentGroup} </span>
                        <span className='text-[10px] bg-blue-200 w-[40px] py-1 px-1 text-center rounded-[5px] capitalize'>{notesStudentAddition.direction} </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="py-[8px] px-[10px] rounded-[10px] text-white text-2xl bg-[#F48221]">
                            <AiOutlinePlusCircle />
                        </button>
                        <button className="py-[8px] px-[10px] rounded-[10px] text-white text-2xl bg-[#FF6666]">
                            <RiDeleteBinLine />
                        </button>
                    </div>
                </div>
{/* <<<<<<< HEAD */}
                {cardValue &&
                    <div className="border-b-[1px] border-b-[#EEEEEE] pb-1">
                        <p className='text-[#555555] text-[14px] mt-[14px]'>
                            Talaba yoshlar daftariga kiritilgan. Talaba yoshlar daftariga kiritilgan. Talaba yoshlar daftariga kiritilgan. Talaba yoshlar daftariga kiritilgan.
                        </p>
                        <h2 className='text-right text-[10px] text-[#9B9B9B]'>{cardValue.addedDate.slice(0, 10)} <span className="text-[#F48221]">:{cardValue.fullName}</span></h2>
                    </div>
                }
{/* // ======= */}
                {sudentsNotes.map((item) => {
                    return (
                        <div key={item.id} className="border-b-[1px] border-b-[#EEEEEE] pb-1">
                            <p className={item.paragrafClass}>
                                {item.paragraf}
                            </p>
                            <h2 className={item.h2Class}> {item.h2Text} <span className={item.spanClass}>{item.spanText}</span></h2>
                        </div>
                    )
                })}
{/* >>>>>>> 8a389dd (group fixed) */}
            </div>
        </div>
    )
}

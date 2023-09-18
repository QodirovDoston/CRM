import { useParams } from 'react-router-dom';
import { ByIdStudents } from '../../api/Students/apiStudents';
import { useEffect, useState } from 'react';

export default function StudentCourse() {
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
        <>
            {cardValue &&
                <div className="w-[500px] shadow py-[15px] px-[20px] hover:shadow-xl duration-500 rounded-[10px] border-[#FFFFFF] border-[1px] mt-[10px]">
                    <div className="border-b-[1px] border-b-[#EEEEEE] pb-[12px]">
                        <h1 className='
                    text-[#F48221] 
                    text-base 
                    font-semibold
                '>
                            Foundation 05
                        </h1>
                        <h2 className='text-[10px] mt-[5px]'>
                            <span className='text-[10px] bg-[#009F8F80] w-[40px] py-1 px-1 text-center rounded-[5px]'>Frontend</span> {cardValue.fullName}</h2>
                    </div>
                    <h3 className="text-[#9B9B9B] text-xs font-normal mt-[10px]">Holat:
                        <span className="text-[10px] text-[#444444] bg-[#FF666680] w-[40px] py-1 px-2 text-center rounded-[5px]">O'qishni tugatgan</span>
                    </h3>
                    <h3 className="text-[#9B9B9B] text-xs font-normal mt-[10px]">O'qish muddati:
                        <span className="text-[#444444]"> Toq kunlar 18:00</span>
                    </h3>
                    <h3 className="text-[#9B9B9B] text-xs font-normal mt-[10px]">Vaqti:
                        <span className="text-[#444444]">Toq kunlar 18:00</span>
                    </h3>
                    <h3 className="text-[#9B9B9B] text-xs font-normal mt-[10px]">Talaba qo'shilgan:
                        <span className="text-[#444444]"> {cardValue.addedDate.slice(0, 10)}</span>
                    </h3>
                    <h3 className="text-[#9B9B9B] text-xs font-normal mt-[10px]">Narx:
                        <span className="text-[#444444]">899 000 so'm</span>
                    </h3>
                </div>
            }
        </>
    )
}

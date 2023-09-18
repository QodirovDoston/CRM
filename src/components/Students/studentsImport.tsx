import { useState } from 'react'
import { BsCheckCircle, BsFillCheckSquareFill } from "react-icons/bs"
import { AiOutlineCloudUpload, AiFillPicture } from "react-icons/ai"
const StudentsImport = ({ toggle }: any) => {
    const [exefile, setExeFile] = useState(null)
    return (
        <>
            <div className="border-b-[1px] px-4 py-6 border-b-[#EEEEEE]">
                <h2 className="text-[#F48221] text-[17px] font-semibold">Exceldan import qilish</h2>
            </div>
            <div className="p-6">
                <h2 className='text-[14px] font-medium'>1. Turkum surati</h2>
                <div className="flex items-center justify-between">
                    <div className=" mb-2 px-[10px] py-[10px] bg-[#F8F8F8] rounded text-2xl text-[#F48221] mt-3 flex relative">
                        {exefile ? <BsFillCheckSquareFill /> : <AiFillPicture />}
                    </div>
                    <h4 className='text-[#8C8C8C] text-[11px]'>Yuklash uchun <span className='text-[#F48221] underline'>bu yerga bosing</span></h4>
                    <button className="py-[8px] px-[10px] rounded-[10px] text-white text-2xl bg-[#FF6666] relative ">
                        <AiOutlineCloudUpload />
                        <input type="file" className='w-[100%] h-10 absolute top-0 left-0 mr-[20%] opacity-0 ' onChange={(file: any) => {
                            setExeFile(file)
                            file = null
                        }} />
                    </button>
                </div>
                <hr className='border-[#EEEEEE]' />
                <div className="mt-2">
                    <p className='text-[11px]'><span className='text-[#F48221] font-semibold'>Eslatma:</span> Fayl turi xls/xlsx Excel orqali yuklash uchun tavsiya
                        etilgan talabalar soni: 1 000 ta. Quyida yuklash uchun Excel
                        namunasini <span className='text-[#F48221] font-semibold underline'>yuklab oling.</span>
                    </p>
                </div>
                <button
                    onClick={() => {
                        setExeFile(null)
                        toggle()
                    }}
                    className='bg-[#F48221] mt-5 ml-[45%] rounded-[15px] text-[17px] font-medium text-white flex items-center justify-center gap-2 py-2 px-5 '>
                    <BsCheckCircle className='text-white' /> Joylash
                </button>
            </div>
        </>
    )
}

export default StudentsImport;

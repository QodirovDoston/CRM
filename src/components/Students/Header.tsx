import { IoMdSearch } from "react-icons/io"
import { FiRefreshCcw } from "react-icons/fi"
import { SetStateAction, useEffect, useRef, useState } from 'react'
import { AiOutlineCloudUpload, AiOutlineCloudDownload } from "react-icons/ai"

import { Dropdown, StudentsStatus, StudentsTags } from '../../utils/Constants'
import StudentsImport from './studentsImport'
import {angleup} from '../../assets/NavbarImgs'
import Table from "./Table"

const Header = () => {
    const [importPage, setImportPage] = useState(false)
    const showImportPage = () => {
        setImportPage(!importPage)
    }
    const [search, setSearch] = useState('');

    // for toggle
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setthree] = useState(false)

    const imgToggle = (e: any) => {
        if (e.alt == "one") {
            setOne(!one)
            setTwo(false)
            setthree(false)
        } else if (e.alt == "two") {
            setOne(false)
            setTwo(!two)
            setthree(false)
        } else if (e.alt == "three") {
            setOne(false)
            setTwo(false)
            setthree(!three)
        }
    }
    const closeAll = () => {
        setOne(false)
        setTwo(false)
        setthree(false)
    }

    // for one 
    const [Type, setType] = useState("Python")
    const dropdown = (val: SetStateAction<string>) => {
        setType(val)
    }
    // for two
    const [status, setStatus] = useState("Faol")
    const twoDropdown = (val: SetStateAction<string>) => {
        setStatus(val)
    }

    // for three
    const [tags, setTags] = useState("Active")
    const threeDropdown = (val: SetStateAction<string>) => {
        setTags(val)
    }
    let menuRef = useRef<any>();
    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (!menuRef.current.contains(event.target)) {
                setImportPage(false)
            }
        })
    })
    return (
        <>
            <div className="flex 2xl:pr-[40px] xl:pr-[80px] mx-auto items-center justify-between relative">
                <div className="flex items-center gap-[10px]">
                    <div className="flex items-center relative  w-[347px] text-[14px]">
                        <input type="search" placeholder='Ism yoki Mobil raqam orqali qidirish' className='outline-none border-[#EEEEEE]  font-medium border rounded-[15px] pl-5 pr-9 py-3 w-[100%] z-8 bg-transparent'
                            onChange={(e) => setSearch(e.target.value)} />
                        <IoMdSearch className='absolute right-3 text-[25px] text-[#9B9B9B] top-2.1' />
                    </div>
                    <div className="flex items-center justify-around border rounded-[15px] w-[181px] border-[#eee] py-3 px-1 text-[13px] relative">
                        <h2 className="text-[#9B9B9B]  font-medium">Kurs boyicha: <span className='text-[#F48221]'>{Type}</span></h2>
                        <img src={angleup} alt="one" className='cursor-pointer absolute w-full opacity-0' onClick={(e) => { imgToggle(e.target) }} />
                        <img src={angleup} alt="one" className='cursor-pointer' onClick={(e) => { imgToggle(e.target) }} />
                        <ul className={!one ? "hidden" : "" + "  rounded-[15px] border-[1px] border-[#eee] p-[0px] absolute z-[100] top-[50px] w-[180px] bg-[#fff]"}>
                            {Dropdown?.map((item, index) => {
                                return (
                                    <li key={index}
                                        className='text-[#9B9B9B] text-[14px] transition-all duration-[.5s] font-medium text-center py-[10px] hover:text-[#FFF] hover:bg-[#F48221] cursor-pointer rounded-[10px]'
                                        onClick={() => {
                                            dropdown(item?.text)
                                            closeAll()
                                        }}>
                                        {item?.text}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex items-center justify-around border rounded-[15px] px-[3px] border-[#eee] py-3 text-[13px] relative">
                        <h2 className="text-[#9B9B9B]  font-medium">Talaba: <span className='text-[#F48221]'>{status}</span></h2>
                        <img src={angleup} alt="two" className='cursor-pointer absolute w-full opacity-0' onClick={(e) => imgToggle(e.target)} />
                        <img src={angleup} alt="two" className='cursor-pointer' onClick={(e) => imgToggle(e.target)} />

                        <ul className={!two ? "hidden" : "  rounded-[15px] border-[1px] border-[#eee] p-[0px] absolute z-[100] top-[50px] w-[180px] bg-[#fff]"}>
                            {StudentsStatus?.map((item, index) => {
                                return (
                                    <li key={index}
                                        className='text-[#9B9B9B] text-[14px] transition-all duration-[.5s] font-medium text-center py-[10px] hover:text-[#FFF] hover:bg-[#F48221] cursor-pointer rounded-[10px]'
                                        onClick={() => {
                                            twoDropdown(item?.status)
                                            closeAll()
                                        }
                                        }>
                                        {item?.status}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex items-center justify-around border rounded-[15px] px-[3px] border-[#eee] py-3 text-[13px] relative">
                        <h2 className="text-[#9B9B9B]  font-medium">Talaba: <span className='text-[#F48221]'>{tags}</span></h2>
                        <img src={angleup} alt="three" className='cursor-pointer  absolute w-full opacity-0' onClick={(e) => imgToggle(e.target)} />
                        <img src={angleup} alt="three" className='cursor-pointer w-[20px] ' onClick={(e) => imgToggle(e.target)} />

                        <ul className={!three ? "hidden" : "  rounded-[15px] border-[1px] border-[#eee] p-[0px] absolute z-[100] top-[50px] w-[180px] bg-[#fff]"}>
                            {StudentsTags?.map((item, index) => {
                                return (
                                    <li key={index}
                                        className='text-[#9B9B9B] text-[14px] transition-all duration-[.5s] font-medium text-center py-[10px] hover:text-[#FFF] hover:bg-[#F48221] cursor-pointer rounded-[10px]'
                                        onClick={() => {
                                            threeDropdown(item?.status)
                                            closeAll()
                                        }}>
                                        {item?.status}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <button onClick={() => window.location.reload()} className="py-[14px] px-[15px] rounded-[10px] text-white text-2xl cursor-pointer bg-[#009F8F]">
                        <FiRefreshCcw />
                    </button>
                </div>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => { showImportPage() }} className="py-[14px] px-[15px] rounded-[10px] text-white text-2xl bg-[#FF6666] ">
                        <AiOutlineCloudUpload />
                    </button>
                    <button className="py-[14px] px-[15px] rounded-[10px] text-white  bg-[#009F8F]">
                        <AiOutlineCloudDownload className="text-5xl" />
                    </button>
                </div>
                <div ref={menuRef} className={importPage ? "absolute z-50 right-[-30px] w-[384px] mt-[400px] bg-white shadow-xl transition-all duration-[1.5s] block " : "absolute right-[-50%] w-[384px] mt-100 bg-white  shadow-xl transition-all duration-[1.5s] z-50"}>
                    <StudentsImport toggle={showImportPage} />
                </div>
            </div >
            <div className="2xl:w-[100%] xl:w-[1250px] lg:w-[1150px] relative overflow-hidden my-2  h-[660px]  overflow-y-scroll scrol">
                <Table searchFunction={search} />
            </div>
        </>
    )
}

export default Header
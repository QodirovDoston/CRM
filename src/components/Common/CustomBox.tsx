import React, { useEffect, useRef, useState } from 'react'
import { heart } from "../../assets/NavbarImgs"
import Talabaqoshish from '../../pages/AddByNavbar/Talabaqoshish'
import ChiqimniKiritish from '../../pages/AddByNavbar/ChiqimniKiritish';
import TolovKritish from '../../pages/AddByNavbar/To\'lovniKiritish';

let useClickOutside = (handler: { (): void }) => {
    let domNode = useRef<any>();
    useEffect(() => {
        let mabeHandle = (event: { target: any; }) => {
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

const CustomBox = React.memo(() => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    const showImport11 = () => {
        setShow(!show)
    }
    const showImport22 = () => {
        setShow1(!show1)
    }
    const showImport33 = () => {
        setShow2(!show2)
    }
    let domNode = useClickOutside(() => {
        setShow(false)
    })
    const [showBox, setShowBox] = useState(false)
    return (
        <>
            <div className='relative mt-1.5'>
                <button onClick={() => setShowBox(!showBox)}>
                    <img src={heart} alt="" />
                </button>
                {showBox &&
                    <ul className='absolute rounded-lg z-10 top-[50px] border-[1px] border-[#eaeaea]' onClick={() => setShowBox(!showBox)}>
                        <li onClick={() => { showImport11() }} className='text-[13px] whitespace-nowrap rounded-[5px] px-[10px] py-[4px]  font-medium hover:bg-[#F48221] hover:text-[#FFFFFF] bg-[#FFFFFF] cursor-pointer'>Talaba qo'shish</li>
                        <li onClick={() => { showImport22() }} className='text-[13px] whitespace-nowrap rounded-[5px] px-[10px] py-[4px]  font-medium hover:bg-[#F48221] hover:text-[#FFFFFF] bg-[#FFFFFF] cursor-pointer'>To'lovni kiritish</li>
                        <li onClick={() => { showImport33() }} className='text-[13px] whitespace-nowrap rounded-[5px] px-[10px] py-[4px]  font-medium hover:bg-[#F48221] hover:text-[#FFFFFF] bg-[#FFFFFF] cursor-pointer'>Chiqimni kiritish</li>
                    </ul>
                }
            </div>
            <div>
                <div ref={domNode} className={!show ? "z-50 overflow-y-hidde h-[100%]  hidden absolute right-[-400px] top-0 transition-all duration-[.7s] w-[385px] bg-[#fff]" : "h-[100%]  absolute right-0 top-0 transition-all duration-[.7s] w-[385px] bg-[#fff] z-50 shadow-xl hover:shadow-2xl"} >
                    <Talabaqoshish setShow={setShow} show={show} />
                </div>
                <div className={!show1 ? "z-50 overflow-y-hidde h-[100%] hidden absolute right-[-400px] top-0 transition-all duration-[.7s] w-[385px] bg-[#fff]" : "h-[100%] absolute right-0 top-0 transition-all duration-[.7s] w-[385px] bg-[#fff] z-50 shadow-xl hover:shadow-2xl"}>
                    <TolovKritish setShow1={setShow1} show1={show1} />
                </div>
                <div  className={!show2 ? "z-50 overflow-y-hidde h-[100%] hidden absolute right-[-400px] top-0 transition-all duration-[.7s] w-[385px] bg-[#fff]" : "h-[100%] absolute right-0 top-0 transition-all duration-[.7s] w-[385px] bg-[#fff] z-50 shadow-xl hover:shadow-2xl"}>
                    <ChiqimniKiritish setShow2={setShow2} show2={show2} />
                </div>
            </div>
        </>
    )
})

export default CustomBox
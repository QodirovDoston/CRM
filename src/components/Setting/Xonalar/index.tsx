import React, { useState } from "react"
import { ReusableBtn } from "../../Common"
import { trash, truck, writing } from "../../../assets/NavbarImgs"
import { groupsInRoom, roomsData } from "../../../utils/Constants"
import RoomsAdd from "./RoomsAdd"
import RoomsEdit from "./RoomsEdit"

const index = React.memo(() => {
    const [TF, setTF] = useState(false)
    const [bool1, setBool1] = useState(false)
    const [bool2, setBool2] = useState(false)
    const [bool3, setBool3] = useState(false)
    const [getId, setGetId] = useState(0)
    const [isId, setIsId] = useState(0)
    console.log(groupsInRoom[4].belonging);
    
    return (
        <>
            <main className="w-full flex justify-start pb-[30px]">
                <div>
                    <div className="h-[500px] p-[10px] bg-[#fff0] style-13">
                        {roomsData.map((item: any) => {
                            return (
                                <div key={item.id} className={(bool1 ? "block" : "mr-[20px] inline-block") + " w-[570px] cursor-pointer duration-[.5s] text-start z-50 relative"}>
                                    <div className="flex items-center justify-center absolute top-[15px] right-[20px]">
                                        <ReusableBtn
                                            btnImg2={writing}
                                            className=""
                                            btnImgStyle=""
                                            btnImg2Style="px-[4px] w-[35px]"
                                            text=""
                                            handleClick={() => {
                                                setBool3(!bool3)
                                                setIsId(item.id)
                                            }}
                                            btnStyle="bg-yellow w-[44px] h-[44px] flex justify-center align-center text-center text-[#FFFFFF] rounded-[15px] flex items-center justify-center"
                                            textStyle=""
                                        />
                                        <ReusableBtn
                                            btnImg2={trash}
                                            className=""
                                            btnImgStyle=""
                                            btnImg2Style="px-[4px] w-[35px]"
                                            text=""
                                            handleClick={() => {
                                                delete roomsData[item.id - 1]
                                                setTimeout(() => {
                                                    setTF(!TF)
                                                    setGetId(0)
                                                }, 10);
                                            }}
                                            btnStyle="ml-[10px] bg-red w-[44px] h-[44px] flex justify-center align-center text-center text-[#FFFFFF] rounded-[15px] flex items-center justify-center"
                                            textStyle=""
                                        />
                                    </div>
                                    <button key={item.id} style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.15)" }} className={(bool1 ? "block" : "inline-block") + " mb-[20px] px-[20px] py-[15px] rounded-[15px] hover:border-[1px] focus:border-[#F48221] duration-[.5s] border-[1px] border-[#fff] bg-[#fff] w-full cursor-pointer text-start z-50"} onClick={() => {
                                        setGetId(item.id)
                                        setBool1(true)
                                    }}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h1 className="text-[#F48221] text-[16px] font-semibold">{item.id}-Xona “{item.roomName}”</h1>
                                                <p className="text-[10px] text-[#444] mt-[5px] font-normal">{item.date}</p>
                                            </div>
                                        </div>
                                        <hr className="border-t-[#eee] my-[10px]" />
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h1 className="text-[#9B9B9B] text-[15px] font-medium mb-[5px]">Ochilish vaqti: <span className="text-[#F48221]">{item.openTime}</span></h1>
                                                <h1 className="text-[#9B9B9B] text-[15px] font-medium">Yopilish vaqti: <span className="text-[#F48221]">{item.closeTime}</span></h1>
                                            </div>
                                            <div className="mr-[120px]">
                                                <h1 className="text-[#9B9B9B] text-[15px] font-medium mb-[5px]">Izohlar: <span className="text-[#F48221]">{item.comment}</span></h1>
                                                <h1 className="text-[#9B9B9B] text-[15px] font-medium">Guruhlari soni: <span className="text-[#F48221]">{item.numberGroups} ta</span></h1>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <div className={(bool1 ? "justify-end" : "justify-start") + " flex items-center mr-[15px] ml-[10px] mt-[10px]"}>
                        <button className="block border-orange border-[1px] bg-orange text-[#fff] py-[13px] px-[25px] rounded-[15px] font-semibold" onClick={() => {
                            setBool2(!bool2)
                        }}><p className="mr-[5px] inline">+</p> Xona yaratish</button>
                    </div>
                </div>
                <div>
                    <div className="h-[670px] p-[10px] bg-[#fff0] style-14">
                        {groupsInRoom.map((item: any) => {
                            if (item.belonging == getId) {
                                return (
                                    <div key={item.id} style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.15)" }} className={"mb-[20px] px-[20px] py-[15px] rounded-[15px] duration-[.5s] border-[2px] border-[#fff] bg-[#fff] w-[570px] text-start"}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h1 className="text-[#F48221] text-[16px] font-semibold">{item.groupName}</h1>
                                                <h1 className="text-[10px] text-[#444] font-normal bg-[#009F8F80] rounded-[5px] px-[7px] py-[2px] mt-0 inline">{item.type}</h1>
                                            </div>
                                            <div>
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                        <hr className="border-t-[#eee] my-[7px]" />
                                        <div className="flex items-end justify-between">
                                            <div>
                                                <h1 className="text-[#9B9B9B] text-[15px] font-medium mb-[5px]">Holat: <span className="text-[#F48221]">
                                                    <button className="text-[10px] text-[#444] mt-[5px] font-normal bg-[#009F8F80] rounded-[5px] px-[5px]">{item.status}</button>
                                                </span></h1>
                                                <h1 className="text-[#9B9B9B] text-[15px] font-medium">Narx: <span className="text-[#444]">{item.price} so'm</span></h1>
                                            </div>
                                            <div>
                                                <h1 className="text-[#9B9B9B] text-[15px] font-medium mb-[5px]">Talaba soni: <span className="text-[#F48221]">{item.numberStudents} ta</span></h1>
                                                <h1 className="text-[#9B9B9B] text-[15px] font-medium">Vaqti: <span className="text-[#F48221]">{item.workTime}</span></h1>
                                            </div>
                                            <div>
                                                <button className="flex items-center justify-between">
                                                    <h1 className="text-[#555] text-[15px] font-medium mr-[3px]">Guruhga o'tish:</h1>
                                                    <img src={truck} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <RoomsAdd bool2={bool2} setBool2={setBool2} />
                <RoomsEdit bool3={bool3} setBool3={setBool3} isId={isId} />
            </main>
        </>
    )
})

export default index
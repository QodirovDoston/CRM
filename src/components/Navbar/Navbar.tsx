import { useState } from "react";
import { useSelector } from "react-redux";
import SelectTransla from "../../Translate/TranslateSection";
import { logo, search, userImg, bell, focks, warning } from "../../assets/NavbarImgs";
import { CustomInput, CustomBox, } from "../Common";
import { useNavigate } from "react-router-dom";
const logoImg = [bell, focks, warning]

interface MyState {
    modalState: any;
    isOpen: boolean
}

const Navbar = () => {
    const navigate = useNavigate()
    useSelector((state: MyState) => state.modalState
    )
    const [value, setValue] = useState("")
    const handleChange = (e: any) => {
        setValue(e.target.value)
    }
    return (
        <>
            <div className="px-16 conatiner mx-auto my-3">
                <div className="flex items-center justify-between">
                    <div className="flex gap-[80px]">
                        <div className="flex items-center">
                            <img onClick={() => navigate("/")} src={logo} alt="" />
                        </div>
                        <CustomInput
                            inputStyle="w-[450px] h-[40px] bg-gray100 px-[45px] text-gray rounded-[20px] text-[18px] items-center mt-[12px]"
                            placeholder=" Izlash..."
                            value={value}
                            inputType="search"
                            handleChange={handleChange}
                        />
                        <div className="ml-[-120px] mt-3 flex items-center">
                            <img src={search} alt="" />
                        </div>
                    </div>
                    <div className="flex gap-3 items-center justify-center">
                        <div className="flex gap-4 mr-[40px] items-center">
                            <CustomBox />
                            {logoImg.map((value, index) => {
                                return (
                                    <div key={index} className="flex items-center">
                                        <img src={value} alt="" />
                                    </div>
                                )
                            })}
                        </div>
                        <SelectTransla />
                        <img src={userImg} alt="" />
                    </div>
                </div>
            </div>
            <hr className="border-t-[2px] border-t-hrcolor mt-[10px]" />
        </>
    )
}
export default Navbar;  
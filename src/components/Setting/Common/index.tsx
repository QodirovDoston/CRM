import { downlode, picture, saccses, watche } from "../../../assets/NavbarImgs";
import { ReusableBtn } from "../../Common";

const Common = () => {
    return (
        <>
            <div className="w-[335px] mt-16 overflow-y-scroll h-[650px] absolute  scrol  mb-2">
                <div className="mb-5">
                    <h6 className="text-[#444444] font-medium text-[14px] mb-[10px]">Logoni yuklash</h6>
                    <div className="w-[334px] flex justify-between">
                        <div className="w-[44px] h-[44px] bg-[#F8F8F8] rounded-[5px] flex justify-center items-center">
                            <img src={picture} alt="" />
                        </div>
                        <ReusableBtn
                            className=""
                            btnImg2={downlode}
                            btnImg=''
                            btnImgStyle=""
                            btnImg2Style=""
                            text=""
                            //   handleClick={handleSubmit}
                            btnStyle="w-[44px] h-[44px] bg-[#F48221] rounded-[15px] flex justify-center items-center"
                            textStyle="" handleClick={undefined}                        />
                    </div>
                </div>
                <div>
                    <h3 className="text-[#444] font-normal text-[14px] mb-[10px]">O’quv markaz nomi</h3>
                    <input className="w-[334px] h-[40px] pl-2 rounded-[15px] border-solid border-2 border-black text-[#444444] mb-[20px] text-[14px]" type="text" placeholder="iTech Academy" />
                </div>
                <div className="mb-5">
                    <h6 className="text-[#444444] font-medium text-[14px] mb-[10px]">Sistemaga kirish suratini yuklash</h6>
                    <div className="w-[334px] flex justify-between">
                        <div className="w-[44px] h-[44px] bg-[#F8F8F8] rounded-[5px] flex justify-center items-center">
                            <img src={picture} alt="" />
                        </div>
                        <ReusableBtn
                            className=""
                            btnImg2={downlode}
                            btnImg=''
                            btnImgStyle=""
                            btnImg2Style=""
                            text=""
                            //   handleClick={handleSubmit}
                            btnStyle="w-[44px] h-[44px] bg-[#F48221] rounded-[15px] flex justify-center items-center"
                            textStyle="" handleClick={undefined}                        />
                    </div>
                </div>

                <div className="relative">
                    <h3 className="text-[#444] font-normal text-[14px] mb-[10px]">Ochilish vaqti</h3>
                    <input className="w-[334px] h-[40px] pl-8 rounded-[15px] border-solid border-2 border-black text-[#444444] mb-[20px] text-[14px]" type="text" placeholder="Vaqtni tanlang" />
                    <img className="absolute top-8 left-2" src={watche} alt="" />
                </div>
                <div>
                    <h3 className="text-[#444] font-normal text-[14px] mb-[10px]">Markaz telefon raqami</h3>
                    <input className="w-[334px] h-[40px] pl-2 rounded-[15px] border-solid border-2 border-black text-[#444444] mb-[20px] text-[14px]" type="text" placeholder="+998" />
                </div>
                <div>
                    <h3 className="text-[#444] font-normal text-[14px] mb-[10px]">Dars xonalar sonini kiriting</h3>
                    <input className="w-[334px] h-[40px] pl-2 rounded-[15px] border-solid border-2 border-black text-[#444444] mb-[20px] text-[14px]" type="text" />
                </div>
                <div>
                    <h3 className="text-[#444] font-normal text-[14px] mb-[10px]">Platforma uchun rang kodini kirgizing</h3>
                    <div className="flex">
                        <input className="w-[284px] h-[40px] pl-2 rounded-[15px] border-solid border-2 border-black text-[#444444] mb-[20px]" type="text" />
                        <ReusableBtn
                            className=""
                            btnImg2={saccses}
                            btnImg=''
                            btnImgStyle=""
                            btnImg2Style=""
                            text=""
                            //   handleClick={handleSubmit}
                            btnStyle="w-[44px] ml-2 h-[40px] bg-[#F48221] rounded-[15px] flex justify-center items-center"
                            textStyle="" handleClick={undefined}                        />
                    </div>
                </div>
                <div className="flex justify-end mt-5">
                    <ReusableBtn
                        className=""
                        btnImg2={saccses}
                        btnImg=''
                        btnImgStyle=""
                        btnImg2Style=""
                        text="Saqlash"
                        //   handleClick={handleSubmit}
                        btnStyle="flex justify-center items-center w-[145px] h-[50px] bg-[#F48221] rounded-[15px] gap-4"
                        textStyle="text-[#FFFFFF] font-medium text-[17px]" handleClick={undefined}                    />
                </div>
            </div>
        </>
    );
};
export default Common;

import {trash, diogram,saccses, downlod, edu, user, dolor, kurslar} from '../../../assets/NavbarImgs/index'
import ReusableBtn from './ReusableBtn'

function CompantBtn( ) {
  const handleSubmit= ()=>{
console.log("sss");

  }
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-2 mt-4 ">
        <ReusableBtn
          btnImg={trash}
          className=""
          btnImgStyle="ml-[20px]"
          btnImg2Style="ml-[20px]"
          text="Saqlash"
          handleClick={handleSubmit}
          btnStyle="p-[49px] bg-[#F48221] text-[#FFFFFF] flex gap-1  py-[11px] rounded-[15px]"
          textStyle="mx-auto text-[17px]"
        />

        <ReusableBtn
          className=""
          btnImgStyle=""
          btnImg2Style=""
          text="Kirish"
          handleClick={handleSubmit}
          btnStyle=" w-[540px] bg-[#F48221] text-[#FFFFFF] flex gap-2  py-[11px] rounded-[15px]"
          textStyle="mx-auto text-[17px]"
        />

        <ReusableBtn
          className=""
          btnImg2={user}
          btnImg={saccses}
          btnImgStyle="ml-[-7px]"
          btnImg2Style="ml-[40px] bg-red-800"
          text="Ro'yxatga olish"
          handleClick={handleSubmit}
          btnStyle=" w-[287px] bg-[#F48221] text-[#FFFFFF] flex  gap-2 flex-row-reverse  h-[48px] items-center justify-center rounded-[15px] "
          textStyle=" text-[17px]"
        />
        <ReusableBtn
          className=""
          btnImg={diogram}
          btnImg2=''
          btnImgStyle="ml-[-10px]"
          btnImg2Style="ml-[0px]"
          text="Ro'yxatga olish"
          handleClick={handleSubmit}
          btnStyle=" w-[287px] bg-[#F48221] text-[#FFFFFF] flex gap-2 h-[48px] items-center justify-center rounded-[15px] "
          textStyle=" text-[17px]"
        />

        <ReusableBtn
          className=""
          btnImg={kurslar}
          btnImg2=''
          btnImgStyle="ml-[-10px]"
          btnImg2Style="ml-[0px]"
          text="Kurslar"
          handleClick={handleSubmit}
          btnStyle=" w-[287px] bg-orange text-[#FFFFFF] flex  gap-2 h-[48px] items-center justify-center rounded-[15px] "
          textStyle=" text-[17px]"
        />

        <ReusableBtn
          className=""
          btnImg={dolor}
          btnImg2=''
          btnImgStyle=""
          btnImg2Style=""
          text=""
          handleClick={handleSubmit}
          btnStyle="px-[15px] bg-[#F48221] text-[#FFFFFF]  gap-2 h-[48px] rounded-[15px]"
          textStyle=""
        />
        <ReusableBtn
          className=""
          btnImg={downlod}
          btnImg2=''
          btnImgStyle=""
          btnImg2Style=""
          text=""
          handleClick={handleSubmit}
          btnStyle="px-[15px] bg-yellow text-[#FFFFFF]  gap-2 h-[48px] rounded-[15px]"
          textStyle=""
        />
        <ReusableBtn
          className=""
          btnImg={trash}
          btnImg2=''
          btnImgStyle=""
          btnImg2Style=""
          text=""
          handleClick={handleSubmit}
          btnStyle="px-[15px] bg-[#FF6666] text-[#FFFFFF]  gap-2 h-[44px] rounded-[15px]"
          textStyle=""
        />

        <ReusableBtn
          className=""
          btnImg={edu}
          btnImg2=''
          btnImgStyle=""
          btnImg2Style=""
          text=""
          handleClick={handleSubmit}
          btnStyle="px-[15px] bg-[#009F8F]   gap-2 h-[44px] rounded-[15px]"
          textStyle=""
        />
      </div>
    </div>
  )
}

export default CompantBtn
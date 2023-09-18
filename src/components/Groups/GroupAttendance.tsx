import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { foundation, bin, down, minus, pen, plos, undov,
  //  ptichka, nohira, ondov, nominus, sno, pts, hirap, nop,plus,no,
} from '../../assets/NavbarImgs';
import { lesson, month } from '../../utils/Constants';
import { ReusableBtn } from '../Common';
import { ArrayFortable, arr, group_info, imgArr, team_name } from './GroupInfo';

const GroupAttendance = () =>  {
  return (
    <div className="relative w-[1230px] mt-10 m-auto h-[800px] shadow-2xl rounded-[15px]">
      <div className="flex">
        <div className="px-[30px] flex pt-[15px]">
          <div>
            <img className="mr-[10px]" src={foundation} alt="" />
          </div>
          <div>
              {team_name.map((val: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; })=>{
               return( 
                 <h1  className="text-[#F48221] font-semibold mb-[5px] text-[16px]">
                  {val.text}
                 </h1>
                )
              })}
            <div className="flex">
              <button className="w-[40px] rounded-[5px] h-[15px] bg-blue mr-[6px] text-[#444] text-[10px] font-normal">
                Active
              </button>
              {team_name.map((val:any)=>{
                return(
                <p className="text-[#444] font-normal text-[10px]">
                  {val.day} <span className="text-[#F48221]">/</span>{val.time}
                </p>
                )
              })}
            </div>
          </div>
          <div className="ml-[57px] mt-[13px]">
            <img src={minus} alt="" />
          </div>
        </div>
        <hr className="border-1 absolute border-y-gray1 rotate-[90deg] w-[750px] right-[45%] top-[50%] " />
        <div className="flex mt-[27px]">
          <h1 className="text-[#F48221] font-semibold text-[16px]  mr-[50px]">
            Davomat
          </h1>
          <ul className="flex gap-8 mt-1">
            {month?.map((item, index)=>{
              return(
                <button key={index} className="text-[#444] font-normal text-[13px]  hover:rounded-[5px] hover:bg-blue h-[17px] w-[30px] text-center cursor-pointer">
                {item?.name}
              </button>
              )
            })}
          
           
          </ul>
        </div>
        <div className="flex gap-2 mt-[15px] ml-10">
          <ReusableBtn
            className=""
            btnImg2={pen}
            btnImgStyle=""
            btnImg2Style=""
            text=""
            //   handleClick={handleSubmit}
            btnStyle="h-[44px] w-[44px] bg-[#DDD21F] text-[#FFFFFF] rounded-[15px] pl-2 pt-2"
            textStyle=""
          />
          <ReusableBtn
            className=""
            btnImg2={plos}
            btnImgStyle=""
            btnImg2Style=""
            text=""
            //   handleClick={handleSubmit}
            btnStyle="h-[44px] w-[44px] bg-[#F48221] text-[#FFFFFF] rounded-[15px] pl-[10px] pt-2"
            textStyle=""
          />
          <ReusableBtn
            className=""
            btnImg2={down}
            btnImgStyle=""
            btnImg2Style=""
            text=""
            //   handleClick={handleSubmit}
            btnStyle="h-[44px] w-[44px] bg-[#009F8F] text-[#FFFFFF] rounded-[15px] pl-[10px] pt-2"
            textStyle=""
          />
          <ReusableBtn
            className=""
            btnImg2={bin}
            btnImgStyle=""
            btnImg2Style=""
            text=""
            //   handleClick={handleSubmit}
            btnStyle="h-[44px] w-[44px] bg-[#FF6666] text-[#FFFFFF] rounded-[15px] pl-[10px] pt-2"
            textStyle=""
          />
        </div>
      </div>
      <hr className="mt-[13px] border-1 w-[96%] ml-8 border-y-gray1" />
      <div className="ml-[30px] mt-[10px] flex ">
        <div className='h-[190px] w-[240px]'>
        {group_info.map((val , index)=>{
          return(
          <h1 className="text-[#444] text-[13px] font-medium mb-[10px]">
            <span className="text-[#9B9B9B] font-normal">{ArrayFortable[index]}</span> {val}
          </h1>
          )
        })}
        </div>

        <div className="flex mt-10">
          <div className="relative left-5">
            <button className="w-[130px] h-[48px] bg-[#FFCC99] text-[#555555] text-[10px] font-normal rotate-[-90deg] rounded-[15px]">
              HTML CSS asoslari va Javascript
            </button>
            <p className="text-[#444444] absolute top-[75%] left-[33%] text-[13px] font-normal">
              2-iyun
            </p>
          </div>
          <div className="relative left-5 ml-[-60px]">
            <button className="w-[130px] h-[48px] bg-[#FFCC99] text-[#555555] text-[10px] font-normal rotate-[-90deg] rounded-[15px]">
              HTML CSS asoslari va Javascript
            </button>
            <p className="text-[#444444] absolute top-[75%] left-[33%] text-[13px] font-normal">
              5-iyun
            </p>
          </div>
          <div className="relative left-5 ml-[-60px]">
            <button className="w-[130px] h-[48px] bg-[#FFCC99] text-[#555555] text-[10px] font-normal rotate-[-90deg] rounded-[15px]">
              HTML CSS asoslari va Javascript
            </button>
            <p className="text-[#444444] absolute top-[75%] left-[33%] text-[13px] font-normal">
              7-iyun
            </p>
          </div>
          {lesson?.map((item, index) => {
            return (
              <div className="relative left-5 ml-[-60px]">
              <button key={index} className="w-[130px] h-[48px] bg-[#EEE] text-[#555555] text-[10px] font-normal rotate-[-90deg] rounded-[15px]">
                {item.text}
              </button>
              <p key={index} className="text-[#444444] absolute top-[75%] left-[33%]  text-[13px] font-normal">
                {item.sana}
              </p>
            </div>
            )
          } )}
          
        </div>
      </div>
      <div className="w-[1190px] h-[510px] ml-6 border-[1px] border-solid border-[#9A9A9A] border-l-[#fff]">
        {arr.map((value)=>{
          return(
        <div className="flex">
          <div className="flex justify-between w-[270px]">
            <div className='flex'>
            <h1 className="text-[#444] text-[13px] font-normal mt-[8px] mr-[10px]">
             {value}
            </h1>
            <button className="text-[#444444] text-[10px] mt-[10px] font-normal w-[47px] h-[15px] rounded-[5px]  bg-[#FF545480]">
              Qarzdor
            </button>
            </div>
            <div>
              <img className="mt-[7px]" src={undov} alt="" />
            </div>
          </div>
            <div className='flex w-[900px]'>
              {imgArr.map((val,ind)=>{
                return(
          <div  key={ind} className="flex ml-7">
            <div className="mt-[6px]">
              <img src={val} alt="" />
            </div>
            <div className="mt-[6px] ml-[1px]">
              <img src={val} alt="" />
            </div>
          </div>
                )
              })}
            </div>
        </div>
      
          )
        })}
      </div>
    </div>
  );
}



export default GroupAttendance;
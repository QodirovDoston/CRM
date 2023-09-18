import React from 'react'
import { trash, writing } from "../../../assets/NavbarImgs"
import { Link } from 'react-router-dom'
import { ReusableBtn } from '../../Common'

// 
export const GroupCard = React.memo((props: any) => {
    return (
        <div className='rounded-lg 2xl:w-[600px] xl:w-[450px] lg:w-[400px] md:w-[300px] shadow-md h-[180px] p-[20px]  hover:shadow-xl duration-500 '>
            <span className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='cursor-pointer w-11 h-11' src={props.img} alt="" />
                    <span className='ml-2 mt-1'>
                        <h2 className='text-orange text-[16px] font-semibold'>{props?.fullName}</h2>
                        <p className='text-black  opacity-70 text-[10px] mt-[3px] w-[170px]  rounded-md  '>{props?.description}</p>
                    </span>
                </div>
                <div className='flex gap-2'>
                    <ReusableBtn
                        btnImg2={writing}
                        className=""
                        btnImgStyle=""
                        btnImg2Style="mt-[8px] w-[25px]"
                        text=""
                        handleClick={props.updathandle}
                        btnStyle="bg-yellow w-[44px] h-[44px] flex justify-center align-center text-center text-[#FFFFFF]  rounded-[15px]"
                        textStyle=""
                    />
                    <ReusableBtn
                        btnImg2={trash}
                        className=""
                        btnImgStyle=""
                        btnImg2Style="mt-[8px] w-[25px]"
                        text=""
                        handleClick={props.deleteHanle}
                        btnStyle="bg-orange w-[44px] h-[44px] flex justify-center align-center text-center text-[#FFFFFF]  rounded-[15px]"
                        textStyle=""
                    />
                </div>
            </span>
            <hr className='border-t-[1px] border-t-[#eee] mb-[25px] mt-[13px]' />
            <div className='flex justify-between mt-[25px]'>
                <span>
                    <p className='flex items-center mt-[2px] text-[15px] text-[#9B9B9B]'>{props?.price_text} <pre className=' text-[13px] rounded-[6px] p-[2px]  mt-[2px] ml-[4px] cursor-pointer text-[#F48221]'>{props?.phoneNumber}</pre></p>
                    {/* <h3 className={props.Status_style} >{props?.statucs_text}<pre className={props.actve_style}>{props?.status === true ? "active" : "no-active"}</pre></h3> */}
                    <h3 className={props.brthday_style} >{props?.status_text}<pre className={props.sana_style}>{props?.sana}</pre></h3>
                </span>
                <span>
                    <h2 className='flex items-center text-[15px] text-[#9B9B9B] '>{props?.learner_count_text} <pre className={props.learner_style}>{props?.learner_count}</pre></h2>
                    <Link className='flex items-center mt-[2px]  text-[13px] text-[#9B9B9B]' to="/">{props?.duration_text} <pre className='ml-[3px] text-orange rounded-lg px-3 text-[13px]'>{props.students}</pre></Link>
                </span>
            </div>
        </div>
    )
})

export default GroupCard
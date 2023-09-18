import React, { useState } from 'react'
import { selectHeart } from '../../../utils/Constants'

type Prop = {
    value: string
}
const LiEl = (props: Prop) => {
    return <li className='text-[13px] whitespace-nowrap rounded-[5px] px-[10px] py-[4px]  font-medium hover:bg-[#F48221] hover:text-[#FFFFFF] bg-[#FFFFFF] cursor-pointer'>{props.value}</li>
}
const ChartSelect = React.memo(() => {
    const [showBox, setShowBox] = useState(false)
    return (
        <div className='relative'>
            <button className='text-[15px] text-black' onClick={() => setShowBox(!showBox)}>
                6 oylik
                {showBox}
            </button>
            {showBox &&
                <ul className='absolute rounded-lg  top-[40px] border-[1px] border-[#EAEAEA]'>
                    {selectHeart.flatMap((value, i) => {
                        return <LiEl value={value} key={i} />
                    })}
                </ul>
            }
        </div>
    )
})

export default ChartSelect
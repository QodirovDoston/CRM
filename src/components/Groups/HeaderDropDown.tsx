import { useEffect, useRef, useState } from "react"

export const HeaderDropDown = ({ key, spam, options }: { key: number, spam: any, options: any }) => {
    const [ul, setUl] = useState(false)
    const [Value, setValue] = useState('')
    const useClickOutside = (handler: any) => {
        const domNode: any = useRef();
        useEffect(() => {
            const mabeHandle = (event: { target: any; }) => {
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
    const domNode = useClickOutside(() => {
        setUl(false)
    })
    return (
        <div className='h-full w-max flex items-center justify-center relative mr-[20px]' key={key}>
            <button className='h-full border-[#eee] border-[1px] rounded-[15px] flex justify-center items-center px-[10px] font-medium text-center text-[14px] text-[#9B9B9B]' onClick={() => setUl(!ul)}>{spam} <span className='ml-[5px] text-[#F48221]'>{Value || options[0].option}</span><i className="fa-solid fa-angle-down text-[15px] flex items-center justify-center ml-[6px]"></i></button>
            <ul ref={domNode} className={ul ? 'rounded-[15px] border-[1px] border-[#eee] p-[5px] w-full absolute top-[50px] bg-[#fff]' : 'hidden'}>
                {options.map((item:any,i:number) => {
                    return (
                        <li key={i} className='text-[#9B9B9B] text-[14px] transition-all duration-[.5s] font-medium text-center py-[7px] hover:text-[#F48221] hover:bg-[#eee] cursor-pointer rounded-[10px]' onClick={() => {
                            setValue(item.option)
                            setUl(!ul)
                        }}>{item.option}</li>
                    )
                })}
            </ul>
        </div>
    )
}
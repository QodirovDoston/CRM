import { useEffect, useRef, useState } from "react";
import { group } from "../../utils/Constants";

const Drowdown = ({ setBool, bool, id, getId }: { setBool: any, bool: any, id: any, getId: any }) => {
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
    const [ul, setUl] = useState(false)
    const [True, setTrue] = useState(false)
    const deleteBtn = (id: any) => {
        delete group[id - 1]
        setTimeout(() => {
            setTrue(!True)
        }, 100)
    }
    return (
        <>
            <button className="flex items-center rounded-3xl h-[30px]">
                <button className="text-orange border-2 rounded-[50em] rounded-tr-none rounded-br-none border-r-[1px] border-orange h-full px-[10px] hover:bg-[#f5f5f5]">Info</button>
                <button className="text-orange border-2 rounded-[50em] rounded-tl-none rounded-bl-none border-l-[1px] fa-solid fa-sort-down pb-[6px] border-orange h-full px-[15px] text-[14px] hover:bg-[#f5f5f5]" onClick={() => setUl(!ul)}></button>
            </button>
            <ul ref={domNode} className={!ul ? "text-[#555555] hidden absolute right-[110px] top-[30px] bg-white rounded-[5px] border-[1px] border-[#eee] w-[120px] text-center py-[8px] z-10" : "text-[#555555] absolute right-[110px] top-[30px] bg-white rounded-[5px] border-[1px] border-[#eee] w-[120px] text-center py-[8px] z-10"}>
                <li className="cursor-pointer hover:bg-orange hover:text-white" onClick={() => {
                    setUl(!ul)
                    setBool(!bool)
                    getId(id)
                }}>Tahrirlash</li>
                <li className="cursor-pointer hover:bg-orange hover:text-white" onClick={() => {
                    getId(id)
                    setUl(!ul)
                    deleteBtn(id)
                }}>O'chirish</li>
            </ul>
        </>
    );
}

export default Drowdown;

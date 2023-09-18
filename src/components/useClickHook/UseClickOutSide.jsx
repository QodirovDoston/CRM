import { useEffect } from "react";

export function useClickOutside() {
    let domNode = useRef();

    useEffect(() => {
        let mabeHandle = (event) => {
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
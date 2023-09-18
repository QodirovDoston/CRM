import { NavLink } from "react-router-dom"
import clsx from "clsx";


const CustomNavlink = ({ text, toPath, textStyle, borderNavlinkStyle, imgNavLink, style }: any) => {
    return (
        <NavLink
            to={toPath}
            style={style}
            className={clsx('flex items-center justify-start', textStyle, borderNavlinkStyle)}
        >
            <img src={imgNavLink} className="w-[20px] h-[20px]" alt="" />
            <h2 className="">{text}</h2>
        </NavLink>
    )
}

export default CustomNavlink
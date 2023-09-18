import React, { ChangeEventHandler } from 'react'

interface SignInPropType {
    value: string;
    placholder: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    label: string;
}
const SignIn = React.memo((props: SignInPropType) => {
    const { value, placholder, handleChange } = props
    return (
        <div className="relative h-[70px] mb-[15px] w-[60%] " data-te-input-wrapper-init>
            <input
                type="text"
                value={value}
                className="peer dark:placeholder-gray-400 border bg-transparent border-[#444444]  px-3   block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
                id="exampleFormControlInput2"
                onChange={handleChange}
                placeholder={placholder} />
            <label
                htmlFor="exampleFormControlInput2"
                className=" pointer-events-none absolute text-[#444444]  left-4 bottom-[53px] mb-0 max-w-[100%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0] peer-focus:scale-[.9] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            ><span className='bg-[#ffff]'>
                    {props?.label}</span>
            </label>
        </div>
        // <div className="relative h-[70px] mb-[15px] w-[60%] ">
        //     <div className="relative h-10 mb-[15px] w-[100%] ">
        //         <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-[#444444]">{props?.label}
        //         </label>
        //         <input value={value} onChange={handleChange} type="text" id="first_name" className="bg-gray-50 border border-[#444444] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-[#44444] " placeholder={placholder} required />
        //     </div>
        // </div>
    )
})

export default SignIn
import React from 'react'
import { MagnifyingGlass} from "react-loader-spinner"
const index = React.memo(() => {
    return (
        <div className="w-[70vw] h-[100vh] flex items-center justify-center">
            <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor='#c0efff'
            color='#e15b64'
        />
        </div>
    )
})

export default index
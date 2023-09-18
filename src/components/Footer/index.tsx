import React from 'react'
import clsx from 'clsx'

import { root, FooterStyle } from "../../style"
import { EducationP } from "../../assets/NavbarImgs"

const index = React.memo(() => {
  return (
    <footer className={clsx(FooterStyle.wrapper)}>
      <div className={clsx(root.container, FooterStyle.flexBox)}>
        <ul>
        </ul>
        <span>
          <img src={EducationP} alt="logo" className={clsx(FooterStyle.footerImg,'object-contain')}/>
        </span>
      </div>
    </footer>
  )
})

export default index
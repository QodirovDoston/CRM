import { CustomButtonProps } from "../../../types/index"

const ReusableBtn = (props: CustomButtonProps) => {
  const { text, handleClick,btnImgStyle,btnImg,ikkiImg, btnImg2, btnImg2Style, btnStyle, textStyle, ref } = props
  return (<>
    <button ref={ref} onClick={handleClick} className={btnStyle}>
      {/* {iconSee && */}
      <div className={ikkiImg}>
        <img className={btnImg2Style} src={btnImg2} alt="" />
        <img className={btnImgStyle} src={btnImg} alt="" />

      </div>
      <h2 className={textStyle}>{text}</h2>
    </button >
  </>
  )
}
export default ReusableBtn;
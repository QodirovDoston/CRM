import { CommonCardProps } from "../../types"

const Customcard = ({ imgCard, title, cardNumber, cardStyle, imgStyle }: CommonCardProps) => {
  return (
    <>
      <div className={cardStyle}>
        <div className="py-3">
          <h1 className="text-[20px] font-bold text-[#555555]">{cardNumber}</h1>
          <h1 className="text-[#F48221] text-[15px] font-medium">{title}</h1>
        </div>
        <div className="h-16 w-16  flex item-center justify-center bg-orange rounded-[50%]">
          <img className={imgStyle} src={imgCard} alt="" />
        </div>
      </div>
    </>
  )
}

export default Customcard;
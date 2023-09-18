import React, { Fragment } from "react";
import { MainPanelCards, MainPanelTeachersCard } from "../../utils/Constants";
import LineChart from "../../components/LineChart/LineChart";
import DoughtOne from "../../components/DoughtChart/DoughtOne";
import DoughtTwo from "../../components/DoughtChart/DoughtTwo";
import { NavLink } from "react-router-dom";
const Home = React.memo(() => {
  return (
    <div className="container pt-[30px] pl-[30px]">
      <div className="flex items-center">
        <div className="flex flex-wrap gap-[20px] w-[810px]">
          {MainPanelCards.map((elem) => {
            return (
              <div key={elem.id} className="w-[250px] p-[25px] bg-[#fff] rounded-[15px] border border-[#EDEDED] hover:shadow-lg shadow-md duration-300 flex items-center justify-between">
                <div className="w-[106px]">
                  <h2 className="text-[#555555] font-bold text-lg">{elem.number}</h2>
                  <h4 className="text-[#F48221] font-medium  text-[13px]">{elem.status}</h4>
                </div>
                <div className="bg-[#F48221] p-[17px] rounded-[50%]">
                  <center>
                    <img src={elem.img} alt="" />
                  </center>
                </div>
              </div>
            )
          })}
        </div>
        <div className="w-[351px] px-[20px] pt-[23px] pb-[15px] bg-[#fff] rounded-[15px] border border-[#EDEDED] hover:shadow-lg shadow-md duration-300">
          <div className="pb-[18px] flex items-center justify-between">
            <h2 className="font-bold text-[#555555] text-base ">O'qituvchilar</h2>
            <h4 className="font-medium text-[13px] text-[#F48221]">Tajribasi</h4>
          </div>
          {MainPanelTeachersCard.map((elem) => {
            return (
              <Fragment key={elem.id}>
                <div className="mb-[10px]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[7px] items-center">
                      <img src={elem.img} alt="" className="w-[28px] h-[28px] rounded-[50%] border border-[#F48221]" />
                      <h4 className="font-normal text-[13px] text-[#555555] capitalize">{elem.name}</h4>
                    </div>
                    <h5 className="font-normal text-[13px] text-[#555555]">{elem.practic}</h5>
                  </div>
                </div>
              </Fragment>
            )
          })}
          <h2 className="text-[#F48221] text-[13px] font-medium "><NavLink to={"/mentors"}>Barcha ma’lumotlar</NavLink></h2>
        </div>
      </div>
      <div className="flex mt-[20px] gap-[20px]">
        <LineChart />
        <DoughtOne />
        <DoughtTwo />
      </div>
    </div>
  )
})
export default Home
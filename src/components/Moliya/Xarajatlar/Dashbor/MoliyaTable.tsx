import { buttonsForMoliya, group } from "../../../../utils/Constants"
import ExportIcon from '../../../../assets/export_icon.svg'
import ImportIcon from '../../../../assets/import_icon.svg'
// import { search } from '../../../../assets/NavbarImgs/index'
import { CustomInput, ReusableBtn } from '../../../Common'
import { section1 } from '../../../../utils/Constants'
import { useState } from 'react'
const imgArr1 = [ExportIcon, ImportIcon]

export default function XarajaTable() {
  const [searchs, setSearchs] = useState('')
  const [sumaSearchs, setSumaSearchs] = useState('')

  return (
    <>
      <main className='pb-5 pt-2 items-center px-1 my-2'>
        {/* buttons */}
        <div className="flex gap-5 items-center">
          <div className="flex">
            <CustomInput
              inputStyle="border border-gray w-[185px] h-[40px]  border-1 border-red-300 rounded-[20px] text-[15px] p-4 items-center shadow-2xl"
              placeholder="Ism yoki Mobil raqam orqali qidirish"
              name=""
              label=""
              value={searchs}
              inputType="search"
              handleChange={(e) => setSearchs(e.target.value)}
            />
          </div>
          <div className="flex gap-3 ml-2  ">
            {section1.map((value, index) => {
              return (
                <div key={index} className="border border-gray flex items-center  rounded-[15px] p-2.5  bg-white text-[16px] h-[40px]  shadow-2xl">
                  <span className="w-max mr-2 text-gray  text-[16px] font-medium">{value.spam}</span>
                  <select className="focus:outline-none hover:cursor-pointer focus:text-red-500 bg-white font-medium   text-[#F48221] ">
                    <option value="">{value.option1} </option>
                    <option value="option1">{value.option2}</option>
                    <option value="option2">{value.option3}</option>
                    <option value="option3">{value.option4}</option>
                  </select>
                </div>
              )
            })}
              <CustomInput
              inputStyle="border border-gray w-[148px] h-[40px]  border-1 border-red-300 rounded-[20px] text-[15px] p-4 items-center shadow-2xl"
              placeholder="Sum"
              name=""
              label=""
              value={sumaSearchs}
              inputType="search"
              handleChange={(e) => setSumaSearchs(e.target.value)}
            />
            <div className="flex gap-2 ml-[30px]">
              {buttonsForMoliya.map((value, index) => {
                return (
                  <ReusableBtn
                    key={index}
                    className=""
                    btnImg2={imgArr1[index]}
                    btnImgStyle=""
                    btnImg2Style=""
                    text=""
                    // handleClick={handleSubmit}
                    btnStyle={value.btnStyle}
                    textStyle={value.textStyle}
                  />
                )
              })}
            </div>

          </div>
        </div>
        {/* table */}
        <div className="px-2 py-4  mt-5  mb-[-25px] gap-1 overflow-y-scroll   h-[220px]  w-[1220px]  scrol">
          <table className="w-[1250px] ">
            <thead className="">
              <tr className="text-justify items-center text-[13px] h-9 text-[#555555]">
                <th>Nomi</th>
                <th>Summa</th>
                <th>to'lov turi</th>
                <th>Turkum</th>
                <th>Xodim</th>
              </tr>
            </thead>
            <tbody>
              {group.map((value) => {
                return (
                  <tr key={value.id} className="border-b-2 border-b-hrcolor  border-t-[2px] border-t-hrcolor text-[14px] text-black  h-10">
                    <td className="text-[14px] text-black">{value.name}</td>
                    <td className="">{value.Kurslar}</td>
                    <td>{value.name}</td>
                    <td>{value.name} </td>
                    {/* <td>
                      <button className="bg-[#FF8884] text-[13px] text-black rounded-3xl px-2">{value.Guruh} </button>
                    </td> */}
                    <div>
                      <td>{value.name} </td>
                      <p className="text-[10px] text-black">23.09.2023 gacha</p>
                    </div>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

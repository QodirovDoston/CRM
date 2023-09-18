import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { downlodeicon } from "../../../../assets/NavbarImgs/index"
import { chartButtonMoliya } from '../../../../utils/Constants';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['green', 'red', 'orange'],
  datasets: [
    {
      label: "10 899 000 so'm of Votes",
      lable1: "899 000 so'm of Votes",
      lable2: "11 899 000 so'm of Votes",
      data: [34, 31, 37],
      backgroundColor: [
        '#009F8F',
        '#FF6666',
        'orange'
      ],
      borderColor: [
        '#009F8F',
        '#FF6666',
        'orange'
      ],
      borderWidth: 0,
    },
  ],
};

export function MoliyaChartPia() {
  return (
    <>
      <div className='flex -mt-[76px]'>
        <div className='bg-white 2xl:w-[390px] xl:w-[350px] w-[300px] rounded-[10px]  2xl:h-[430px] h-[445px] shadow-2xl  mt-6 '>
          <h3 className='text-textColor text-center text-[20px] py-3 font-bold cursor-pointer'>Talabalar statitistikasi</h3>
          <div className='border-[1px] mb-1  border-hrcolor'>
          </div>
          <div className='w-[240px] flex mx-auto'>
            <Doughnut className='flex w-[310px]' data={data} />
          </div>
          <div className="flex justify-center  mb-[10px]">
            <div>
              <img className='mt-[14px] mr-2' src={downlodeicon} alt="" />
            </div>
            <h1 className='text-[15px] font-bold mt-[13px]  text-textColor cursor-pointer'>Ma'lumotlarni yuklab olish</h1>
          </div>
          <div className='border-[1px] mb-[13px] border-hrcolor'>
          </div>
          <div className='flex gap-10  justify-center'>
            {chartButtonMoliya.map((value, index) => {
              return (
                <div key={index} className='flex'>
                  <div className={value.borderStyle}> </div>
                  <p className='text-[15px] font-bold text-textColor p-[7px]'>{value.text}</p>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default MoliyaChartPia
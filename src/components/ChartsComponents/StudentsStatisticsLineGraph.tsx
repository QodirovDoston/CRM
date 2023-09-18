import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement
} from 'chart.js'
import ChartSelect from "../Common/CustemBtn/ChartSelect";

ChartJS.register(
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale
)
const StudentsStatisticsLineGraph = () => {
  const data = {
    labels: ["Yanvar", "Fevral", "Mart", "aprel", "May", "Iyun", "Iyul"],
    datasets: [{
      data: [2, 3, 5, 8, 9, 9],
      backgroundColor: 'transparent',
      borderColor: 'green',
      pointBorderColor: [
        "#88AAF3",
        "#88AAF3",
        "#88AAF3",
        "#88AAF3",
        "#88AAF3",
        "red"
      ],
      pointBorderWidth: 9,
    }]
  };
  const options: any = {
    plugins: {
      legend: false
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value: any) => value + "K"
        },
        grid: {
          borderDash: [10]
        }
      }
    }
  };

  return (
    <div className="contaner ">
      <div className='bg-[#FFFFFF] 2xl:w-[500px] xl:w-[480px] lg:w-[480px] rounded-[10px]  2xl:h-[445px] h-[440px] shadow-2xl  mt-6  '>
        <div className="flex justify-between  px-[20px] py-[20px]">
          <h3 className='text-textColor text-[20px] font-bold cursor-pointer    '>Talabalar statitistikasi</h3>
          <ChartSelect />
        </div>
        <div className='border-[1px] mb-2  border-hrcolor'>
        </div>
        <div className="py-5">
          <div className="py-[13px] px-[20px] cursor-pointer">
            <Line data={data} options={options} />
          </div>
          <div className='border-[1px] mt-[19px]  border-hrcolor'>
          </div>
          <p className='text-orange text-[15px] font-bold py-[17px] px-[20px] cursor-pointer'>Barcha ma’lumotlar</p>
        </div>
      </div>
    </div>

  )

}

export default StudentsStatisticsLineGraph;
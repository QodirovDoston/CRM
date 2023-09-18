import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement
} from 'chart.js'
import ChartSelect from "../../../Common/CustemBtn/ChartSelect";

ChartJS.register(
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale
)
const MoliyaChartLine = () => {
  const data = {
    labels: ["Yanvar", "Fevral", "Mart", "aprel", "May", "Iyun", "Iyul"],
    datasets: [{
      data: [3,12, 13, 15, 18, 29, 45, 38, 9],
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
        min: 1,
        max: 45,
        grid: {
          display: true,
        }
      },
      y: {
        min: 7,
        max: 45,
        ticks: {
          stepSize: 2,
          callback: (value: any) => value + "K"
        },
        grid: {
          borderDash: [10]
        }
      }
    }
    }

  return (
    <div className="mx-1">
      <div className='bg-[#FFFFFF] 2xl:w-[796px] w-[580px] rounded-[10px]  2xl:h-[374px] h-[356px] shadow-2xl  mt-2'>
        <div className="flex justify-between  px-[20px] py-[10px]">
          <h3 className='text-textColor text-[20px] font-bold cursor-pointer'>Talabalar statitistikasi</h3>
          <ChartSelect />
        </div>
        <div className="-mt-4">
          <div className="w-[720px] h-[60%]  px-[20px] cursor-pointer">
            <Line className="w-[100%] h-[30%]"data={data} options={options} ></Line>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoliyaChartLine;
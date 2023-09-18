import { useState } from 'react';
import { UserData } from '../../utils/MainPanelData';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
ChartJS.register()
const LineChart = () => {
    const [userData, _setUserData] = useState({
        labels: UserData.map((data) => data.year),
        borderWidth: 2,
        datasets: [
            {
                label: "iTech Academy",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "white"
                ],
                borderColor: ["#009F8F", "#88AAF3", "#88AAF3", "#88AAF3", "#88AAF3", "red"],
                borderWidth: 3,
            },
        ],
    });
    
    const options = {
        scales: {
            x: {
                grid: {
                    display: false,
                }

            }
        }
    }
    return (
        <div className="w-[451px] bg-[#fff] rounded-[15px] border border-[#EDEDED] hover:shadow-lg shadow-md duration-300">
            <div className="px-[30px] pt-[19px] pb-[24px]">
                <div className="flex justify-between">
                    <h2 className="text-[#555555] font-bold text-lg">Talabalar statitistikasi</h2>
                    <select className="outline-none">
                        <option value="">6 oylik</option>
                        <option value="">3 oylik</option>
                        <option value="">2 oylik</option>
                        <option value="">1 oylik</option>
                    </select>
                </div>
            </div>
            <hr className="border-[#EDEDED]" />
            <div className="px-[30px] pt-[19px] pb-[24px]">
                <Line data={userData} height={200} options={options} />
            </div>
            <hr className="border-[#EDEDED]" />
            <div className="px-[30px] py-[18px]">
                <h2 className="text-[#F48221] text-[13px] font-medium cursor-pointer">Barcha ma’lumotlar</h2>
            </div>
        </div>
    );
}

export default LineChart;

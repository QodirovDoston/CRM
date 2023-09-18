import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { downlodeicon } from "../../assets/NavbarImgs/index"
import { chartButton } from '../../utils/Constants';

const chart = [
    {
        id: 1,
        chart: Doughnut,
        title: "Talabalar statitistikasi"
    },
    {
        id: 2,
        chart: Doughnut,
        title: "Talabalar statitistikasi"
    }
]

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['green', 'red'],
    datasets: [
        {
            label: "10 899 000 so'm of Votes",
            lable1: "17 899 000 so'm of Votes",
            data: [63, 37],
            backgroundColor: [
                '#009F8F',
                '#FF6666'
            ],
            borderColor: [
                '#009F8F',
                '#FF6666'
            ],
            borderWidth: 0,
        },
    ],
};

export function PaymentPicharts() {
    return (
        <>
            <div className='flex gap-4'>
                {chart.map((_value) => {
                    return (
                        <div key={_value.id} className='bg-white  2xl:w-[340px] xl:w-[300px] w-[300px] rounded-[10px]  2xl:h-[445px] h-[445px] shadow-2xl  mt-6 '>
                            <h3 className='text-textColor text-center text-[20px] py-4 font-bold cursor-pointer'>{_value.title}</h3>
                            <div className='border-[1px] mb-1  border-hrcolor'>
                            </div>
                            <div className='w-[258px] flex mx-auto'>
                                <Doughnut className='flex w-[320px]' data={data} />
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
                                {chartButton.map((value) => {
                                    return (
                                        <div key={value.id} className='flex'>
                                            <div className={value.borderStyle}> </div>
                                            <p className='text-[15px] font-bold text-textColor p-[7px]'>{value.text}</p>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>

                    )
                })}

            </div>
        </>
    )
}

export default PaymentPicharts